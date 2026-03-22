import { prisma } from "@/lib/db";
import { getAllFlorDelDiaDB } from "@/lib/flor-del-dia-db";
import FlorDelDiaAdminClient from "./FlorDelDiaAdminClient";
import s from "@/styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function FlorDelDiaAdminPage() {
  const [entries, flores] = await Promise.all([
    getAllFlorDelDiaDB(),
    prisma.flor.findMany({ orderBy: { nombre: "asc" }, select: { slug: true, nombre: true, poster: true } }),
  ]);

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <h1 className={s.pageTitle}>Flor del Día</h1>
          <span className={s.pageSubtitle}>
            {entries.length > 0
              ? `${entries.length} de 366 días configurados`
              : "Ningún día configurado todavía"}
          </span>
        </div>
      </div>
      <FlorDelDiaAdminClient entries={entries} flores={flores} />
    </div>
  );
}
