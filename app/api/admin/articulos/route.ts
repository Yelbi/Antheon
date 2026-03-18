import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const articulos = await prisma.articulo.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(articulos);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const data = await req.json();
  const { nombre, description, poster, link, relaciones1, relaciones2, relaciones3 } = data;

  if (!nombre || !description || !poster || !link) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  const articulo = await prisma.articulo.create({
    data: { nombre, description, poster, link, relaciones1: relaciones1 ?? "", relaciones2: relaciones2 ?? "", relaciones3: relaciones3 ?? "" },
  });
  return NextResponse.json(articulo, { status: 201 });
}
