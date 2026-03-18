import Link from "next/link";
import { prisma } from "@/lib/db";
import s from "@/styles/admin.module.css";
import AdminDashboardClient from "./AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const articulos = await prisma.articulo.findMany({ orderBy: { id: "asc" } });

  return (
    <div className={s.adminLayout}>
      <header className={s.topbar}>
        <Link href="/" className={s.topbarTitle}>
          Antheon
        </Link>
        <div className={s.topbarActions}>
          <Link href="/admin/nueva" className={`${s.btn} ${s.btnPrimary}`}>
            + Nueva entrada
          </Link>
          <LogoutButton />
        </div>
      </header>

      <main className={s.page}>
        <div className={s.pageHeader}>
          <h1 className={s.pageTitle}>Flores Peligrosas</h1>
          <span style={{ color: "#f1ccba88", fontSize: 14 }}>{articulos.length} entradas</span>
        </div>

        <AdminDashboardClient articulos={articulos} />
      </main>
    </div>
  );
}

function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        const { cookies } = await import("next/headers");
        (await cookies()).delete("admin_session");
      }}
    >
      <button type="submit" className={s.logoutBtn}>
        Cerrar sesión
      </button>
    </form>
  );
}
