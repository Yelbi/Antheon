import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import EditarArticuloClient from "./EditarArticuloClient";
import s from "@/styles/admin.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EditarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articulo = await prisma.articulo.findUnique({ where: { id: Number(id) } });

  if (!articulo) notFound();

  return (
    <div className={s.adminLayout}>
      <header className={s.topbar}>
        <Link href="/admin" className={s.topbarTitle}>
          Antheon Admin
        </Link>
        <Link href="/admin" className={s.topbarLink}>
          ← Volver
        </Link>
      </header>

      <main className={s.page}>
        <div className={s.pageHeader}>
          <h1 className={s.pageTitle}>Editar entrada</h1>
        </div>

        <EditarArticuloClient articulo={articulo} />
      </main>
    </div>
  );
}
