"use client";

import { useState } from "react";
import s from "@/styles/admin.module.css";

type FlorOption = { slug: string; nombre: string; poster: string };

interface CurrentConfig {
  florSlug: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

interface Props {
  current: CurrentConfig | null;
  flores: FlorOption[];
}

export default function FlorDelDiaAdminClient({ current, flores }: Props) {
  const [form, setForm] = useState({
    florSlug: current?.florSlug ?? "",
    img1: current?.img1 ?? "",
    img2: current?.img2 ?? "",
    img3: current?.img3 ?? "",
    img4: current?.img4 ?? "",
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const selectedFlor = flores.find((f) => f.slug === form.florSlug);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSaved(false);
    setError("");
    const res = await fetch("/api/admin/flor-del-dia", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al guardar.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {/* Preview de la flor seleccionada */}
      {selectedFlor && (
        <div className={s.formCard} style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selectedFlor.poster}
            alt={selectedFlor.nombre}
            style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10, border: "1.5px solid rgba(35,113,77,0.4)", flexShrink: 0 }}
          />
          <div>
            <p className={s.formCardTitle} style={{ marginBottom: 4 }}>{selectedFlor.nombre}</p>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: "rgba(241,204,186,0.45)" }}>
              Flor actualmente seleccionada
            </p>
          </div>
        </div>
      )}

      {/* Selección de flor */}
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Flor del Día</p>
        <div className={s.formInner}>
          <div className={s.formGroup}>
            <label className={s.label}>Flor a destacar</label>
            <select className={s.input} value={form.florSlug} onChange={update("florSlug")}>
              <option value="">— Automático (basado en la fecha) —</option>
              {flores.map((f) => (
                <option key={f.slug} value={f.slug}>{f.nombre}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Imágenes extra para el slideshow */}
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Imágenes del slideshow</p>
        <div className={s.formInner}>
          <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: "rgba(241,204,186,0.4)", marginBottom: 20 }}>
            La imagen principal de la flor se añade automáticamente como primera slide. Añade hasta 4 imágenes adicionales.
          </p>
          <div className={s.formRow2}>
            {(["img1", "img2", "img3", "img4"] as const).map((key, i) => (
              <div key={key} className={s.formGroup}>
                <label className={s.label}>Imagen adicional {i + 1}</label>
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
      </div>

      {error && <p className={s.errorMsg}>{error}</p>}
      {saved && (
        <p style={{ color: "#23714d", fontFamily: "Nunito, sans-serif", fontSize: 14, textAlign: "center" }}>
          ✓ Configuración guardada
        </p>
      )}

      <div className={s.formActions}>
        <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
          {loading ? "Guardando…" : "Guardar configuración"}
        </button>
      </div>
    </form>
  );
}
