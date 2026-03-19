import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import EditarFlorClient from "./EditarFlorClient";
import s from "@/styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function EditarFlorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const flor = await prisma.flor.findUnique({ where: { id: Number(id) } });
  if (!flor) notFound();

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <Link href="/admin/flores" className={s.pageBack}>← Volver</Link>
          <h1 className={s.pageTitle}>Editar flor</h1>
          <span className={s.pageSubtitle}>{flor.nombre}</span>
        </div>
      </div>
      <EditarFlorClient flor={flor} />
    </div>
  );
}
