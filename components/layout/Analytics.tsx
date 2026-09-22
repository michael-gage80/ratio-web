"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";

/** Cookie-free. Only mounts when NEXT_PUBLIC_ANALYTICS=1. */
export default function Analytics() {
  if (!site.analytics) return null;
  return <VercelAnalytics />;
}
