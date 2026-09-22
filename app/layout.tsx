import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "lenis/dist/lenis.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/chrome.css";
import "@/styles/sections.css";
import "@/styles/screens.css";
import "@/styles/demos.css";
import "@/styles/pages.css";

import { site } from "@/lib/site";
import { themeScript } from "@/components/layout/Theme";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import { TransitionProvider } from "@/components/motion/Transition";
import Analytics from "@/components/layout/Analytics";
import { MotionRoot } from "@/components/motion/MotionRoot";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ratio: think like a lawyer, learn like a game",
    template: "%s · Ratio",
  },
  description: site.description,
  applicationName: "Ratio",
  keywords: ["LLB", "law revision", "law students", "UK law", "legal education", "spaced repetition", "iPhone app"],
  openGraph: {
    type: "website",
    siteName: "Ratio",
    locale: "en_GB",
    url: "/",
    title: "Ratio: think like a lawyer, learn like a game",
    description: site.description,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Ratio. Think like a lawyer. Learn like a game." }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.png"] },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F0E9" },
    { media: "(prefers-color-scheme: dark)", color: "#171513" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static theme script, must run before paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <MotionRoot>
          <TransitionProvider>
            <SmoothScroll />
            <Nav />
            <main id="main">{children}</main>
            <Footer />
            <Cursor />
          </TransitionProvider>
        </MotionRoot>
        <div className="grain" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
