"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/flor-del-dia.module.css";

interface FlorInfo {
  slug: string;
  nombre: string;
  categoria: string;
  description: string;
  nombreCientifico?: string;
}

interface Props {
  imagenes: string[];
  flor: FlorInfo;
  fecha: string;
}

export default function FlorDelDiaClient({ imagenes, flor, fecha }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (imagenes.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagenes.length]);

  return (
    <div className={styles.layout}>
      {/* ── Panel izquierdo: slideshow ── */}
      <div className={styles.slideshow}>
        {imagenes.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`${flor.nombre} — imagen ${i + 1}`}
            className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
          />
        ))}
        <div className={styles.slideOverlay} />
        {imagenes.length > 1 && (
          <div className={styles.slideDots}>
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Panel derecho: información ── */}
      <div className={styles.info}>
        <div className={styles.infoInner}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            Flor del Día
          </span>

          <p className={styles.fecha}>{fecha}</p>
          <div className={styles.divider} />

          <h1 className={styles.nombre}>{flor.nombre}</h1>

          {flor.nombreCientifico && (
            <p className={styles.nombreCientifico}>{flor.nombreCientifico}</p>
          )}

          <span className={styles.categoria}>{flor.categoria}</span>

          <p className={styles.descripcion}>{flor.description}</p>

          <Link href={`/flores/${flor.slug}`} className={styles.ctaBtn}>
            Ver detalle completo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
