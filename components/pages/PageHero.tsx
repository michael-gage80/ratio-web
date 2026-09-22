"use client";
import SplitReveal from "@/components/motion/SplitReveal";
import { motion } from "motion/react";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="phero">
      <div className="wrap">
        <motion.div
          className="phero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {eyebrow}
        </motion.p>
        <SplitReveal as="h1" className="display phero-h" immediate delay={0.25}>
          {title}
        </SplitReveal>
        {lede && (
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {lede}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
