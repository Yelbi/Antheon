import { prisma } from "@/lib/db";
import { origenToZona } from "@/data/flores";
import type { Flor, Categoria } from "@/data/flores";

type FlorRow = {
  id: number;
  slug: string;
  nombre: string;
  nombreCientifico: string;
  description: string;
  poster: string;
  categoria: string;
  origen: string;
  estacion: string;
  cuidados: string;
  genero: string;
  familia: string;
  simbolismo: string;
  usos: string;
  relacion1: string;
  relacion2: string;
  relacion3: string;
  peligrosa: boolean;
};

function rowToFlor(f: FlorRow): Flor {
  return {
    slug: f.slug,
    nombre: f.nombre,
    nombreCientifico: f.nombreCientifico || undefined,
    description: f.description,
    poster: f.poster,
    categoria: f.categoria as Categoria,
    zona: origenToZona(f.origen),
    origen: f.origen || undefined,
    estacion: f.estacion || undefined,
    cuidados: f.cuidados || undefined,
    genero: f.genero || undefined,
    familia: f.familia || undefined,
    simbolismo: f.simbolismo || undefined,
    usos: f.usos || undefined,
    relaciones: [f.relacion1, f.relacion2, f.relacion3] as [string, string, string],
    peligrosa: f.peligrosa || undefined,
  };
}

export async function getFloresDB(): Promise<Flor[]> {
  const rows = await prisma.flor.findMany({ orderBy: { nombre: "asc" } });
  return rows.map(rowToFlor);
}

export async function getFlorBySlugDB(slug: string): Promise<Flor | null> {
  const f = await prisma.flor.findUnique({ where: { slug } });
  return f ? rowToFlor(f) : null;
}

export async function getAllSlugsDB(): Promise<string[]> {
  const rows = await prisma.flor.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}
