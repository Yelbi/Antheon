import { MetadataRoute } from "next";
import { flores } from "@/data/flores";

const BASE_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/galeria`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/flor-del-dia`, priority: 0.8, changeFrequency: "daily" },
    { url: `${BASE_URL}/flores-peligrosas`, priority: 0.8, changeFrequency: "weekly" },
  ];

  const florRoutes: MetadataRoute.Sitemap = flores.map((f) => ({
    url: `${BASE_URL}/flores/${f.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...florRoutes];
}
