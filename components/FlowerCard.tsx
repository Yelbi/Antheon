import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/galeria.module.css";

interface RelatedFlor {
  slug?: string;
  nombre: string;
  poster: string;
}

interface FlowerCardProps {
  nombre: string;
  description: string;
  poster: string;
  link: string;
  relaciones: RelatedFlor[];
  categoria: string;
  peligrosa?: boolean;
  priority?: boolean;
}

export default function FlowerCard({
  nombre,
  description,
  poster,
  link,
  relaciones,
  categoria,
  peligrosa = false,
  priority = false,
}: FlowerCardProps) {
  return (
    <article className={styles.card}>
      {/* Overlay clicable invisible (z-index 2) */}
      <Link
        href={link}
        className={styles.cardLink}
        aria-label={`Ver ${nombre}`}
      />

      {/* Badge de categoría (z-index 3) */}
      <span className={styles.badge}>{categoria}</span>

      {/* Símbolo de peligro (z-index 3) */}
      {peligrosa && (
        <span className={styles.dangerBadge} title="Flor peligrosa / tóxica">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="17" r="1" fill="white"/>
          </svg>
        </span>
      )}

      {/* Imagen de portada */}
      <div className={styles.poster}>
        <Image
          src={poster}
          alt={nombre}
          fill
          sizes="(max-width: 480px) 90vw, (max-width: 768px) 50vw, 300px"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>

      {/* Nombre siempre visible en la base (z-index 3) */}
      <div className={styles.cardBottom}>
        <span className={styles.cardName}>{nombre}</span>
      </div>

      {/* Panel de detalles en hover (z-index 1) */}
      <div className={styles.details}>
        <h2>{nombre}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.cast}>
          <h3>Relacionadas</h3>
          <ul className={styles.castList}>
            {relaciones.map((flor, i) => (
              <li key={flor.slug ?? i}>
                {flor.slug ? (
                  <Link
                    href={`/flores/${flor.slug}`}
                    className={styles.relatedLink}
                    title={flor.nombre}
                  >
                    <Image
                      src={flor.poster}
                      alt={flor.nombre}
                      width={42}
                      height={42}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                ) : (
                  <div className={styles.relatedLink} title={flor.nombre}>
                    <Image
                      src={flor.poster}
                      alt={flor.nombre}
                      width={42}
                      height={42}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
