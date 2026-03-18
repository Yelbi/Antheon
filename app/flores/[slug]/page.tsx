import { flores, getFlor } from "@/data/flores";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/detalle.module.css";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return flores.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flor = getFlor(slug);
  if (!flor) return { title: "Flor no encontrada" };
  return {
    title: flor.nombre,
    description: flor.description.slice(0, 155) + "…",
    openGraph: {
      title: `${flor.nombre} — Antheon`,
      description: flor.description.slice(0, 155) + "…",
      images: [{ url: flor.poster, alt: flor.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${flor.nombre} — Antheon`,
      images: [flor.poster],
    },
  };
}

export default async function FlorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const flor = getFlor(slug);
  if (!flor) notFound();

  // Navegación anterior / siguiente
  const idx = flores.findIndex((f) => f.slug === slug);
  const anterior = idx > 0 ? flores[idx - 1] : null;
  const siguiente = idx < flores.length - 1 ? flores[idx + 1] : null;

  return (
    <div className={styles.page}>
      {/* ── Hero con imagen ── */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.heroImg} src={flor.poster} alt={flor.nombre} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.titulo}>{flor.nombre}</h1>
          <span className={styles.categoriaBadge}>{flor.categoria}</span>
        </div>
      </section>

      {/* ── Descripción ── */}
      <div className={styles.contenido}>
        <h2 className={styles.descripcionTitulo}>¿Qué es?</h2>
        <p className={styles.descripcion}>{flor.description}</p>

        {/* ── Imágenes relacionadas ── */}
        <h2 className={styles.relacionadasTitulo}>Relacionadas</h2>
        <div className={styles.relacionadasGrid}>
          {flor.relaciones.map((src, i) => (
            <div key={i} className={styles.relacionadaItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${flor.nombre} imagen ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Volver a galería ── */}
      <Link href="/galeria" className={styles.volver}>
        ← Volver a la Galería
      </Link>

      {/* ── Anterior / Siguiente ── */}
      <nav className={styles.navegacion}>
        {anterior ? (
          <Link href={`/flores/${anterior.slug}`} className={`${styles.navBtn} ${styles.navBtnPrev}`}>
            <span>
              <span className={styles.navBtnLabel}>← Anterior</span>
              <span className={styles.navBtnNombre}>{anterior.nombre}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}
        {siguiente ? (
          <Link href={`/flores/${siguiente.slug}`} className={`${styles.navBtn} ${styles.navBtnNext}`}>
            <span>
              <span className={styles.navBtnLabel}>Siguiente →</span>
              <span className={styles.navBtnNombre}>{siguiente.nombre}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
