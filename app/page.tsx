import Link from "next/link";
import styles from "@/styles/home.module.css";

const seasons = [
  {
    label: "Primavera",
    description: "Flores de la primavera",
    href: "/estaciones/primavera",
    className: styles.primavera,
  },
  {
    label: "Verano",
    description: "Flores del verano",
    href: "/estaciones/verano",
    className: styles.verano,
  },
  {
    label: "Otoño",
    description: "Flores del otoño",
    href: "/estaciones/otono",
    className: styles.otono,
  },
  {
    label: "Invierno",
    description: "Flores del invierno",
    href: "/estaciones/invierno",
    className: styles.invierno,
  },
];

export default function HomePage() {
  return (
    <main>
      <div className={styles.flexContainer}>
        {seasons.map(({ label, description, href, className }) => (
          <Link
            key={label}
            href={href}
            className={`${styles.flexSlide} ${className}`}
          >
            <div className={styles.flexContent}>
              <span className={styles.flexTitle}>{label}</span>
              <span className={styles.flexDescription}>{description}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
