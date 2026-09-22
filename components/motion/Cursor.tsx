"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Oxblood dot + ink ring that trails it. The ring grows and shows a label over
 * anything with [data-cursor="Label"]. Fine pointers only; off for Reduce Motion.
 * Also drives the --mx/--my spotlight on .spot and .btn elements.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });
  const last = useRef<Element | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      const s = t?.closest?.(".spot, .btn") as HTMLElement | null;
      if (s) {
        const r = s.getBoundingClientRect();
        s.style.setProperty("--mx", `${e.clientX - r.left}px`);
        s.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      const c = t?.closest?.("[data-cursor], a, button, [role=button], input, label, textarea") ?? null;
      if (c !== last.current) {
        last.current = c;
        setActive(!!c);
        setLabel(c?.getAttribute?.("data-cursor") || null);
      }
    };
    const onDown = () => setDown(true);
    const onUp = (e: PointerEvent) => {
      setDown(false);
      // The element under the pointer may have just been replaced; re-read it.
      window.setTimeout(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const c = el?.closest?.("[data-cursor], a, button, [role=button], input, label, textarea") ?? null;
        last.current = c;
        setActive(!!c);
        setLabel(c?.getAttribute?.("data-cursor") || null);
      }, 120);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    if (fine && !reduce) {
      setEnabled(true);
      document.documentElement.classList.add("has-cursor");
      window.addEventListener("pointerdown", onDown);
      window.addEventListener("pointerup", onUp);
    }
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  const size = label ? 88 : active ? 54 : 34;
  return (
    <>
      <motion.div className="cursor-ring" aria-hidden style={{ x: rx, y: ry }}>
        <motion.div
          className="cursor-ring-inner"
          animate={{ width: size, height: size, scale: down ? 0.85 : 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          data-label={label ? "1" : undefined}
        >
          {label && <span>{label}</span>}
        </motion.div>
      </motion.div>
      <motion.div className="cursor-dot" aria-hidden style={{ x, y }} animate={{ scale: label ? 0 : 1 }} />
    </>
  );
}
