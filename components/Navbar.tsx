"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div className={styles.alpha}>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
          </ul>
        </div>

        <div className={styles.logo}>
          <Link href="/">
            <Image src="/img/Logo.png" alt="Antheon Logo" width={100} height={100} />
          </Link>
        </div>

        <div className={styles.omega}>
          <ul>
            <li><Link href="/flor-del-dia">Flor del Dia</Link></li>
            <li><Link href="/flores-peligrosas">Flores Peligrosas</Link></li>
          </ul>
        </div>
      </nav>

      {/* Solo visible en móvil */}
      <div className={styles.mobileHeader}>
        <Link href="/">
          <Image src="/img/Logo.png" alt="Antheon Logo" width={60} height={60} />
        </Link>
        <NavbarMobile />
      </div>
    </header>
  );
}
