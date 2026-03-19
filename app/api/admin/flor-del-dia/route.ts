import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("admin_session")?.value === process.env.ADMIN_KEY;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  try {
    const config = await prisma.florDelDia.findUnique({ where: { id: 1 } });
    return NextResponse.json(config ?? { florSlug: "", img1: "", img2: "", img3: "", img4: "" });
  } catch {
    return NextResponse.json({ error: "Error al obtener la flor del día" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { florSlug, img1, img2, img3, img4 } = await req.json();

  try {
    const config = await prisma.florDelDia.upsert({
      where: { id: 1 },
      update: {
        florSlug: florSlug ?? "",
        img1: img1 ?? "",
        img2: img2 ?? "",
        img3: img3 ?? "",
        img4: img4 ?? "",
      },
      create: {
        id: 1,
        florSlug: florSlug ?? "",
        img1: img1 ?? "",
        img2: img2 ?? "",
        img3: img3 ?? "",
        img4: img4 ?? "",
      },
    });
    return NextResponse.json(config);
  } catch {
    return NextResponse.json({ error: "Error al guardar la flor del día" }, { status: 500 });
  }
}
