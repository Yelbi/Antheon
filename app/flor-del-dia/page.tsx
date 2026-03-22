import type { Metadata } from "next";
import { getFloresDB } from "@/lib/flores-db";
import { getFlorDelDiaPorFechaDB } from "@/lib/flor-del-dia-db";
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
  const hoy = new Date();
  // Format as MM-DD so the same config applies every year
  const fechaStr = `${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  const [flores, config] = await Promise.all([getFloresDB(), getFlorDelDiaPorFechaDB(fechaStr)]);

  if (flores.length === 0) {
    return (
      <main style={{ background: "#0d0d0d", height: "calc(100vh - 100px)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(241,204,186,0.45)", fontFamily: "Nunito, sans-serif", fontSize: 16 }}>
        No hay flores en el catálogo aún.
      </main>
    );
  }

  // Flower: configured for today or fallback by day of month
  const flor =
    flores.find((f) => f.slug === config?.florSlug) ??
    flores[hoy.getDate() % flores.length];

  // Slideshow images: poster first + extra images from config
  const extras = [config?.img1, config?.img2, config?.img3, config?.img4].filter(
    (img): img is string => Boolean(img)
  );
  const imagenes = [flor.poster, ...extras];

  // Use custom description if set, otherwise flower's default
  const description =
    config?.descripcion?.trim() ? config.descripcion : flor.description;

  const fecha = hoy.toLocaleDateString("es-ES", {
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
          description,
          nombreCientifico: flor.nombreCientifico,
        }}
        fecha={fechaCapitalizada}
      />
    </main>
  );
}
