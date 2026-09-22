"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScalesSeal } from "@/components/art/Engravings";
import SplitReveal from "@/components/motion/SplitReveal";
import { Stagger, RevealItem } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { TLink } from "@/components/motion/Transition";
import { rounds } from "@/lib/content";



export default function DuelTeaser() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const left = useTransform(scrollYProgress, [0.1, 0.85], ["-60vw", "0vw"]);
  const right = useTransform(scrollYProgress, [0.1, 0.85], ["60vw", "0vw"]);
  const rot = useTransform(scrollYProgress, [0.2, 1], [-160, 0]);
  const sealScale = useTransform(scrollYProgress, [0.55, 0.9, 1], [0.4, 1.08, 1]);

  return (
    <section ref={ref} id="duel" className="section duelt moment" aria-labelledby="duel-h">
      <div className="wrap">
        <p className="eyebrow">
          <span className="num">06</span> Duel
        </p>

        <div className="vs" aria-hidden>
          <motion.div className="vs-side" style={{ x: left }}>
            <span className="vs-av" style={{ background: "#1C7147" }}>
              Z
            </span>
            <span className="vs-name">Zara K.</span>
            <span className="mono vs-r">Rating 1,398</span>
          </motion.div>
          <motion.div className="vs-seal" style={{ rotate: rot, scale: sealScale }}>
            <ScalesSeal />
          </motion.div>
          <motion.div className="vs-side" style={{ x: right }}>
            <span className="vs-av" style={{ background: "#9B2A24" }}>
              A
            </span>
            <span className="vs-name">Amara O.</span>
            <span className="mono vs-r">Rating 1,412</span>
          </motion.div>
        </div>

        <SplitReveal as="h2" id="duel-h" className="display duelt-h">
          First to three. <em className="ox">Ten seconds</em> a question.
        </SplitReveal>
        <p className="lede duelt-lede">
          A wrong answer hands the point to your opponent, so button-mashing never pays. Rounds mix four types, so speed
          alone doesn’t win. Every match ends in a debrief that links each miss back to the paragraph it came from.
        </p>

        <Stagger className="rounds" gap={0.1}>
          {rounds.map((r, i) => (
            <RevealItem key={r.t} className="round card spot" as="article">
              <span className="mono round-n">Round {i + 1}</span>
              <h3 className="h3">{r.t}</h3>
              <p className="muted small">{r.d}</p>
              <span className="chip">{r.s}</span>
            </RevealItem>
          ))}
        </Stagger>

        <div className="duelt-foot">
          <p className="judgment">
            <span className="mono">Judgment entered</span>
          </p>
          <Magnetic>
            <TLink href="/duel#play" className="btn btn-ox" data-cursor="Play">
              Play a practice duel <span className="arrow">→</span>
            </TLink>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
