import type { Metadata } from "next";
import { flores } from "@/data/flores";
import GaleriaClient from "@/components/GaleriaClient";
import styles from "@/styles/galeria.module.css";

export const metadata: Metadata = {
  title: "Galería",
  description: `Explora nuestra galería con ${flores.length} flores: rosas, tulipanes, orquídeas y más.`,
  openGraph: {
    title: "Galería de Flores — Antheon",
    description: `Explora nuestra galería con ${flores.length} flores.`,
    images: [{ url: "/img/Generales/Galeria/Rosas.jpg", alt: "Galería de flores" }],
  },
};

export default function GaleriaPage() {
  return (
    <main className={styles.backmain}>
      <h1>Galeria</h1>
      <GaleriaClient flores={flores} />
    </main>
  );
}
