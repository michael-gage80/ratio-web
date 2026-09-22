// biome-ignore-all lint/a11y/useSemanticElements: an ARIA table keeps the CSS grid heatmap layout.
// biome-ignore-all lint/a11y/useFocusableInteractive: table rows and headers are not interactive.
"use client";
import { motion } from "motion/react";

const topics = ["Omissions", "Causation", "Intention", "Recklessness", "Murder", "Partial defences"];
const skills = ["Knowledge", "Understanding", "Application"];
// Illustrative cohort means (0–100).
const data = [
  [78, 66, 58],
  [72, 61, 49],
  [74, 58, 44],
  [69, 63, 55],
  [81, 70, 62],
  [64, 52, 41],
];

export default function Cohort() {
  return (
    <div className="cohort card">
      <div className="cohort-top">
        <div>
          <p className="eyebrow">Cohort view · Criminal law · Year 1</p>
          <p className="h3">
            Where the cohort’s <em className="ox">growth edge</em> is.
          </p>
        </div>
        <span className="sample">Concept · in development</span>
      </div>
      <div className="cohort-grid" role="table" aria-label="Illustrative cohort skill heatmap">
        <div role="row" className="cohort-row head">
          <span role="columnheader" />
          {skills.map((s) => (
            <span role="columnheader" key={s} className="mono">
              {s}
            </span>
          ))}
        </div>
        {topics.map((t, r) => (
          <div role="row" className="cohort-row" key={t}>
            <span role="rowheader">{t}</span>
            {data[r].map((v, c) => (
              <motion.span
                role="cell"
                key={c}
                className="cohort-cell mono"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (r * 3 + c) * 0.035, duration: 0.5 }}
                style={{ background: `color-mix(in srgb, var(--ox) ${Math.round((100 - v) * 1.1)}%, var(--paper))`, color: v < 50 ? "var(--on-fill)" : "var(--ink)" }}
              >
                {v}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
      <p className="small muted cohort-note">
        Illustrative data. Aggregates only, with a minimum cohort size of ten. Individual results are shared with a university
        only when the student opts in.
      </p>
    </div>
  );
}
