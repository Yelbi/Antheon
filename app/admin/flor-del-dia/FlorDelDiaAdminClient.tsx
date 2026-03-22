"use client";

import { useState } from "react";
import s from "@/styles/admin.module.css";

type FlorOption = { slug: string; nombre: string; poster: string };
type Entry = { id: number; fecha: string; florSlug: string; descripcion: string; img1: string; img2: string; img3: string; img4: string };

interface Props {
  entries: Entry[];
  flores: FlorOption[];
}

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DIAS_POR_MES = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function buildAllDays(): { mmdd: string; label: string; mesIdx: number }[] {
  const days = [];
  for (let m = 0; m < 12; m++) {
    for (let d = 1; d <= DIAS_POR_MES[m]; d++) {
      const mmdd = `${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      days.push({ mmdd, label: `${d} de ${MESES[m]}`, mesIdx: m });
    }
  }
  return days;
}

const ALL_DAYS = buildAllDays();
const EMPTY_FORM = { florSlug: "", descripcion: "", img1: "", img2: "", img3: "", img4: "" };

export default function FlorDelDiaAdminClient({ entries: initialEntries, flores }: Props) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const entryMap = new Map(entries.map((e) => [e.fecha, e]));

  function selectDay(mmdd: string) {
    setSelected(mmdd);
    setSaved(false);
    setError("");
    const existing = entryMap.get(mmdd);
    setForm(
      existing
        ? { florSlug: existing.florSlug, descripcion: existing.descripcion, img1: existing.img1, img2: existing.img2, img3: existing.img3, img4: existing.img4 }
        : EMPTY_FORM
    );
  }

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setLoading(true); setSaved(false); setError("");
    const res = await fetch("/api/admin/flor-del-dia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fecha: selected, ...form }),
    });
    setLoading(false);
    if (res.ok) {
      const updated: Entry = await res.json();
      setEntries((prev) => {
        const idx = prev.findIndex((e) => e.fecha === selected);
        if (idx >= 0) return prev.map((e) => (e.fecha === selected ? updated : e));
        return [...prev, updated];
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al guardar.");
    }
  }

  async function handleDelete() {
    if (!selected) return;
    const day = ALL_DAYS.find((d) => d.mmdd === selected);
    if (!confirm(`¿Eliminar la configuración para ${day?.label}?`)) return;
    setLoading(true);
    const res = await fetch("/api/admin/flor-del-dia", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fecha: selected }),
    });
    setLoading(false);
    if (res.ok) {
      setEntries((prev) => prev.filter((e) => e.fecha !== selected));
      setForm(EMPTY_FORM);
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al eliminar.");
    }
  }

  const hasEntry = entryMap.has(selected);
  const selectedFlor = flores.find((f) => f.slug === form.florSlug);
  const selectedLabel = ALL_DAYS.find((d) => d.mmdd === selected)?.label ?? "";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 28, alignItems: "start" }}>

      {/* ── Left: 366-day list ─────────────────────────────────── */}
      <div>
        {MESES.map((mes, mesIdx) => {
          const days = ALL_DAYS.filter((d) => d.mesIdx === mesIdx);
          return (
            <div key={mes} style={{ marginBottom: 8 }}>
              {/* Month header */}
              <p style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 12,
                color: "rgba(241,204,186,0.3)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "18px 6px 8px",
                margin: 0,
                position: "sticky",
                top: 0,
                background: "#111",
                zIndex: 2,
              }}>
                {mes}
              </p>

              {/* Day rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {days.map(({ mmdd, label }) => {
                  const entry = entryMap.get(mmdd);
                  const flor = entry ? flores.find((f) => f.slug === entry.florSlug) : null;
                  const isSelected = selected === mmdd;

                  return (
                    <button
                      key={mmdd}
                      type="button"
                      onClick={() => selectDay(mmdd)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "8px 12px",
                        background: isSelected
                          ? "rgba(35,113,77,0.2)"
                          : entry
                            ? "rgba(35,113,77,0.06)"
                            : "transparent",
                        border: `1px solid ${isSelected
                          ? "rgba(35,113,77,0.55)"
                          : entry
                            ? "rgba(35,113,77,0.18)"
                            : "rgba(255,255,255,0.04)"}`,
                        borderRadius: 7,
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                        transition: "background 0.12s, border-color 0.12s",
                      }}
                    >
                      {/* Dot indicator */}
                      <span style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: entry ? "#23714d" : "rgba(255,255,255,0.08)",
                      }} />

                      {/* Date label */}
                      <span style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: 13,
                        color: isSelected ? "#f1ccba" : "rgba(241,204,186,0.55)",
                        minWidth: 130,
                      }}>
                        {label}
                      </span>

                      {/* Flower name if configured */}
                      {flor && (
                        <span style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: 13,
                          color: isSelected ? "rgba(241,204,186,0.9)" : "rgba(241,204,186,0.6)",
                        }}>
                          {flor.nombre}
                        </span>
                      )}

                      {/* Custom description badge */}
                      {entry?.descripcion && (
                        <span style={{
                          marginLeft: "auto",
                          fontFamily: "Nunito, sans-serif",
                          fontSize: 10,
                          color: "rgba(241,204,186,0.25)",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          flexShrink: 0,
                        }}>
                          desc
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Right: sticky form ─────────────────────────────────── */}
      <div style={{ position: "sticky", top: 20 }}>
        {!selected ? (
          <div className={s.formCard} style={{
            textAlign: "center",
            color: "rgba(241,204,186,0.25)",
            fontFamily: "Nunito, sans-serif",
            fontSize: 14,
            padding: "52px 28px",
          }}>
            Selecciona un día de la lista para configurarlo
          </div>
        ) : (
          <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {/* Day header */}
            <div className={s.formCard}>
              <p style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 18,
                color: "#f1ccba",
                margin: 0,
              }}>
                {selectedLabel}
              </p>
              {hasEntry && (
                <p style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: 10,
                  color: "#23714d",
                  margin: "6px 0 0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}>
                  Configurado
                </p>
              )}
            </div>

            {/* Flower preview */}
            {selectedFlor && (
              <div className={s.formCard} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedFlor.poster}
                  alt={selectedFlor.nombre}
                  style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8, border: "1.5px solid rgba(35,113,77,0.4)", flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: 14, color: "#f1ccba", margin: 0 }}>
                    {selectedFlor.nombre}
                  </p>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 11, color: "rgba(241,204,186,0.35)", margin: "4px 0 0" }}>
                    Flor seleccionada
                  </p>
                </div>
              </div>
            )}

            {/* Flower + description */}
            <div className={s.formCard}>
              <p className={s.formCardTitle}>Contenido</p>
              <div className={s.formInner}>
                <div className={s.formGroup}>
                  <label className={s.label}>Flor a destacar</label>
                  <select className={s.input} value={form.florSlug} onChange={update("florSlug")}>
                    <option value="">— Automático —</option>
                    {flores.map((f) => (
                      <option key={f.slug} value={f.slug}>{f.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label}>
                    Descripción
                    <span className={s.labelHint}> — opcional</span>
                  </label>
                  <textarea
                    className={s.textarea}
                    rows={3}
                    placeholder="Deja vacío para usar la descripción estándar..."
                    value={form.descripcion}
                    onChange={update("descripcion")}
                  />
                </div>
              </div>
            </div>

            {/* Extra images */}
            <div className={s.formCard}>
              <p className={s.formCardTitle}>Imágenes extra</p>
              <div className={s.formInner}>
                {(["img1", "img2", "img3", "img4"] as const).map((key, i) => (
                  <div key={key} className={s.formGroup}>
                    <label className={s.label}>Imagen {i + 1}</label>
                    <input
                      className={s.input}
                      placeholder="/img/... o https://..."
                      value={form[key]}
                      onChange={update(key)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {error && <p className={s.errorMsg}>{error}</p>}
            {saved && (
              <p style={{ color: "#23714d", fontFamily: "Nunito, sans-serif", fontSize: 14, textAlign: "center", marginBottom: 16 }}>
                ✓ Guardado
              </p>
            )}

            <div className={s.formActions}>
              {hasEntry && (
                <button type="button" className={`${s.btn} ${s.btnDanger}`} onClick={handleDelete} disabled={loading}>
                  Eliminar
                </button>
              )}
              <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
                {loading ? "Guardando…" : hasEntry ? "Actualizar" : "Guardar"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
