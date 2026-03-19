import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "@/styles/estaciones.module.css";

type Estacion = "primavera" | "verano" | "otono" | "invierno";

const seasonData: Record<Estacion, { label: string; className: string }> = {
  primavera: { label: "Primavera", className: styles.primavera },
  verano:    { label: "Verano",    className: styles.verano },
  otono:     { label: "Otoño",     className: styles.otono },
  invierno:  { label: "Invierno",  className: styles.invierno },
};

export async function generateStaticParams() {
  return Object.keys(seasonData).map((estacion) => ({ estacion }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ estacion: string }>;
}): Promise<Metadata> {
  const { estacion } = await params;
  const data = seasonData[estacion as Estacion];
  if (!data) return {};
  return { title: `Flores de ${data.label}` };
}

export default async function EstacionPage({
  params,
}: {
  params: Promise<{ estacion: string }>;
}) {
  const { estacion } = await params;
  const data = seasonData[estacion as Estacion];

  if (!data) notFound();

  return (
    <main className={`${styles.hero} ${data.className}`}>
      <div className={styles.content}>
        <span className={styles.badge}>Próximamente</span>
        <h1 className={styles.title}>{data.label}</h1>
        <p className={styles.subtitle}>
          Estamos reuniendo las flores de esta estación. Vuelve pronto.
        </p>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
