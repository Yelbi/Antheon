import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const flores = await prisma.flor.findMany({ orderBy: { nombre: "asc" } });
  return NextResponse.json(flores);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const data = await req.json();
  const { slug, nombre, nombreCientifico, description, poster, categoria, origen, estacion, cuidados, genero, familia, simbolismo, usos, relacion1, relacion2, relacion3, peligrosa } = data;

  if (!slug || !nombre || !description || !poster || !categoria) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  const flor = await prisma.flor.create({
    data: {
      slug, nombre, description, poster, categoria,
      nombreCientifico: nombreCientifico ?? "",
      origen: origen ?? "",
      estacion: estacion ?? "",
      cuidados: cuidados ?? "",
      genero: genero ?? "",
      familia: familia ?? "",
      simbolismo: simbolismo ?? "",
      usos: usos ?? "",
      relacion1: relacion1 ?? "",
      relacion2: relacion2 ?? "",
      relacion3: relacion3 ?? "",
      peligrosa: peligrosa ?? false,
    },
  });
  return NextResponse.json(flor, { status: 201 });
}
