"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import s from "@/styles/admin.module.css";

type FlorRow = {
  id: number;
  slug: string;
  nombre: string;
  nombreCientifico: string;
  description: string;
  poster: string;
  categoria: string;
  origen: string;
  estacion: string;
};

export default function AdminFloresDashboardClient({ flores }: { flores: FlorRow[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<number | null>(null);

  async function handleDelete(id: number, nombre: string) {
    if (!confirm(`¿Eliminar "${nombre}"? Esta acción no se puede deshacer.`)) return;
    setDeleting(id);
    await fetch(`/api/admin/flores/${id}`, { method: "DELETE" });
    setDeleting(null);
    router.refresh();
  }

  if (flores.length === 0) {
    return (
      <div className={s.emptyState}>
        No hay flores aún.{" "}
        <Link href="/admin/flores/nueva" style={{ color: "#23714d" }}>
          Crea la primera.
        </Link>
      </div>
    );
  }

  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Origen</th>
            <th>Estación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {flores.map((f) => (
            <tr key={f.id}>
              <td>
                <Image src={f.poster} alt={f.nombre} width={48} height={48} className={s.thumb} unoptimized />
              </td>
              <td>
                <div className={s.nombreCell}>{f.nombre}</div>
                {f.nombreCientifico && (
                  <div className={s.cientificoCell}>{f.nombreCientifico}</div>
                )}
              </td>
              <td>
                <span className={s.badge}>{f.categoria}</span>
              </td>
              <td className={s.descCell}>{f.origen || "—"}</td>
              <td className={s.descCell}>{f.estacion || "—"}</td>
              <td>
                <div className={s.actionsCell}>
                  <Link
                    href={`/admin/flores/${f.id}/editar`}
                    className={`${s.btn} ${s.btnGhost}`}
                    style={{ fontSize: 12, padding: "6px 14px" }}
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(f.id, f.nombre)}
                    disabled={deleting === f.id}
                    className={`${s.btn} ${s.btnDanger}`}
                    style={{ fontSize: 12, padding: "6px 14px" }}
                  >
                    {deleting === f.id ? "…" : "Eliminar"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
