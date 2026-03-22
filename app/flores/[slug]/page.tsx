import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { getFloresDB } from "@/lib/flores-db";
import FlorSlider from "./FlorSlider";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const flor = await prisma.flor.findUnique({ where: { slug } });
  if (!flor) return { title: "Flor no encontrada" };
  return {
    title: flor.nombre,
    description: flor.description.slice(0, 155) + "…",
    openGraph: {
      title: `${flor.nombre} — Antheon`,
      description: flor.description.slice(0, 155) + "…",
      images: [{ url: flor.poster, alt: flor.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${flor.nombre} — Antheon`,
      images: [flor.poster],
    },
  };
}

export default async function FlorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [flor, todas] = await Promise.all([
    prisma.flor.findUnique({ where: { slug } }),
    getFloresDB(),
  ]);
  if (!flor) notFound();

  const idx = todas.findIndex((f) => f.slug === slug);
  const anterior = idx > 0 ? { slug: todas[idx - 1].slug, nombre: todas[idx - 1].nombre } : null;
  const siguiente = idx < todas.length - 1 ? { slug: todas[idx + 1].slug, nombre: todas[idx + 1].nombre } : null;

  // Usar las imágenes de la BD; si están vacías, usar el poster como fallback
  const slideImages: [string, string, string] = [
    flor.slide1 || flor.poster,
    flor.slide2 || flor.poster,
    flor.slide3 || flor.poster,
  ];

  return (
    <FlorSlider
      flor={{
        nombre: flor.nombre,
        nombreCientifico: flor.nombreCientifico,
        categoria: flor.categoria,
        origen: flor.origen,
        estacion: flor.estacion,
        genero: flor.genero,
        familia: flor.familia,
        description: flor.description,
        simbolismo: flor.simbolismo,
        usos: flor.usos,
        cuidados: flor.cuidados,
        peligrosa: flor.peligrosa,
        slug: flor.slug,
      }}
      slideImages={slideImages}
      anterior={anterior}
      siguiente={siguiente}
    />
  );
}
