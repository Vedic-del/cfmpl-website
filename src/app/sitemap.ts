import type { MetadataRoute } from "next";
import { firm } from "@/content/firm";
import { practices } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    ...practices.map((p) => ({ path: `/services/${p.slug}`, priority: 0.8 })),
    { path: "/how-we-work", priority: 0.8 },
    { path: "/leadership", priority: 0.7 },
    { path: "/careers", priority: 0.6 },
    { path: "/regulatory", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/disclaimer", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
  ];

  const lastModified = new Date();
  return routes.map((r) => ({
    url: new URL(r.path.endsWith("/") ? r.path : `${r.path}/`, firm.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
