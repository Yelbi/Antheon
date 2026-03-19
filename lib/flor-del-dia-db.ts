import { prisma } from "@/lib/db";

export type FlorDelDiaConfig = {
  id: number;
  florSlug: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

export async function getFlorDelDiaDB(): Promise<FlorDelDiaConfig | null> {
  return await prisma.florDelDia.findUnique({ where: { id: 1 } });
}
