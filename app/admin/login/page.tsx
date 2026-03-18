"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import s from "@/styles/admin.module.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Clave incorrecta.");
    }
  }

  return (
    <div className={s.loginWrap}>
      <div className={s.loginBox}>
        <h1 className={s.loginTitle}>Antheon Admin</h1>
        <p className={s.loginSub}>Ingresa la clave de acceso</p>

        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="key">
              Clave
            </label>
            <input
              id="key"
              type="password"
              className={s.input}
              value={key}
              onChange={(e) => setKey(e.target.value)}
              autoFocus
              required
            />
          </div>

          {error && <p className={s.errorMsg}>{error}</p>}

          <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={loading}>
            {loading ? "Verificando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
