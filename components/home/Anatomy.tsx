"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Phone from "@/components/screens/Phone";
import { OverviewScreen, LectureScreen, ExamScreen, DebriefScreen } from "@/components/screens/Screens";
import SplitReveal from "@/components/motion/SplitReveal";

const stages = [
  {
    n: "I",
    t: "Overview",
    h: "A title page, not a wall of text.",
    d: "Objectives, the leading authorities with a line on each, and why this lesson matters to you, drawn from your profile. The law is stated as at a date, always.",
    screen: <OverviewScreen />,
    dark: false,
  },
  {
    n: "II",
    t: "Lecture",
    h: "One long read, gated by questions.",
    d: "Three to five parts. Each ends in a single in-line game, and the next part opens when you answer. Case cards expand in place into a law-report page.",
    screen: <LectureScreen />,
    dark: false,
  },
  {
    n: "III",
    t: "Tests",
    h: "The exam room.",
    d: "Three to five items drawn from a pool of twelve to fifteen, weighted to your weakest skill. Retake it and you get fresh items, so you cannot pass on memory of the answer positions.",
    screen: <ExamScreen />,
    dark: true,
  },
  {
    n: "IV",
    t: "Debrief",
    h: "What moved, and when it comes back.",
    d: "Secure or revisit for each item. What changed in your profile, with the uncertainty band. When each review is scheduled. No lives lost, no “Game Over”.",
    screen: <DebriefScreen />,
    dark: false,
  },
];

export default function Anatomy() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1000px) and (prefers-reduced-motion: no-preference)", () => {
        const track = root.current!.querySelector<HTMLElement>(".anat-track")!;
        const dist = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: ".anat-pin",
            start: "top top",
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        gsap.to(".anat-bar i", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ".anat-pin", start: "top top", end: () => `+=${dist()}`, scrub: true },
        });
        gsap.utils.toArray<HTMLElement>(".anat-panel .phone-wrap").forEach((el) => {
          gsap.fromTo(
            el,
            { rotate: 6, y: 40 },
            {
              rotate: -2,
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="lesson" className="anat" aria-labelledby="lesson-h">
      <div className="anat-pin">
        <div className="anat-track">
          <div className="anat-intro">
            <p className="eyebrow">
              <span className="num">02</span> Anatomy of a lesson
            </p>
            <SplitReveal as="h2" id="lesson-h" className="h1">
              Twelve to twenty minutes. <em className="ox">Four movements.</em>
            </SplitReveal>
            <p className="lede">
              A lesson covers one case or concept. The shape never changes, so your attention goes on the law, not on
              working out the app.
            </p>
            <p className="anat-hint mono">Scroll →</p>
          </div>
          {stages.map((s) => (
            <article key={s.n} className="anat-panel">
              <div className="anat-copy">
                <p className="anat-n">
                  <span>{s.n}</span> {s.t}
                </p>
                <h3 className="h2">{s.h}</h3>
                <p className="muted">{s.d}</p>
              </div>
              <div className="phone-wrap">
                <Phone className="p-anat" dark={s.dark} label={`Lesson ${s.t.toLowerCase()} screen`}>
                  {s.screen}
                </Phone>
              </div>
            </article>
          ))}
        </div>
        <div className="anat-bar" aria-hidden>
          <i />
        </div>
      </div>
    </section>
  );
}
