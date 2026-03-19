"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile";
import styles from "@/styles/navbar.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/galeria", label: "Galería" },
  { href: "/flor-del-dia", label: "Flor del Día" },
  { href: "/tu-flor", label: "Tu Flor" },
];

export default function Navbar() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/galeria?q=${encodeURIComponent(query)}` : "/galeria");
    setQ("");
  };

  return (
    <header className={styles.header}>
      {/* Desktop */}
      <nav className={styles.menu}>

        {/* Izquierda: logo */}
        <Link href="/" className={styles.brand}>
          <Image src="/img/Logo.png" alt="Antheon" width={72} height={72} priority />
        </Link>

        {/* Centro: links */}
        <div className={styles.navLinks}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </div>

        {/* Derecha: buscador */}
        <form onSubmit={handleSearch} className={styles.navSearchForm}>
          <div className={styles.navSearchWrapper}>
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar flor..."
              className={styles.navSearchInput}
              aria-label="Buscar flor"
            />
            <button type="submit" className={styles.navSearchBtn} aria-label="Buscar">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </form>
      </nav>

      {/* Mobile */}
      <div className={styles.mobileHeader}>
        <Link href="/">
          <Image src="/img/Logo.png" alt="Antheon" width={52} height={52} priority />
        </Link>
        <NavbarMobile />
      </div>
    </header>
  );
}
