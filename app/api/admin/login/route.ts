import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { key } = await req.json();

  if (!key || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: "Clave incorrecta" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", key, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("admin_session");
  return res;
}
