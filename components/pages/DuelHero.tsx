"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScalesSeal } from "@/components/art/Engravings";
import SplitReveal from "@/components/motion/SplitReveal";
import Magnetic from "@/components/motion/Magnetic";

export default function DuelHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rot = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const topY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const botY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="dhero">
      <motion.div className="dhero-top moment" style={{ y: topY }}>
        <div className="wrap">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Duel · Multiplayer
          </motion.p>
          <SplitReveal as="h1" className="display dhero-h" immediate delay={0.2}>
            Two students. <em className="ox">One point</em> at a time.
          </SplitReveal>
        </div>
      </motion.div>
      <motion.div className="dhero-bot" style={{ y: botY }}>
        <motion.div
          className="dhero-seal"
          initial={{ scale: 0.3, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.6 }}
        >
          <motion.div style={{ rotate: rot }}>
            <ScalesSeal />
          </motion.div>
        </motion.div>
        <div className="wrap dhero-bot-in">
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            First to three, ten seconds a question, ranked by module. Every point is decided by the server, and every match
            ends in a debrief that sends you back to the paragraph you missed.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.05 }}>
            <Magnetic>
              <a href="#play" className="btn btn-ox" data-cursor="Play">
                Play the practice duel <span className="arrow">↓</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
