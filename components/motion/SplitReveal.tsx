"use client";
import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Masked line/word reveal using GSAP SplitText.
 * `immediate` plays on mount (hero); otherwise on scroll into view.
 */
export default function SplitReveal({
  as: Tag = "h2",
  children,
  className,
  by = "words",
  immediate = false,
  delay = 0,
  stagger,
  id,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  by?: "words" | "lines" | "chars";
  immediate?: boolean;
  delay?: number;
  stagger?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(el, {
          type: by === "lines" ? "lines" : by === "chars" ? "words,chars" : "lines,words",
          mask: "lines",
          autoSplit: true,
          linesClass: "sr-line",
          onSplit(self) {
            const targets = by === "lines" ? self.lines : by === "chars" ? self.chars : self.words;
            return gsap.from(targets, {
              yPercent: 115,
              rotate: by === "chars" ? 0 : 2,
              duration: 1.25,
              ease: "expo.out",
              stagger: stagger ?? (by === "chars" ? 0.018 : by === "lines" ? 0.12 : 0.045),
              delay,
              scrollTrigger: immediate ? undefined : { trigger: el, start: "top 85%", once: true },
            });
          },
        });
        gsap.set(el, { autoAlpha: 1 });
        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`split ${className ?? ""}`} id={id}>
      {children}
    </Tag>
  );
}
