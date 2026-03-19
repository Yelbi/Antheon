import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/galeria.module.css";

interface FlowerCardProps {
  nombre: string;
  poster: string;
  link: string;
  categoria: string;
  peligrosa?: boolean;
  priority?: boolean;
}

export default function FlowerCard({
  nombre,
  poster,
  link,
  categoria,
  peligrosa = false,
  priority = false,
}: FlowerCardProps) {
  return (
    <article className={styles.card}>
      <Link href={link} className={styles.cardLink} aria-label={`Ver ${nombre}`} />

      {/* Badge de categoría */}
      <span className={styles.badge}>{categoria}</span>

      {/* Triángulo de advertencia */}
      {peligrosa && (
        <span className={styles.dangerBadge} title="Flor tóxica / peligrosa" aria-label="Tóxica">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="#b41e1e" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="17" r="1" fill="#b41e1e"/>
          </svg>
        </span>
      )}

      {/* Imagen de portada */}
      <div className={styles.poster}>
        <Image
          src={poster}
          alt={nombre}
          fill
          sizes="(max-width: 400px) 88vw, (max-width: 540px) calc(50vw - 20px), (max-width: 768px) calc(33vw - 22px), 236px"
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
          priority={priority}
          quality={90}
        />
      </div>

      {/* Nombre en la base */}
      <div className={styles.cardBottom}>
        <span className={styles.cardName}>{nombre}</span>
      </div>
    </article>
  );
}
