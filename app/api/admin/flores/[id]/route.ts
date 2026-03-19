import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const data = await req.json();
  const { slug, nombre, nombreCientifico, description, poster, categoria, origen, estacion, cuidados, genero, familia, simbolismo, usos, relacion1, relacion2, relacion3, peligrosa } = data;

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
      relacion1: relacion1 ?? "",
      relacion2: relacion2 ?? "",
      relacion3: relacion3 ?? "",
      peligrosa: peligrosa ?? false,
    },
  });
  return NextResponse.json(flor);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  await prisma.flor.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
