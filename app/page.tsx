import styles from "@/styles/home.module.css";

export default function HomePage() {
  const seasons = [
    { label: "Primavera", className: styles.home },
    { label: "Verano", className: styles.about },
    { label: "Otoño", className: styles.work },
    { label: "Invierno", className: styles.contact },
  ];

  return (
    <main>
      <div className={styles.flexContainer}>
        {seasons.map(({ label, className }) => (
          <div key={label} className={`${styles.flexSlide} ${className}`}>
            <div className={styles.flexTitle}>{label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
