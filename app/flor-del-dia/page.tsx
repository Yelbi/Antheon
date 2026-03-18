import type { Metadata } from "next";
import { flores } from "@/data/flores";
import styles from "@/styles/galeria.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Flor del Día",
  description: "Descubre la flor del día en Antheon. Cada día una flor diferente.",
  openGraph: {
    title: "Flor del Día — Antheon",
    description: "Una flor diferente cada día.",
  },
};

export default function FlorDelDiaPage() {
  const dayOfMonth = new Date().getDate();
  const flor = flores[dayOfMonth % flores.length];

  return (
    <main className={styles.backmain}>
      <h1>Flor del Día</h1>
      <div className={styles.wrapper} style={{ paddingTop: 20 }}>
        <div className={styles.card} style={{ cursor: "default" }}>
          <div className={styles.poster}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={flor.poster} alt={flor.nombre} />
          </div>
          <div className={styles.details} style={{ bottom: 0 }}>
            <h2>{flor.nombre}</h2>
            <p className={styles.desc}>{flor.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
