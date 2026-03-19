import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/detalle.module.css";
import type { Metadata } from "next";
import { getFlorBySlugDB, getAllSlugsDB, getFloresDB } from "@/lib/flores-db";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flor = await getFlorBySlugDB(slug);
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
  const [flor, todas] = await Promise.all([getFlorBySlugDB(slug), getFloresDB()]);
  if (!flor) notFound();

  const relacionadas = flor.relaciones
    .filter(Boolean)
    .map((s) => todas.find((f) => f.slug === s))
    .filter((f): f is NonNullable<typeof f> => f !== undefined);

  const idx = todas.findIndex((f) => f.slug === slug);
  const anterior = idx > 0 ? todas[idx - 1] : null;
  const siguiente = idx < todas.length - 1 ? todas[idx + 1] : null;

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
        {/* Ficha rápida */}
        {(flor.nombreCientifico || flor.genero || flor.familia || flor.origen || flor.estacion) && (
          <div className={styles.ficha}>
            {flor.nombreCientifico && (
              <div className={styles.fichaItem}>
                <span className={styles.fichaLabel}>Nombre científico</span>
                <span className={styles.fichaValor}>{flor.nombreCientifico}</span>
              </div>
            )}
            {flor.genero && (
              <div className={styles.fichaItem}>
                <span className={styles.fichaLabel}>Género</span>
                <span className={styles.fichaValor}>{flor.genero}</span>
              </div>
            )}
            {flor.familia && (
              <div className={styles.fichaItem}>
                <span className={styles.fichaLabel}>Familia</span>
                <span className={styles.fichaValor}>{flor.familia}</span>
              </div>
            )}
            {flor.origen && (
              <div className={styles.fichaItem}>
                <span className={styles.fichaLabel}>Origen</span>
                <span className={styles.fichaValor}>{flor.origen}</span>
              </div>
            )}
            {flor.estacion && (
              <div className={styles.fichaItem}>
                <span className={styles.fichaLabel}>Floración</span>
                <span className={styles.fichaValor}>{flor.estacion}</span>
              </div>
            )}
            <div className={styles.fichaItem}>
              <span className={styles.fichaLabel}>Categoría</span>
              <span className={styles.fichaValor}>{flor.categoria}</span>
            </div>
          </div>
        )}

        <h2 className={styles.descripcionTitulo}>¿Qué es?</h2>
        <p className={styles.descripcion}>{flor.description}</p>

        {flor.simbolismo && (
          <>
            <h2 className={styles.descripcionTitulo}>Simbolismo</h2>
            <p className={styles.descripcion}>{flor.simbolismo}</p>
          </>
        )}

        {flor.usos && (
          <>
            <h2 className={styles.descripcionTitulo}>Usos</h2>
            <p className={styles.descripcion}>{flor.usos}</p>
          </>
        )}

        {flor.cuidados && (
          <>
            <h2 className={styles.descripcionTitulo}>Cuidados</h2>
            <p className={styles.descripcion}>{flor.cuidados}</p>
          </>
        )}

        {/* ── Flores relacionadas ── */}
        {relacionadas.length > 0 && (
          <>
            <h2 className={styles.relacionadasTitulo}>Flores relacionadas</h2>
            <div className={styles.relacionadasGrid}>
              {relacionadas.map((rel) => (
                <Link key={rel.slug} href={`/flores/${rel.slug}`} className={styles.relacionadaCard}>
                  <div className={styles.relacionadaImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.poster} alt={rel.nombre} />
                  </div>
                  <span className={styles.relacionadaNombre}>{rel.nombre}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Footer de navegación ── */}
      <div className={styles.florFooter}>
        {/* Anterior / Siguiente */}
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

        {/* Volver a galería */}
        <Link href="/galeria" className={styles.volver}>
          ← Volver a la Galería
        </Link>
      </div>
    </div>
  );
}
