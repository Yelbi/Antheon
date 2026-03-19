"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/galeria", label: "Galería" },
  { href: "/flor-del-dia", label: "Flor del Día" },
  { href: "/tu-flor", label: "Tu Flor" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  // Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/galeria?q=${encodeURIComponent(query)}` : "/galeria");
    setQ("");
    setOpen(false);
  };

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {/* Drawer */}
      <nav className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        {/* Buscador en el drawer */}
        <form onSubmit={handleSearch} className={styles.drawerSearchForm}>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar flor..."
            className={styles.drawerSearchInput}
            aria-label="Buscar flor"
          />
          <button type="submit" className={styles.drawerSearchBtn} aria-label="Buscar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        <ul className={styles.drawerList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.drawerLink} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
