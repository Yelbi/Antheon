"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/galeria", label: "Galería" },
  { href: "/flor-del-dia", label: "Flor del Día" },
  { href: "/flores-peligrosas", label: "Flores Peligrosas" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

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
