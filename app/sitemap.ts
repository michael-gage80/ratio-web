import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { legal } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/duel", "/universities", "/pricing", "/about", "/press", ...(legal.ready ? ["/privacy", "/terms"] : [])];
  return pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
