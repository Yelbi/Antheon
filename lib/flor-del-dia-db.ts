import { prisma } from "@/lib/db";

export type FlorDelDiaConfig = {
  id: number;
  fecha: string;
  florSlug: string;
  descripcion: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

export async function getFlorDelDiaPorFechaDB(fecha: string): Promise<FlorDelDiaConfig | null> {
  return await prisma.florDelDia.findUnique({ where: { fecha } });
}

export async function getAllFlorDelDiaDB(): Promise<FlorDelDiaConfig[]> {
  return await prisma.florDelDia.findMany({
    where: { NOT: { fecha: "" } },
    orderBy: { fecha: "asc" },
  });
}
