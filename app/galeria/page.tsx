import type { Metadata } from "next";
import { getFloresDB } from "@/lib/flores-db";
import GaleriaClient from "@/components/GaleriaClient";
import styles from "@/styles/galeria.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Galería",
  description: "Explora nuestra galería de flores: rosas, tulipanes, orquídeas y más.",
  openGraph: {
    title: "Galería de Flores — Antheon",
    description: "Explora nuestra galería de flores.",
    images: [{ url: "/img/Generales/Galeria/Rosas.jpg", alt: "Galería de flores" }],
  },
};

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const flores = await getFloresDB();

  return (
    <main className={styles.backmain}>
      <GaleriaClient flores={flores} initialQuery={q ?? ""} key={q ?? ""} />
    </main>
  );
}
