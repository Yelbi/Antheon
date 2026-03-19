import type { Metadata } from "next";
import { getFloresDB } from "@/lib/flores-db";
import { getFlorDelDiaDB } from "@/lib/flor-del-dia-db";
import FlorDelDiaClient from "@/components/FlorDelDiaClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Flor del Día",
  description: "Descubre la flor destacada del día en Antheon.",
  openGraph: {
    title: "Flor del Día — Antheon",
    description: "Una flor diferente cada día.",
  },
};

export default async function FlorDelDiaPage() {
  const [flores, config] = await Promise.all([getFloresDB(), getFlorDelDiaDB()]);

  if (flores.length === 0) {
    return (
      <main style={{ background: "#0d0d0d", height: "calc(100vh - 100px)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(241,204,186,0.45)", fontFamily: "Nunito, sans-serif", fontSize: 16 }}>
        No hay flores en el catálogo aún.
      </main>
    );
  }

  // Flor: configurada en admin o fallback por día del mes
  const flor =
    flores.find((f) => f.slug === config?.florSlug) ??
    flores[new Date().getDate() % flores.length];

  // Imágenes del slideshow: poster primero + extras configuradas
  const extras = [config?.img1, config?.img2, config?.img3, config?.img4].filter(
    (img): img is string => Boolean(img)
  );
  const imagenes = [flor.poster, ...extras];

  const fecha = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const fechaCapitalizada = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <main style={{ background: "#0d0d0d" }}>
      <FlorDelDiaClient
        imagenes={imagenes}
        flor={{
          slug: flor.slug,
          nombre: flor.nombre,
          categoria: flor.categoria,
          description: flor.description,
          nombreCientifico: flor.nombreCientifico,
        }}
        fecha={fechaCapitalizada}
      />
    </main>
  );
}
