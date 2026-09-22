import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/duel", "/universities", "/pricing", "/about", "/press"];
  return pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
