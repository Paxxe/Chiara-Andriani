import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/servizi", priority: 0.9 },
    { path: "/chi-sono", priority: 0.8 },
    { path: "/consulenza-online", priority: 0.8 },
    { path: "/contatti", priority: 0.7 },
  ];
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
