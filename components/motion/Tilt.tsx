"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

/** 3D tilt with a soft glare that follows the pointer. */
export default function Tilt({
  children,
  max = 10,
  className,
  glare = true,
  style,
  radius = 24,
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
  style?: React.CSSProperties;
  radius?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 150, damping: 18 });
  const spy = useSpring(py, { stiffness: 150, damping: 18 });
  const rotateY = useTransform(spx, [0, 1], [-max, max]);
  const rotateX = useTransform(spy, [0, 1], [max, -max]);
  const gx = useTransform(spx, (v) => `${v * 100}%`);
  const gy = useTransform(spy, (v) => `${v * 100}%`);
  const glareBg = useTransform(
    [gx, gy] as never,
    ([a, b]: string[]) => `radial-gradient(600px circle at ${a} ${b}, rgba(255,255,255,0.16), transparent 45%)`,
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ perspective: 1200, ...style }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d", position: "relative" }}>
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: radius,
              pointerEvents: "none",
              background: glareBg,
              mixBlendMode: "soft-light",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
