"use client";
import { motion, type HTMLMotionProps } from "motion/react";

/** Fade-and-rise on first view. The workhorse. */
export function Reveal({
  delay = 0,
  y = 28,
  children,
  as = "div",
  ...rest
}: { delay?: number; y?: number; as?: "div" | "li" | "section" | "article" | "p" | "span" } & HTMLMotionProps<"div">) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Staggers direct children that are <RevealItem>. */
export function Stagger({
  children,
  gap = 0.08,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  gap?: number;
  className?: string;
  as?: "div" | "ul" | "ol";
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </M>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  y?: number;
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </M>
  );
}
