"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { TLink } from "@/components/motion/Transition";
import { Mark } from "@/components/Mark";
import { ThemeToggle } from "./Theme";
import { nav } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const [onDark, setOnDark] = useState(false);

  // Is the nav sitting over a dark "moment"? Sample the page just beneath it.
  const probe = () => {
    const els = document.elementsFromPoint(window.innerWidth / 2, 42);
    const hit = els.find((el) => !el.closest(".nav") && !el.closest(".cursor-ring") && !el.closest(".grain"));
    setOnDark(!!hit?.closest(".moment"));
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 400 && y > prev + 4 && !open);
    if (y < prev - 4) setHidden(false);
    probe();
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run on every route change.
  useEffect(() => {
    setOpen(false);
    const t = window.setTimeout(probe, 700);
    return () => window.clearTimeout(t);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "is-scrolled" : ""} ${onDark || open ? "on-dark" : ""}`}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-inner">
          <TLink href="/" className="nav-brand" aria-label="Ratio, home" data-cursor="Home">
            <Mark size={26} />
            <span className="nav-word">Ratio</span>
          </TLink>
          <nav aria-label="Main" className="nav-links">
            {nav.map((n) => (
              <TLink
                key={n.href}
                href={n.href}
                className={`nav-link ${pathname === n.href ? "is-active" : ""}`}
                aria-current={pathname === n.href ? "page" : undefined}
              >
                {n.label}
              </TLink>
            ))}
          </nav>
          <div className="nav-end">
            <ThemeToggle />
            <TLink href="/#ambassadors" className="btn btn-ox btn-sm nav-cta">
              Ambassadors
            </TLink>
            <button
              type="button"
              className="nav-burger"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu moment"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Menu" className="menu-links">
              {[{ href: "/", label: "Home" }, ...nav].map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TLink href={n.href} className="menu-link" onClick={() => setOpen(false)}>
                    <span className="mono menu-n">{String(i + 1).padStart(2, "0")}</span>
                    {n.label}
                  </TLink>
                </motion.div>
              ))}
            </nav>
            <p className="menu-foot mono">Coming soon to iPhone · Educational, not legal advice</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
