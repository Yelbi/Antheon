"use client";

import { useState, useMemo, useEffect } from "react";
import FlowerCard from "@/components/FlowerCard";
import { type Flor, type Categoria, CATEGORIAS, getRelacionadas } from "@/data/flores";
import styles from "@/styles/galeria.module.css";
import searchStyles from "@/styles/search.module.css";

const PAGE_SIZE = 12;

interface Props {
  flores: Flor[];
  initialQuery?: string;
}

export default function GaleriaClient({ flores, initialQuery = "" }: Props) {
  const [query] = useState(initialQuery);
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | "Todas">("Todas");
  const [soloPeligrosas, setSoloPeligrosas] = useState(false);
  const [visibles, setVisibles] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibles(PAGE_SIZE);
  }, [categoriaActiva, soloPeligrosas, query]);

  const floresFiltradas = useMemo(() => {
    return flores.filter((f) => {
      const coincideNombre = f.nombre.toLowerCase().includes(query.toLowerCase().trim());
      const coincideCategoria = categoriaActiva === "Todas" || f.categoria === categoriaActiva;
      const coincidePeligrosa = !soloPeligrosas || f.peligrosa === true;
      return coincideNombre && coincideCategoria && coincidePeligrosa;
    });
  }, [flores, query, categoriaActiva, soloPeligrosas]);

  const floresPagina = floresFiltradas.slice(0, visibles);
  const hayMas = visibles < floresFiltradas.length;

  return (
    <>
      {/* ── Banner de galería ── */}
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <div>
            <span className={styles.bannerEyebrow}>Enciclopedia Visual</span>
            <h1 className={styles.galleryTitle}>Galería</h1>
            <p className={styles.gallerySubtitle}>{flores.length} flores del mundo</p>
          </div>
          <span className={styles.bannerCount} aria-hidden="true">
            {flores.length}
          </span>
        </div>
      </div>

      {/* ── Barra de filtros sticky ── */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <div className={searchStyles.filtros}>
            <button
              className={`${searchStyles.filtroBtn} ${categoriaActiva === "Todas" ? searchStyles.activo : ""}`}
              onClick={() => setCategoriaActiva("Todas")}
            >
              Todas
            </button>
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                className={`${searchStyles.filtroBtn} ${categoriaActiva === cat ? searchStyles.activo : ""}`}
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat}
              </button>
            ))}
            <button
              className={`${searchStyles.filtroBtn} ${searchStyles.filtroBtnPeligrosa} ${soloPeligrosas ? searchStyles.activo : ""}`}
              onClick={() => setSoloPeligrosas((v) => !v)}
            >
              ⚠ Peligrosas
            </button>
          </div>
          <p className={searchStyles.contador}>
            {floresFiltradas.length === flores.length
              ? `${flores.length} flores`
              : `${floresFiltradas.length} de ${flores.length}`}
          </p>
        </div>
      </div>

      {/* ── Aviso de búsqueda activa ── */}
      {query && (
        <p className={styles.queryNotice}>
          Resultados para: <strong>&ldquo;{query}&rdquo;</strong>
        </p>
      )}

      {/* ── Grid de cards ── */}
      <div className={styles.wrapper}>
        {floresPagina.length > 0 ? (
          <>
            {floresPagina.map((flor, i) => (
              <FlowerCard
                key={flor.slug}
                nombre={flor.nombre}
                description={flor.description}
                poster={flor.poster}
                link={`/flores/${flor.slug}`}
                relaciones={getRelacionadas(flor.relaciones)}
                categoria={flor.categoria}
                peligrosa={flor.peligrosa}
                priority={i < 4}
              />
            ))}
          </>
        ) : (
          <div className={searchStyles.sinResultados}>
            <p>No se encontraron flores con &ldquo;{query}&rdquo;</p>
            <a href="/galeria" className={searchStyles.filtroBtn}>
              Ver todas
            </a>
          </div>
        )}
      </div>

      {/* ── Cargar más ── */}
      {hayMas && (
        <div className={styles.cargarMasWrapper}>
          <button
            className={styles.cargarMasBtn}
            onClick={() => setVisibles((v) => v + PAGE_SIZE)}
          >
            Cargar más ({floresFiltradas.length - visibles} restantes)
          </button>
        </div>
      )}
    </>
  );
}
