"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, LayoutGroup } from "motion/react";
import SplitReveal from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";
import { mechanics, references } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function useCycle(n: number, ms: number, active: boolean) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % n), ms);
    return () => window.clearInterval(t);
  }, [n, ms, active]);
  return i;
}

function RetrievalArt() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const step = useCycle(2, 2600, inView);
  return (
    <div ref={ref} className="art art-retrieval">
      <p className="mono art-lbl">
        <span className="dot-ox" /> Recall first
      </p>
      <div className="art-line w80" />
      <div className="art-line w60" />
      <div className="art-input">
        <motion.span
          className="art-caret"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
      <motion.div
        className="art-answer"
        animate={{ filter: step ? "blur(0px)" : "blur(7px)", opacity: step ? 1 : 0.5 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="art-line w90 ink" />
        <div className="art-line w70 ink" />
      </motion.div>
      <p className="mono art-foot">{step ? "Reveal" : "Recall"}</p>
    </div>
  );
}

function SpacingArt() {
  // Schematic forgetting curves: each review resets memory, and it fades more slowly.
  const reviews = [0, 36, 92, 178, 300];
  const segs = reviews.slice(0, -1).map((x0, k) => {
    const x1 = reviews[k + 1];
    const drop = 78 / (k + 1.2);
    return `M${x0 + 10} 22 C ${x0 + 10 + (x1 - x0) * 0.25} ${22 + drop * 0.8}, ${x0 + 10 + (x1 - x0) * 0.6} ${22 + drop}, ${x1 + 10} ${22 + drop}`;
  });
  return (
    <svg viewBox="0 0 330 130" className="art art-spacing" role="img" aria-label="Schematic: memory fades after each review, but more slowly each time, so the gaps between reviews grow.">
      <line x1="10" y1="112" x2="320" y2="112" stroke="var(--rule-strong)" />
      <line x1="10" y1="22" x2="320" y2="22" stroke="var(--rule)" strokeDasharray="2 4" />
      {segs.map((d, k) => (
        <motion.path
          key={k}
          d={d}
          fill="none"
          stroke="var(--ox)"
          strokeWidth="1.6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, delay: 0.3 + k * 0.55, ease: "easeOut" }}
        />
      ))}
      {reviews.map((x, k) => (
        <g key={x}>
          <motion.line
            x1={x + 10}
            x2={x + 10}
            y1={22}
            y2={112}
            stroke="var(--rule)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + k * 0.55 }}
          />
          <motion.circle
            cx={x + 10}
            cy={22}
            r="4.5"
            fill="var(--ink)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.2 + k * 0.55 }}
          />
        </g>
      ))}
      <text x="10" y="126" fontFamily="var(--mono)" fontSize="8" fill="var(--ink-2)" letterSpacing="1.2">
        REVIEWS · GAPS GROW · SCHEMATIC
      </text>
    </svg>
  );
}

const BLOCKED = ["C1", "C2", "C3", "T1", "T2", "T3", "K1", "K2", "K3"];
const MIXED = ["C1", "T1", "K1", "T2", "C2", "K2", "K3", "C3", "T3"];

function InterleaveArt() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const step = useCycle(2, 2400, inView);
  const order = step ? MIXED : BLOCKED;
  return (
    <div ref={ref} className="art art-inter">
      <LayoutGroup>
        <div className="inter-grid">
          {order.map((c) => (
            <motion.span key={c} layout transition={{ type: "spring", stiffness: 260, damping: 26 }} className={`inter-chip t-${c[0]}`}>
              {c[0] === "C" ? "Crime" : c[0] === "T" ? "Tort" : "Contract"}
            </motion.span>
          ))}
        </div>
      </LayoutGroup>
      <p className="mono art-foot">{step ? "Interleaved" : "Blocked"}</p>
      <span className="sr-only">Topics shuffle from blocked groups to a mixed order.</span>
    </div>
  );
}

function FadingArt() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const step = useCycle(4, 1800, inView);
  const level = 4 - step; // 4 → 1
  const rows = ["Issue", "Rule", "Application", "Conclusion"];
  return (
    <div ref={ref} className="art art-irac">
      <p className="mono art-lbl">Scaffold {level}/4</p>
      {rows.map((r, k) => {
        const filled = k < level;
        return (
          <div key={r} className="irac-row">
            <span className="mono irac-k">{r[0]}</span>
            <motion.div
              className={`irac-slot ${filled ? "filled" : ""}`}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="irac-fill" animate={{ scaleX: filled ? 1 : 0 }} transition={{ duration: 0.5, ease: EASE }} />
              {!filled && <span className="irac-you mono">your turn</span>}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

function FeedbackArt() {
  return (
    <div className="art art-fb">
      <div className="fb-opt wrong">
        <span>✗</span> <em className="case">R <span className="v">v</span> Woollin</em>
      </div>
      <motion.div
        className="fb-card"
        initial={{ opacity: 0, x: -24, height: 0 }}
        whileInView={{ opacity: 1, x: 0, height: "auto" }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
      >
        <p className="mono art-lbl ox">The trap</p>
        <p className="small">The case you remember best is tempting. Nedrick coined it; Woollin refined it.</p>
      </motion.div>
    </div>
  );
}

const ART: Record<string, React.ComponentType> = {
  retrieval: RetrievalArt,
  spacing: SpacingArt,
  interleaving: InterleaveArt,
  fading: FadingArt,
  feedback: FeedbackArt,
};

export default function Method() {
  return (
    <section id="method" className="section method" aria-labelledby="method-h">
      <div className="wrap method-grid">
        <div className="method-side">
          <div className="method-sticky">
            <p className="eyebrow">
              <span className="num">04</span> The method
            </p>
            <SplitReveal as="h2" id="method-h" className="h1">
              Five mechanics. <em className="ox">Each earns its place.</em>
            </SplitReveal>
            <p className="lede">
              Everything in Ratio traces back to one of these. Streaks, boards and sound serve the practice; they never
              replace it.
            </p>
            <p className="small muted method-disclaimer">
              These findings inform how Ratio is built. They are not evidence that Ratio works; we will measure that
              ourselves, starting with how much students remember seven days or more after first learning it.
            </p>
          </div>
        </div>

        <ol className="method-list">
          {mechanics.map((m) => {
            const A = ART[m.key];
            return (
              <li key={m.key} className="mech">
                <Reveal className="mech-inner">
                  <div className="mech-copy">
                    <p className="mech-n mono">{m.n}</p>
                    <h3 className="h3">
                      {m.title}
                      <span className="refs">
                        {m.refs.map((r) => (
                          <a key={r} href={`#ref-${r}`} className="ref" aria-label={`Reference ${r}`}>
                            {r}
                          </a>
                        ))}
                      </span>
                    </h3>
                    <p className="mech-line">{m.line}</p>
                    <p className="muted small">{m.body}</p>
                    <p className="mech-where mono">In Ratio: {m.where}</p>
                  </div>
                  <div className="mech-art card">
                    <A />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="wrap">
        <Reveal as="div" className="refs-block">
          <p className="eyebrow">References</p>
          <ol className="ref-list">
            {references.map((r) => (
              <li key={r.id} id={`ref-${r.id}`}>
                <span className="mono ox">{r.id}</span>
                <span>
                  {r.full}{" "}
                  <a className="link-u mono ref-doi" href={`https://doi.org/${r.doi}`} target="_blank" rel="noreferrer">
                    doi:{r.doi}
                  </a>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
