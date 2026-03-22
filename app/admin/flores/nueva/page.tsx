"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIAS } from "@/data/flores";
import s from "@/styles/admin.module.css";

const EMPTY = {
  slug: "", nombre: "", nombreCientifico: "", description: "",
  poster: "", categoria: "", origen: "", estacion: "", cuidados: "",
  genero: "", familia: "", simbolismo: "", usos: "",
  peligrosa: false,
  slide1: "", slide2: "", slide3: "",
};

const ESTACIONES = ["Primavera", "Verano", "Otoño", "Invierno", "Todo el año", "Primavera, Verano", "Verano, Otoño", "Otoño, Invierno"];

export default function NuevaFlorPage() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof EMPTY) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/admin/flores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/admin/flores";
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al crear la flor.");
    }
  }

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <Link href="/admin/flores" className={s.pageBack}>← Volver</Link>
          <h1 className={s.pageTitle}>Nueva flor</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={s.form}>
        {/* ── Identificación ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Identificación</p>
          <div className={s.formInner}>
            <div className={s.formRow}>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="nombre">Nombre común *</label>
                <input id="nombre" className={s.input} placeholder="Rosas" value={form.nombre} onChange={update("nombre")} required />
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="slug">Slug * <span className={s.labelHint}>(URL)</span></label>
                <input id="slug" className={s.input} placeholder="rosas" value={form.slug} onChange={update("slug")} required />
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="nombreCientifico">Nombre científico</label>
                <input id="nombreCientifico" className={s.input} placeholder="Rosa sp." value={form.nombreCientifico} onChange={update("nombreCientifico")} />
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="categoria">Categoría *</label>
                <select id="categoria" className={s.input} value={form.categoria} onChange={update("categoria")} required>
                  <option value="">Selecciona una categoría</option>
                  {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Descripción ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Descripción</p>
          <div className={s.formInner}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="description">Descripción general *</label>
              <textarea id="description" className={s.textarea} style={{ minHeight: 120 }} value={form.description} onChange={update("description")} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="cuidados">Cuidados y cultivo</label>
              <textarea id="cuidados" className={s.textarea} placeholder="Riego, luz solar, temperatura ideal…" value={form.cuidados} onChange={update("cuidados")} />
            </div>
          </div>
        </div>

        {/* ── Clasificación botánica ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Clasificación botánica</p>
          <div className={s.formInner}>
            <div className={s.formRow}>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="genero">Género</label>
                <input id="genero" className={s.input} placeholder="Rosa" value={form.genero} onChange={update("genero")} />
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="familia">Familia</label>
                <input id="familia" className={s.input} placeholder="Rosaceae" value={form.familia} onChange={update("familia")} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Origen y estación ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Origen y floración</p>
          <div className={s.formInner}>
            <div className={s.formRow}>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="origen">País / Región de origen</label>
                <input id="origen" className={s.input} placeholder="Asia, Europa" value={form.origen} onChange={update("origen")} />
              </div>
              <div className={s.formGroup}>
                <label className={s.label} htmlFor="estacion">Estación de floración</label>
                <select id="estacion" className={s.input} value={form.estacion} onChange={update("estacion")}>
                  <option value="">Sin especificar</option>
                  {ESTACIONES.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ── Simbolismo y usos ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Simbolismo y usos</p>
          <div className={s.formInner}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="simbolismo">Simbolismo</label>
              <textarea id="simbolismo" className={s.textarea} placeholder="Amor, pureza, esperanza…" value={form.simbolismo} onChange={update("simbolismo")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usos">Usos principales</label>
              <textarea id="usos" className={s.textarea} placeholder="Ornamental, medicinal, aromaterapia…" value={form.usos} onChange={update("usos")} />
            </div>
          </div>
        </div>

        {/* ── Imagen ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Imagen de portada</p>
          <div className={s.formInner}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="poster">URL del poster *</label>
              <input id="poster" className={s.input} placeholder="/img/Generales/Galeria/Rosas.jpg" value={form.poster} onChange={update("poster")} required />
            </div>
          </div>
        </div>

        {/* ── Imágenes del slider ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Imágenes del slider <span className={s.labelHint}>(fondo de cada diapositiva)</span></p>
          <div className={s.formInner}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="slide1">Slide 1 — Presentación</label>
              <input id="slide1" className={s.input} placeholder="/img/Generales/Flores/Rosas/rosas 1.jpg" value={form.slide1} onChange={update("slide1")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="slide2">Slide 2 — Descripción</label>
              <input id="slide2" className={s.input} placeholder="/img/Generales/Flores/Rosas/rosas 2.jpg" value={form.slide2} onChange={update("slide2")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="slide3">Slide 3 — Usos & Cuidados</label>
              <input id="slide3" className={s.input} placeholder="/img/Generales/Flores/Rosas/rosas 3.jpg" value={form.slide3} onChange={update("slide3")} />
            </div>
          </div>
        </div>

        {/* ── Peligrosa ── */}
        <div className={s.formCard}>
          <p className={s.formCardTitle}>Clasificación de riesgo</p>
          <div className={s.formInner}>
            <label className={s.checkboxLabel}>
              <input
                type="checkbox"
                checked={form.peligrosa}
                onChange={(e) => setForm((f) => ({ ...f, peligrosa: e.target.checked }))}
              />
              Marcar como flor peligrosa / tóxica
            </label>
          </div>
        </div>

        {error && <p className={s.errorMsg}>{error}</p>}
        <div className={s.formActions}>
          <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
            {loading ? "Guardando…" : "Crear flor"}
          </button>
          <Link href="/admin/flores" className={`${s.btn} ${s.btnGhost}`}>Cancelar</Link>
        </div>
      </form>
    </div>
  );
}
