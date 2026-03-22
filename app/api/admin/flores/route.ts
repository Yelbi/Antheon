import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  try {
    const flores = await prisma.flor.findMany({ orderBy: { nombre: "asc" } });
    return NextResponse.json(flores);
  } catch {
    return NextResponse.json({ error: "Error al obtener las flores" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const data = await req.json();
  const { slug, nombre, nombreCientifico, description, poster, categoria, origen, estacion, cuidados, genero, familia, simbolismo, usos, peligrosa, slide1, slide2, slide3 } = data;

  if (!slug || !nombre || !description || !poster || !categoria) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  try {
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
        peligrosa: peligrosa ?? false,
        slide1: slide1 ?? "",
        slide2: slide2 ?? "",
        slide3: slide3 ?? "",
      },
    });
    return NextResponse.json(flor, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error al crear la flor" }, { status: 500 });
  }
}
