import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const data = await req.json();
  const { nombre, description, poster, link, relaciones1, relaciones2, relaciones3 } = data;

  const articulo = await prisma.articulo.update({
    where: { id: Number(id) },
    data: { nombre, description, poster, link, relaciones1: relaciones1 ?? "", relaciones2: relaciones2 ?? "", relaciones3: relaciones3 ?? "" },
  });
  return NextResponse.json(articulo);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  await prisma.articulo.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
