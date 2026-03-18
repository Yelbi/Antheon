"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import s from "@/styles/admin.module.css";

type Articulo = {
  id: number;
  nombre: string;
  description: string;
  poster: string;
  link: string;
  relaciones1: string;
  relaciones2: string;
  relaciones3: string;
};

export default function AdminDashboardClient({ articulos }: { articulos: Articulo[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<number | null>(null);

  async function handleDelete(id: number, nombre: string) {
    if (!confirm(`¿Eliminar "${nombre}"? Esta acción no se puede deshacer.`)) return;

    setDeleting(id);
    await fetch(`/api/admin/articulos/${id}`, { method: "DELETE" });
    setDeleting(null);
    router.refresh();
  }

  if (articulos.length === 0) {
    return (
      <div className={s.emptyState}>
        No hay entradas aún.{" "}
        <Link href="/admin/nueva" style={{ color: "#23714d" }}>
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
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((a) => (
            <tr key={a.id}>
              <td>
                <Image
                  src={a.poster}
                  alt={a.nombre}
                  width={52}
                  height={52}
                  className={s.thumb}
                  unoptimized
                />
              </td>
              <td className={s.nombreCell}>{a.nombre}</td>
              <td className={s.descCell}>{a.description}</td>
              <td>
                <div className={s.actionsCell}>
                  <Link
                    href={`/admin/${a.id}/editar`}
                    className={`${s.btn} ${s.btnGhost}`}
                    style={{ fontSize: 13, padding: "7px 16px" }}
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(a.id, a.nombre)}
                    disabled={deleting === a.id}
                    className={`${s.btn} ${s.btnDanger}`}
                    style={{ fontSize: 13, padding: "7px 16px" }}
                  >
                    {deleting === a.id ? "…" : "Eliminar"}
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
