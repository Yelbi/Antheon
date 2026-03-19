import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import EditarArticuloClient from "./EditarArticuloClient";
import s from "@/styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function EditarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articulo = await prisma.articulo.findUnique({ where: { id: Number(id) } });
  if (!articulo) notFound();

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <Link href="/admin" className={s.pageBack}>← Volver</Link>
          <h1 className={s.pageTitle}>Editar entrada</h1>
          <span className={s.pageSubtitle}>{articulo.nombre}</span>
        </div>
      </div>
      <EditarArticuloClient articulo={articulo} />
    </div>
  );
}
