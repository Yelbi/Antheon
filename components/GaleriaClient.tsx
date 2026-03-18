"use client";

import { useState, useMemo } from "react";
import FlowerCard from "@/components/FlowerCard";
import { type Flor, type Categoria, CATEGORIAS } from "@/data/flores";
import styles from "@/styles/galeria.module.css";
import searchStyles from "@/styles/search.module.css";

interface Props {
  flores: Flor[];
}

export default function GaleriaClient({ flores }: Props) {
  const [query, setQuery] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | "Todas">("Todas");

  const floresFiltradas = useMemo(() => {
    return flores.filter((f) => {
      const coincideNombre = f.nombre
        .toLowerCase()
        .includes(query.toLowerCase().trim());
      const coincideCategoria =
        categoriaActiva === "Todas" || f.categoria === categoriaActiva;
      return coincideNombre && coincideCategoria;
    });
  }, [flores, query, categoriaActiva]);

  return (
    <>
      {/* Controles de búsqueda y filtro */}
      <div className={searchStyles.controles}>
        <div className={searchStyles.searchWrapper}>
          <span className={searchStyles.searchIcon}>🔍</span>
          <input
            className={searchStyles.searchInput}
            type="text"
            placeholder="Buscar flor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className={searchStyles.clearBtn}
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

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
        </div>
      </div>

      {/* Contador de resultados */}
      <p className={searchStyles.contador}>
        {floresFiltradas.length === flores.length
          ? `${flores.length} flores`
          : `${floresFiltradas.length} de ${flores.length} flores`}
      </p>

      {/* Grid de cards */}
      <div className={styles.wrapper}>
        {floresFiltradas.length > 0 ? (
          floresFiltradas.map((flor) => (
            <FlowerCard
              key={flor.slug}
              nombre={flor.nombre}
              description={flor.description}
              poster={flor.poster}
              link={`/flores/${flor.slug}`}
              relaciones={flor.relaciones}
            />
          ))
        ) : (
          <div className={searchStyles.sinResultados}>
            <p>No se encontraron flores con &ldquo;{query}&rdquo;</p>
            <button
              className={searchStyles.filtroBtn}
              onClick={() => { setQuery(""); setCategoriaActiva("Todas"); }}
            >
              Ver todas
            </button>
          </div>
        )}
      </div>
    </>
  );
}
