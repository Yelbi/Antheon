import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import FlowerCard from "@/components/FlowerCard";

export const metadata: Metadata = {
  title: "Flores Peligrosas",
  description:
    "Conoce las flores más peligrosas del mundo: toxicidad, efectos y precauciones.",
  openGraph: {
    title: "Flores Peligrosas — Antheon",
    description: "Las flores más peligrosas del mundo.",
  },
};

type Articulo = {
  id: number;
  nombre: string;
  description: string;
  poster: string;
  link: string;
  relaciones1: string;
  relaciones2: string;
  relaciones3: string;
};
import Link from "next/link";
import styles from "@/styles/peligrosas.module.css";

const PER_PAGE = 8;

interface PageProps {
  searchParams: Promise<{ pagina?: string }>;
}

export default async function FloresPeligrosasPage({ searchParams }: PageProps) {
  const { pagina } = await searchParams;
  const currentPage = Math.max(1, Number(pagina) || 1);
  const skip = (currentPage - 1) * PER_PAGE;

  const [articulos, total] = await Promise.all([
    prisma.articulo.findMany({ skip, take: PER_PAGE }),
    prisma.articulo.count(),
  ]);

  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <main className={styles.backmain}>
      <h1>Flores Peligrosas</h1>
      <div className={styles.wrapper}>
        {articulos.map((a: Articulo) => (
          <FlowerCard
            key={a.id}
            nombre={a.nombre}
            description={a.description}
            poster={a.poster}
            link={a.link}
            relaciones={[a.relaciones1, a.relaciones2, a.relaciones3]}
          />
        ))}
      </div>

      <nav className={styles.paginationContainer}>
        <ul className={styles.pagination}>
          <li className={`${styles.pageItem} ${currentPage <= 1 ? styles.disabled : ""}`}>
            <Link className={styles.pageLink} href={`/flores-peligrosas?pagina=${currentPage - 1}`}>
              Anterior
            </Link>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <li
              key={n}
              className={`${styles.pageItem} ${currentPage === n ? styles.active : ""}`}
            >
              <Link className={styles.pageLink} href={`/flores-peligrosas?pagina=${n}`}>
                {n}
              </Link>
            </li>
          ))}
          <li
            className={`${styles.pageItem} ${currentPage >= totalPages ? styles.disabled : ""}`}
          >
            <Link
              className={styles.pageLink}
              href={`/flores-peligrosas?pagina=${currentPage + 1}`}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
