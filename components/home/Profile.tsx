"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import SplitReveal from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";

const C = { x: 200, y: 210 };
const R = 160;
const AX = [
  { key: "Knowledge", a: -90, v: 67, s: 8 },
  { key: "Understanding", a: 30, v: 61, s: 10 },
  { key: "Application", a: 150, v: 52, s: 12 },
];
const pt = (a: number, val: number) => {
  const r = (R * Math.max(0, Math.min(100, val))) / 100;
  const rad = (a * Math.PI) / 180;
  return [C.x + r * Math.cos(rad), C.y + r * Math.sin(rad)];
};
const poly = (vals: number[]) => AX.map((ax, i) => pt(ax.a, vals[i]).join(",")).join(" ");

function useScores(p: MotionValue<number>) {
  // p: 0 → 1. Values settle from a neutral 50 towards the estimate; bands shrink from ±26 to the final σ.
  const vals = AX.map((ax) => useTransform(p, [0, 1], [50, ax.v])); // eslint-disable-line react-hooks/rules-of-hooks
  const sig = AX.map((ax) => useTransform(p, [0, 1], [26, ax.s])); // eslint-disable-line react-hooks/rules-of-hooks
  return { vals, sig };
}

export default function Profile() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "center 45%"] });
  const p = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const { vals, sig } = useScores(p);

  const all = [...vals, ...sig];
  const band = useTransform(all as MotionValue<number>[], (arr: number[]) => {
    const v = arr.slice(0, 3);
    const s = arr.slice(3);
    const outer = poly(v.map((x, i) => x + s[i]));
    const inner = poly(v.map((x, i) => x - s[i]));
    return `M${outer.replace(/ /g, " L")} Z M${inner.replace(/ /g, " L")} Z`;
  });
  const mid = useTransform(vals, (v: number[]) => poly(v));
  const label = (i: number) =>
    useTransform([vals[i], sig[i]] as MotionValue<number>[], ([v, s]: number[]) => `${Math.round(v)} ±${Math.round(s)}`); // eslint-disable-line react-hooks/rules-of-hooks
  const labels = [label(0), label(1), label(2)];
  const barL = (i: number) => useTransform([vals[i], sig[i]] as MotionValue<number>[], ([v, s]: number[]) => `${v - s}%`); // eslint-disable-line react-hooks/rules-of-hooks
  const barW = (i: number) => useTransform(sig[i], (s) => `${2 * s}%`); // eslint-disable-line react-hooks/rules-of-hooks
  const dotL = (i: number) => useTransform(vals[i], (v) => `${v}%`); // eslint-disable-line react-hooks/rules-of-hooks
  const bars = AX.map((_, i) => ({ l: barL(i), w: barW(i), d: dotL(i) }));

  return (
    <section ref={ref} id="profile" className="section profile" aria-labelledby="profile-h">
      <div className="wrap profile-grid">
        <div className="profile-copy">
          <p className="eyebrow">
            <span className="num">05</span> Your profile
          </p>
          <SplitReveal as="h2" id="profile-h" className="h1">
            A hypothesis, <em className="ox">not a verdict.</em>
          </SplitReveal>
          <p className="lede">
            Three scores in every topic — knowledge, understanding, application — each drawn with its uncertainty band.
            The band starts wide after a ten-question diagnostic and narrows as you play. We never show 100 unless we are
            sure.
          </p>
          <Reveal className="archetype card">
            <div className="archetype-top">
              <span className="eyebrow">Current profile</span>
              <span className="chip chip-ox">Hypothesis</span>
            </div>
            <p className="h3">
              The <em className="ox">Recogniser.</em>
            </p>
            <p className="muted small">Strong recall; application is your growth edge. It changes as your scores do.</p>
          </Reveal>
          <p className="profile-formula mono" aria-label="Each answer updates a rating theta against item difficulty b; the uncertainty sigma shrinks as evidence builds.">
            p = 1 / (1 + e<sup>−(θ − b)</sup>) &nbsp;·&nbsp; θ′ = θ + K(σ)(y − p) &nbsp;·&nbsp; σ′ = max(σ<sub>min</sub>, σd)
          </p>
        </div>

        <div className="profile-viz">
          <svg viewBox="0 0 400 380" className="tri" role="img" aria-label="Triangle chart. Knowledge 67 plus or minus 8, understanding 61 plus or minus 10, application 52 plus or minus 12. Illustrative.">
            {[25, 50, 75, 100].map((g) => (
              <polygon key={g} points={poly([g, g, g])} fill="none" stroke="var(--rule)" strokeDasharray={g === 100 ? "0" : "2 4"} />
            ))}
            {AX.map((ax) => {
              const [x, y] = pt(ax.a, 100);
              return <line key={ax.key} x1={C.x} y1={C.y} x2={x} y2={y} stroke="var(--rule)" />;
            })}
            <motion.path d={band} fill="var(--ox)" fillOpacity="0.14" fillRule="evenodd" />
            <motion.polygon points={mid} fill="var(--ox)" fillOpacity="0.1" stroke="var(--ox)" strokeWidth="1.8" />
            {AX.map((ax, i) => {
              const [x, y] = pt(ax.a, 100);
              const dy = ax.a === -90 ? -18 : 26;
              return (
                <g key={ax.key}>
                  <text x={x} y={y + dy} textAnchor="middle" fontFamily="var(--mono)" fontSize="10" letterSpacing="1.6" fill="var(--ink-2)">
                    {ax.key.toUpperCase()}
                  </text>
                  <motion.text x={x} y={y + dy + 15} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fill="var(--ink)">
                    {labels[i]}
                  </motion.text>
                </g>
              );
            })}
          </svg>
          <div className="bands">
            {AX.map((ax, i) => (
              <div key={ax.key} className="band-row">
                <div className="band-top">
                  <span>{ax.key}</span>
                  <motion.span className="mono">{labels[i]}</motion.span>
                </div>
                <div className="band-track">
                  <motion.i className="band-range" style={{ left: bars[i].l, width: bars[i].w }} />
                  <motion.b className="band-dot" style={{ left: bars[i].d }} />
                </div>
              </div>
            ))}
            <p className="small muted it">The shaded band is our uncertainty. It narrows as you answer more. Illustrative.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
