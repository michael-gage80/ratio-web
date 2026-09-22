"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TLink } from "@/components/motion/Transition";
import { site, nav } from "@/lib/site";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const dotY = useTransform(scrollYProgress, [0.55, 0.95], [-260, 0]);
  const dotScale = useTransform(scrollYProgress, [0.9, 0.97, 1], [1, 1.25, 1]);

  return (
    <footer ref={ref} className="footer moment">
      <div className="wrap footer-top">
        <div className="footer-col">
          <p className="eyebrow">Ratio</p>
          <p className="footer-lede">
            A learning game for the LLB. <em>Coming soon to iPhone.</em>
          </p>
          <a className="footer-mail link-u" href={`mailto:${site.email}`} data-cursor="Write">
            {site.email}
          </a>
        </div>
        <nav className="footer-col" aria-label="Footer">
          <p className="eyebrow">Pages</p>
          <ul className="footer-list">
            <li>
              <TLink href="/" className="link-u">Home</TLink>
            </li>
            {nav.map((n) => (
              <li key={n.href}>
                <TLink href={n.href} className="link-u">{n.label}</TLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-col">
          <p className="eyebrow">Small print</p>
          <ul className="footer-list">
            <li>
              <TLink href="/privacy" className="link-u">Privacy (draft)</TLink>
            </li>
            <li>
              <TLink href="/terms" className="link-u">Terms (draft)</TLink>
            </li>
            <li>
              <TLink href="/#ambassadors" className="link-u">Founding ambassadors</TLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-giant" aria-hidden>
        <motion.div className="footer-word" style={{ y }}>
          Ratio
          <motion.span className="footer-dot" style={{ y: dotY, scale: dotScale }} />
        </motion.div>
      </div>

      <div className="wrap footer-base mono">
        <span>© {new Date().getFullYear()} Ratio</span>
        <span>Educational, not legal advice</span>
        <span>For LLB students in England and Wales</span>
      </div>
    </footer>
  );
}
