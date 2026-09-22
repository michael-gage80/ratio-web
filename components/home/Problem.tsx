"use client";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Stagger, RevealItem } from "@/components/motion/Reveal";

const skills = [
  {
    n: "K",
    t: "Knowledge",
    d: "Recall a rule, an element or a case.",
    ex: "“The mens rea of murder is intention to …”",
  },
  {
    n: "U",
    t: "Understanding",
    d: "Explain, distinguish or put things in order.",
    ex: "“What did Woollin change from Nedrick?”",
  },
  {
    n: "A",
    t: "Application",
    d: "Apply a rule to facts you have never seen.",
    ex: "“Dev sets fire to the flat for the insurance money …”",
  },
];

export default function Problem() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const split = SplitText.create(".problem-read", { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ".problem-read", start: "top 78%", end: "bottom 42%", scrub: true },
          },
        );
        gsap.fromTo(
          ".problem-strike",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: ".problem-read", start: "center 55%", end: "bottom 45%", scrub: true },
          },
        );
        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="problem" className="section problem" aria-labelledby="problem-h">
      <div className="wrap">
        <p className="eyebrow">
          <span className="num">01</span> Knowing isn’t applying
        </p>
        <h2 id="problem-h" className="sr-only">
          Knowing isn’t applying
        </h2>
        <p className="problem-read">
          You can recite{" "}
<em className="ox">Woollin</em>. The year, the court, the words <em>virtual certainty</em>. Then the exam hands you a man who set fire to a flat
          for the insurance money, and asks what he{" "}
          <span className="problem-s">
            <em className="ox">intended</em>
            <span className="problem-strike" aria-hidden />
          </span>
          .
        </p>

        <div className="problem-cols">
          <p className="lede">
            Law students can often recall the rules and still struggle to apply them to new facts under exam pressure.
            Most revision tools test recall: flashcards, question banks, summary notes. Ratio is built for the other two
            skills, and for remembering what you learned in October when it is May.
          </p>
          <p className="problem-note small muted">
            Every item in Ratio is tagged to one of three skills. Your practice leans towards whichever is your growth
            edge.
          </p>
        </div>

        <Stagger className="skills" gap={0.12}>
          {skills.map((s, i) => (
            <RevealItem key={s.t} className={`skill card spot ${i === 2 ? "skill-a" : ""}`} as="article">
              <span className="skill-n">{s.n}</span>
              <h3 className="h3">{s.t}</h3>
              <p className="muted">{s.d}</p>
              <p className="skill-ex">{s.ex}</p>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
