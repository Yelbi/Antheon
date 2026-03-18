import Link from "next/link";
import styles from "@/styles/galeria.module.css";

interface FlowerCardProps {
  nombre: string;
  description: string;
  poster: string;
  link: string;
  relaciones: [string, string, string];
}

export default function FlowerCard({
  nombre,
  description,
  poster,
  link,
  relaciones,
}: FlowerCardProps) {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.poster}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt={nombre} />
      </div>
      <div className={styles.details}>
        <h2>{nombre}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.cast}>
          <h3>Relacionadas</h3>
          <ul className={styles.castList}>
            {relaciones.map((src, i) => (
              <li key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${nombre} relacionada ${i + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
