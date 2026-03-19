"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import FlowerCard from "@/components/FlowerCard";
import { type Flor, type Categoria, type Zona, CATEGORIAS, ZONAS } from "@/data/flores";
import styles from "@/styles/galeria.module.css";
import searchStyles from "@/styles/search.module.css";

const PAGE_SIZE = 24;

interface Props {
  flores: Flor[];
  initialQuery?: string;
}

export default function GaleriaClient({ flores, initialQuery = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const prevInitialQuery = useRef(initialQuery);
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | "Todas">("Todas");
  const [zonaActiva, setZonaActiva] = useState<Zona | "Todas">("Todas");
  const [soloPeligrosas, setSoloPeligrosas] = useState(false);
  const [visibles, setVisibles] = useState(PAGE_SIZE);

  useEffect(() => {
    if (prevInitialQuery.current !== initialQuery) {
      prevInitialQuery.current = initialQuery;
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    setVisibles(PAGE_SIZE);
  }, [categoriaActiva, zonaActiva, soloPeligrosas, query]);

  const floresFiltradas = useMemo(() => {
    return flores.filter((f) => {
      const coincideNombre = f.nombre.toLowerCase().includes(query.toLowerCase().trim());
      const coincideCategoria = categoriaActiva === "Todas" || f.categoria === categoriaActiva;
      const coincideZona = zonaActiva === "Todas" || f.zona === zonaActiva;
      const coincidePeligrosa = !soloPeligrosas || f.peligrosa === true;
      return coincideNombre && coincideCategoria && coincideZona && coincidePeligrosa;
    });
  }, [flores, query, categoriaActiva, zonaActiva, soloPeligrosas]);

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

          {/* Fila 1: Categoría + contador */}
          <div className={styles.filterRowSpread}>
            <div className={styles.filterRowGroup}>
              <span className={styles.filterLabel}>Categoría</span>
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
            </div>
            <p className={searchStyles.contador}>
              {floresFiltradas.length === flores.length
                ? `${flores.length} flores`
                : `${floresFiltradas.length} de ${flores.length}`}
            </p>
          </div>

          {/* Fila 2: Región geográfica */}
          <div className={styles.filterRowGroup}>
            <span className={styles.filterLabel}>Región</span>
            <div className={searchStyles.filtros}>
              <button
                className={`${searchStyles.filtroBtn} ${searchStyles.filtroBtnZona} ${zonaActiva === "Todas" ? searchStyles.activoZona : ""}`}
                onClick={() => setZonaActiva("Todas")}
              >
                Todas
              </button>
              {ZONAS.map((zona) => (
                <button
                  key={zona}
                  className={`${searchStyles.filtroBtn} ${searchStyles.filtroBtnZona} ${zonaActiva === zona ? searchStyles.activoZona : ""}`}
                  onClick={() => setZonaActiva(zona)}
                >
                  {zona}
                </button>
              ))}
            </div>
          </div>

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
                poster={flor.poster}
                link={`/flores/${flor.slug}`}
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
