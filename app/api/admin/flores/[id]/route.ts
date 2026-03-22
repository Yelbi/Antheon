import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const data = await req.json();
  const { slug, nombre, nombreCientifico, description, poster, categoria, origen, estacion, cuidados, genero, familia, simbolismo, usos, peligrosa, slide1, slide2, slide3 } = data;

  if (!slug || !nombre || !description || !poster || !categoria) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  try {
    const flor = await prisma.flor.update({
      where: { id: Number(id) },
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
    return NextResponse.json(flor);
  } catch {
    return NextResponse.json({ error: "Error al actualizar la flor" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  try {
    await prisma.flor.delete({ where: { id: Number(id) } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error al eliminar la flor" }, { status: 500 });
  }
}
