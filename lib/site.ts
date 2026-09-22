// Single place to change contact details, URLs and switches.
// PLACEHOLDER: replace hello@ratio.app with the real inbox before going live.

export const site = {
  name: "Ratio",
  tagline: "Think like a lawyer. Learn like a game.",
  description:
    "Ratio is a learning game for LLB students in England and Wales. Short, beautifully made lessons, a profile that shows what you know and how sure we are, and duels that make practice social. Coming soon to iPhone.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratio.app",
  email: "hello@ratio.app", // PLACEHOLDER
  analytics: process.env.NEXT_PUBLIC_ANALYTICS === "1",
  founder: {
    name: "Mike Gage",
    postnominals: "FRSA",
  },
};

export const nav = [
  { href: "/duel", label: "Duel" },
  { href: "/universities", label: "Universities" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
];

/** Full per-page metadata so Open Graph and Twitter cards carry the right title and image. */
export function pageMeta(title: string, description: string, path: string, image: string) {
  const full = `${title} · Ratio`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: "Ratio",
      locale: "en_GB",
      url: path,
      title: full,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: full }],
    },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [image] },
  };
}

export function mailto(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
