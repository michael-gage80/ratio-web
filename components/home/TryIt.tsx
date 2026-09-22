"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SplitReveal from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";
import { RecallFirst, QuickCheck, Threshold, TapTheFact, TrapMCQ } from "@/components/demos/Games";
import { demoRecall, demoQuickCheck, demoThreshold, demoTap, demoTrap } from "@/lib/content";

const games = [
  { key: "recall", name: "Recall first", skill: "Knowledge", src: demoRecall.source, C: RecallFirst },
  { key: "quick", name: "Quick check", skill: "Knowledge", src: demoQuickCheck.source, C: QuickCheck },
  { key: "threshold", name: "Threshold slider", skill: "Understanding", src: demoThreshold.source, C: Threshold },
  { key: "tap", name: "Tap the fact", skill: "Application", src: demoTap.source, C: TapTheFact },
  { key: "trap", name: "MCQ with trap", skill: "Any", src: demoTrap.source, C: TrapMCQ },
];

const more = ["Sequence", "IRAC builder", "Highlight the ratio", "Distinguish the case", "Statute parser", "Apply the rule"];

export default function TryIt() {
  const [i, setI] = useState(0);
  const G = games[i];
  return (
    <section id="try" className="section try" aria-labelledby="try-h">
      <div className="wrap">
        <div className="try-head">
          <p className="eyebrow">
            <span className="num">03</span> Try it now
          </p>
          <SplitReveal as="h2" id="try-h" className="h1">
            Eleven in-line games. <em className="ox">Five, right here.</em>
          </SplitReveal>
          <p className="lede">
            Feedback lands the moment you answer. A wrong answer always shows the reasoning. Nothing is timed, and
            nothing is lost.
          </p>
        </div>

        <Reveal className="console">
          <div className="console-tabs" role="tablist" aria-label="Game types">
            {games.map((g, n) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                id={`tab-${g.key}`}
                aria-selected={n === i}
                aria-controls="game-panel"
                className={`console-tab ${n === i ? "on" : ""}`}
                onClick={() => setI(n)}
              >
                <span className="mono console-n">{String(n + 1).padStart(2, "0")}</span>
                <span className="console-name">{g.name}</span>
                <span className="mono console-skill">{g.skill}</span>
                {n === i && <motion.span layoutId="tab-ink" className="console-ink" transition={{ type: "spring", stiffness: 400, damping: 36 }} />}
              </button>
            ))}
            <p className="console-more small muted">
              Also in lessons: {more.join(" · ")}.
            </p>
          </div>

          <div className="console-stage card" id="game-panel" role="tabpanel" aria-labelledby={`tab-${G.key}`}>
            <div className="console-top">
              <span className="eyebrow">
                <span className="dot" /> {G.name}
              </span>
              <span className="sample">Sample · {G.src} · pending lawyer review</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={G.key}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <G.C />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
