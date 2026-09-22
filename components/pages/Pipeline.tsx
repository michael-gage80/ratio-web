"use client";
import { motion } from "motion/react";

const steps = [
  ["Spine", "Topics and lessons set against common LLB syllabi."],
  ["Draft", "AI drafts the lesson: parts, items, the trap, citations."],
  ["Lint", "Automated checks: schema, required citations, skill balance, reading time."],
  ["Review", "Every lesson read by the founder, then signed off by a qualified lawyer, with name and date recorded."],
  ["Publish", "Only approved lessons ship, with the date the law is stated at."],
  ["Report", "A report button on every item. Errors triaged within 72 hours; a confirmed error is pulled from every pool."],
];

export default function Pipeline() {
  return (
    <div className="pipe">
      <motion.div
        className="pipe-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
      />
      <ol className="pipe-steps">
        {steps.map(([t, d], i) => (
          <motion.li
            key={t}
            className="pipe-step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={`pipe-dot ${t === "Review" ? "key" : ""}`} />
            <span className="mono pipe-n">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="pipe-t">{t}</h3>
            <p className="small muted">{d}</p>
          </motion.li>
        ))}
      </ol>
      <motion.svg
        className="pipe-loop"
        viewBox="0 0 400 60"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6 }}
      >
        <motion.path
          d="M390 6 C 390 50, 200 54, 10 54 L10 6"
          fill="none"
          stroke="var(--ox)"
          strokeDasharray="3 5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.6 }}
        />
      </motion.svg>
    </div>
  );
}
