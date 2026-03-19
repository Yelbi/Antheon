"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIAS } from "@/data/flores";
import s from "@/styles/admin.module.css";

type FlorRow = {
  id: number;
  slug: string;
  nombre: string;
  nombreCientifico: string;
  description: string;
  poster: string;
  categoria: string;
  origen: string;
  estacion: string;
  cuidados: string;
  genero: string;
  familia: string;
  simbolismo: string;
  usos: string;
  relacion1: string;
  relacion2: string;
  relacion3: string;
  peligrosa: boolean;
};

const ESTACIONES = ["Primavera", "Verano", "Otoño", "Invierno", "Todo el año", "Primavera, Verano", "Verano, Otoño", "Otoño, Invierno"];

export default function EditarFlorClient({ flor }: { flor: FlorRow }) {
  const [form, setForm] = useState({
    slug: flor.slug,
    nombre: flor.nombre,
    nombreCientifico: flor.nombreCientifico,
    description: flor.description,
    poster: flor.poster,
    categoria: flor.categoria,
    origen: flor.origen,
    estacion: flor.estacion,
    cuidados: flor.cuidados,
    genero: flor.genero,
    familia: flor.familia,
    simbolismo: flor.simbolismo,
    usos: flor.usos,
    relacion1: flor.relacion1,
    relacion2: flor.relacion2,
    relacion3: flor.relacion3,
    peligrosa: flor.peligrosa,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  type Field = keyof typeof form;

  function update(field: Field) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch(`/api/admin/flores/${flor.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/admin/flores";
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al guardar los cambios.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {/* ── Identificación ── */}
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Identificación</p>
        <div className={s.formInner}>
          <div className={s.formRow}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="nombre">Nombre común *</label>
              <input id="nombre" className={s.input} value={form.nombre} onChange={update("nombre")} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="slug">Slug * <span className={s.labelHint}>(URL)</span></label>
              <input id="slug" className={s.input} value={form.slug} onChange={update("slug")} required />
            </div>
          </div>
          <div className={s.formRow}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="nombreCientifico">Nombre científico</label>
              <input id="nombreCientifico" className={s.input} value={form.nombreCientifico} onChange={update("nombreCientifico")} />
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
              <input id="genero" className={s.input} value={form.genero} onChange={update("genero")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="familia">Familia</label>
              <input id="familia" className={s.input} value={form.familia} onChange={update("familia")} />
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
              <input id="origen" className={s.input} value={form.origen} onChange={update("origen")} />
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
            <textarea id="simbolismo" className={s.textarea} value={form.simbolismo} onChange={update("simbolismo")} />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usos">Usos principales</label>
            <textarea id="usos" className={s.textarea} value={form.usos} onChange={update("usos")} />
          </div>
        </div>
      </div>

      {/* ── Imagen ── */}
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Imagen de portada</p>
        <div className={s.formInner}>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="poster">URL del poster *</label>
            <input id="poster" className={s.input} value={form.poster} onChange={update("poster")} required />
          </div>
        </div>
      </div>

      {/* ── Relacionadas ── */}
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Flores relacionadas <span className={s.labelHint}>(slugs del catálogo)</span></p>
        <div className={s.formInner}>
          <div className={s.formRow3}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel1">Relacionada 1</label>
              <input id="rel1" className={s.input} placeholder="tulipanes" value={form.relacion1} onChange={update("relacion1")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel2">Relacionada 2</label>
              <input id="rel2" className={s.input} placeholder="lirios" value={form.relacion2} onChange={update("relacion2")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel3">Relacionada 3</label>
              <input id="rel3" className={s.input} placeholder="orquideas" value={form.relacion3} onChange={update("relacion3")} />
            </div>
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
          {loading ? "Guardando…" : "Guardar cambios"}
        </button>
        <Link href="/admin/flores" className={`${s.btn} ${s.btnGhost}`}>Cancelar</Link>
      </div>
    </form>
  );
}
