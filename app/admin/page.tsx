import Link from "next/link";
import { prisma } from "@/lib/db";
import s from "@/styles/admin.module.css";
import AdminDashboardClient from "./AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [articulos, totalFlores] = await Promise.all([
    prisma.articulo.findMany({ orderBy: { id: "asc" } }),
    prisma.flor.count(),
  ]);

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <h1 className={s.pageTitle}>Flores Peligrosas</h1>
          <span className={s.pageSubtitle}>{articulos.length} entradas en la base de datos</span>
        </div>
        <Link href="/admin/nueva" className={`${s.btn} ${s.btnPrimary}`}>
          + Nueva entrada
        </Link>
      </div>

      <div className={s.statsGrid}>
        <div className={`${s.statCard} ${s.statCardAccentRed}`}>
          <span className={s.statNum}>{articulos.length}</span>
          <span className={s.statLabel}>Flores peligrosas</span>
        </div>
        <div className={`${s.statCard} ${s.statCardAccent}`}>
          <span className={s.statNum}>{totalFlores}</span>
          <span className={s.statLabel}>Flores del catálogo</span>
        </div>
      </div>

      <AdminDashboardClient articulos={articulos} />
    </div>
  );
}
