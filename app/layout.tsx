import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Antheon — Enciclopedia de Flores",
    template: "%s — Antheon",
  },
  description:
    "Antheon es una enciclopedia visual de flores: descubre su origen, características y curiosidades.",
  icons: { icon: "/img/Logo mini.png" },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Antheon",
    title: "Antheon — Enciclopedia de Flores",
    description:
      "Descubre el mundo de las flores: galería, flor del día y flores peligrosas.",
    images: [{ url: "/img/Logo.png", width: 200, height: 200, alt: "Antheon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antheon — Enciclopedia de Flores",
    description: "Descubre el mundo de las flores.",
    images: ["/img/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
