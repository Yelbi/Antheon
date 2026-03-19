"use client";

import { useState } from "react";
import Link from "next/link";
import s from "@/styles/admin.module.css";

type Articulo = {
  id: number;
  nombre: string;
  description: string;
  poster: string;
  link: string;
  relaciones1: string;
  relaciones2: string;
  relaciones3: string;
};

export default function EditarArticuloClient({ articulo }: { articulo: Articulo }) {
  const [form, setForm] = useState({
    nombre: articulo.nombre,
    description: articulo.description,
    poster: articulo.poster,
    link: articulo.link,
    relaciones1: articulo.relaciones1,
    relaciones2: articulo.relaciones2,
    relaciones3: articulo.relaciones3,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  type Field = keyof typeof form;

  function update(field: Field) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch(`/api/admin/articulos/${articulo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/admin";
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al guardar los cambios.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.formCard}>
        <p className={s.formCardTitle}>Información principal</p>
        <div className={s.formInner}>
          <div className={s.formRow}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="nombre">Nombre *</label>
              <input id="nombre" className={s.input} value={form.nombre} onChange={update("nombre")} required />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="link">Link externo *</label>
              <input id="link" className={s.input} value={form.link} onChange={update("link")} required />
            </div>
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="description">Descripción *</label>
            <textarea id="description" className={s.textarea} value={form.description} onChange={update("description")} required />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="poster">URL de imagen (poster) *</label>
            <input id="poster" className={s.input} value={form.poster} onChange={update("poster")} required />
          </div>
        </div>
      </div>

      <div className={s.formCard}>
        <p className={s.formCardTitle}>Imágenes relacionadas <span className={s.labelHint}>(URLs)</span></p>
        <div className={s.formInner}>
          <div className={s.formRow3}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel1">Imagen 1</label>
              <input id="rel1" className={s.input} value={form.relaciones1} onChange={update("relaciones1")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel2">Imagen 2</label>
              <input id="rel2" className={s.input} value={form.relaciones2} onChange={update("relaciones2")} />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="rel3">Imagen 3</label>
              <input id="rel3" className={s.input} value={form.relaciones3} onChange={update("relaciones3")} />
            </div>
          </div>
        </div>
      </div>

      {error && <p className={s.errorMsg}>{error}</p>}
      <div className={s.formActions}>
        <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
          {loading ? "Guardando…" : "Guardar cambios"}
        </button>
        <Link href="/admin" className={`${s.btn} ${s.btnGhost}`}>Cancelar</Link>
      </div>
    </form>
  );
}
