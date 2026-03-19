import { prisma } from "@/lib/db";
import { getFlorDelDiaDB } from "@/lib/flor-del-dia-db";
import FlorDelDiaAdminClient from "./FlorDelDiaAdminClient";
import s from "@/styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function FlorDelDiaAdminPage() {
  const [config, flores] = await Promise.all([
    getFlorDelDiaDB(),
    prisma.flor.findMany({ orderBy: { nombre: "asc" }, select: { slug: true, nombre: true, poster: true } }),
  ]);

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <div className={s.pageTitleGroup}>
          <h1 className={s.pageTitle}>Flor del Día</h1>
          <span className={s.pageSubtitle}>
            {config?.florSlug
              ? `Flor activa: ${flores.find((f) => f.slug === config.florSlug)?.nombre ?? config.florSlug}`
              : "Modo automático (basado en la fecha)"}
          </span>
        </div>
      </div>
      <FlorDelDiaAdminClient current={config} flores={flores} />
    </div>
  );
}
