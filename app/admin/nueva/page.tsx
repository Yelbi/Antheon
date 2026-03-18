"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import s from "@/styles/admin.module.css";

const EMPTY = { nombre: "", description: "", poster: "", link: "", relaciones1: "", relaciones2: "", relaciones3: "" };

export default function NuevaArticuloPage() {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof EMPTY) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/articulos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Error al crear la entrada.");
    }
  }

  return (
    <div className={s.adminLayout}>
      <header className={s.topbar}>
        <Link href="/admin" className={s.topbarTitle}>
          Antheon Admin
        </Link>
        <Link href="/admin" className={s.topbarLink}>
          ← Volver
        </Link>
      </header>

      <main className={s.page}>
        <div className={s.pageHeader}>
          <h1 className={s.pageTitle}>Nueva entrada</h1>
        </div>

        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="nombre">Nombre *</label>
            <input id="nombre" className={s.input} value={form.nombre} onChange={update("nombre")} required />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="description">Descripción *</label>
            <textarea id="description" className={s.textarea} value={form.description} onChange={update("description")} required />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="poster">URL de imagen (poster) *</label>
            <input id="poster" className={s.input} value={form.poster} onChange={update("poster")} required />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="link">Link externo *</label>
            <input id="link" className={s.input} value={form.link} onChange={update("link")} required />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="rel1">Relación 1</label>
            <input id="rel1" className={s.input} value={form.relaciones1} onChange={update("relaciones1")} />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="rel2">Relación 2</label>
            <input id="rel2" className={s.input} value={form.relaciones2} onChange={update("relaciones2")} />
          </div>

          <div className={s.formGroup}>
            <label className={s.label} htmlFor="rel3">Relación 3</label>
            <input id="rel3" className={s.input} value={form.relaciones3} onChange={update("relaciones3")} />
          </div>

          {error && <p className={s.errorMsg}>{error}</p>}

          <div className={s.formActions}>
            <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
              {loading ? "Guardando…" : "Crear entrada"}
            </button>
            <Link href="/admin" className={`${s.btn} ${s.btnGhost}`}>
              Cancelar
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
