import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  try {
    const entries = await prisma.florDelDia.findMany({
      where: { NOT: { fecha: "" } },
      orderBy: { fecha: "asc" },
    });
    return NextResponse.json(entries);
  } catch {
    return NextResponse.json({ error: "Error al obtener" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { fecha, florSlug, descripcion, img1, img2, img3, img4 } = await req.json();
  if (!fecha) return NextResponse.json({ error: "Fecha requerida" }, { status: 400 });
  try {
    const entry = await prisma.florDelDia.upsert({
      where: { fecha },
      update: {
        florSlug: florSlug ?? "",
        descripcion: descripcion ?? "",
        img1: img1 ?? "",
        img2: img2 ?? "",
        img3: img3 ?? "",
        img4: img4 ?? "",
      },
      create: {
        fecha,
        florSlug: florSlug ?? "",
        descripcion: descripcion ?? "",
        img1: img1 ?? "",
        img2: img2 ?? "",
        img3: img3 ?? "",
        img4: img4 ?? "",
      },
    });
    return NextResponse.json(entry);
  } catch {
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  const { fecha } = await req.json();
  if (!fecha) return NextResponse.json({ error: "Fecha requerida" }, { status: 400 });
  try {
    await prisma.florDelDia.delete({ where: { fecha } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}
