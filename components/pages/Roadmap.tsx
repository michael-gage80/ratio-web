"use client";
import { motion } from "motion/react";

const items = [
  { k: "Now", t: "iPhone app", d: "Six LLB modules, the daily brief, lessons, duels and boards." },
  { k: "Next", t: "Law schools", d: "Tutor console with cohort view, custom assignments, SSO and an inter-university league." },
  { k: "Then", t: "Android and a tutor", d: "Android, and an AI tutor grounded in reviewed lesson content." },
  { k: "Later", t: "GDL, SQE, BPTC", d: "Following students from first year to qualification." },
];

export default function Roadmap() {
  return (
    <ol className="road">
      <motion.span
        className="road-line"
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
      />
      {items.map((it, i) => (
        <motion.li
          key={it.k}
          className="road-item"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`road-dot ${i === 0 ? "now" : ""}`} />
          <span className="mono road-k">{it.k}</span>
          <h3 className="h3">{it.t}</h3>
          <p className="muted">{it.d}</p>
        </motion.li>
      ))}
    </ol>
  );
}
