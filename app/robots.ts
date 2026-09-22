import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// /privacy and /terms stay crawlable so search engines can read their noindex tag.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${site.url}/sitemap.xml` };
}
