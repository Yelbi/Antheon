import Link from "next/link";
import { prisma } from "@/lib/db";
import s from "@/styles/admin.module.css";
import AdminFloresDashboardClient from "./AdminFloresDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminFloresPage() {
  const [flores, totalPeligrosas] = await Promise.all([
    prisma.flor.findMany({ orderBy: { nombre: "asc" } }),
    prisma.articulo.count(),
  ]);

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <h1 className={s.pageTitle}>Flores del Catálogo</h1>
          <span className={s.pageSubtitle}>{flores.length} flores en la base de datos</span>
        </div>
        <Link href="/admin/flores/nueva" className={`${s.btn} ${s.btnPrimary}`}>
          + Nueva flor
        </Link>
      </div>

      <div className={s.statsGrid}>
        <div className={`${s.statCard} ${s.statCardAccent}`}>
          <span className={s.statNum}>{flores.length}</span>
          <span className={s.statLabel}>Flores del catálogo</span>
        </div>
        <div className={`${s.statCard} ${s.statCardAccentRed}`}>
          <span className={s.statNum}>{totalPeligrosas}</span>
          <span className={s.statLabel}>Flores peligrosas</span>
        </div>
      </div>

      <AdminFloresDashboardClient flores={flores} />
    </div>
  );
}
