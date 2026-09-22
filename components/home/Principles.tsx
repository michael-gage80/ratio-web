"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitReveal from "@/components/motion/SplitReveal";
import { principles } from "@/lib/content";

export default function Principles() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".pr-item").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 80%", end: "top 50%", scrub: true },
            },
          );
          gsap.fromTo(
            el.querySelector(".pr-rule"),
            { scaleX: 0 },
            { scaleX: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "top 55%", scrub: true } },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="principles" className="section principles" aria-labelledby="pr-h">
      <div className="wrap pr-grid">
        <div className="pr-side">
          <div className="pr-sticky">
            <p className="eyebrow">
              <span className="num">08</span> Principles
            </p>
            <SplitReveal as="h2" id="pr-h" className="h1">
              A game that <em className="ox">respects</em> the student.
            </SplitReveal>
            <p className="lede">
              Public commitments, not features. If Ratio ever breaks one, hold us to it.
            </p>
          </div>
        </div>
        <ol className="pr-list">
          {principles.map((p, i) => (
            <li key={p.t} className="pr-item">
              <span className="pr-rule" aria-hidden />
              <span className="mono pr-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="pr-t">{p.t}</h3>
                <p className="muted">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
