"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitReveal from "@/components/motion/SplitReveal";
import Magnetic from "@/components/motion/Magnetic";
import Tilt from "@/components/motion/Tilt";
import Phone from "@/components/screens/Phone";
import { TodayScreen } from "@/components/screens/Screens";
import { TLink } from "@/components/motion/Transition";
import { ticker } from "@/lib/content";

const index = [
  ["01", "Knowing isn’t applying", "#problem"],
  ["02", "Anatomy of a lesson", "#lesson"],
  ["03", "Try it now", "#try"],
  ["04", "The method", "#method"],
  ["05", "Your profile", "#profile"],
  ["06", "Duel", "#duel"],
  ["07", "Principles", "#principles"],
];

function Dateline() {
  const [d, setD] = useState("");
  useEffect(() => {
    setD(
      new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Europe/London",
      }),
    );
  }, []);
  return <span suppressHydrationWarning>{d || "England & Wales"}</span>;
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".masthead > *", { y: 14, autoAlpha: 0, stagger: 0.08, duration: 1 })
          .from(".hero .double-rule", { scaleX: 0, transformOrigin: "left", duration: 1.6, ease: "expo.inOut" }, 0)
          .from(".hero-kicker", { y: 16, autoAlpha: 0, duration: 1 }, 0.35)
          .from(".hero-lede", { y: 24, autoAlpha: 0, duration: 1.2 }, 0.9)
          .from(".hero-cta > *", { y: 20, autoAlpha: 0, stagger: 0.1, duration: 1 }, 1.05)
          .from(
            ".hero-phone",
            { xPercent: 70, rotate: 9, autoAlpha: 0, duration: 1.8, ease: "expo.out" },
            0.45,
          )
          .from(".hero-index li", { y: 18, autoAlpha: 0, stagger: 0.05, duration: 0.9 }, 1.2)
          .from(".ticker", { autoAlpha: 0, duration: 1 }, 1.4);

        gsap.to(".hero-phone-par", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-main", {
          yPercent: 8,
          autoAlpha: 0.4,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "55% top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="masthead mono">
          <span>Vol. I · No. 1</span>
          <span className="masthead-mid">The LLB, reported</span>
          <Dateline />
        </div>
        <div className="double-rule" />

        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow hero-kicker">
              <span className="dot" /> Coming soon to iPhone · For LLB students in England &amp; Wales
            </p>
            <SplitReveal as="h1" id="hero-h" className="display hero-h" immediate delay={0.35} stagger={0.07}>
              Think like a <em className="ox">lawyer.</em> Learn like a <em className="ox">game.</em>
            </SplitReveal>
            <p className="lede hero-lede">
              Ratio teaches the law in short, beautifully made lessons, then asks you to use it on facts you have never
              seen. It learns what you know, shows how sure it is, and decides what you study next.
            </p>
            <div className="hero-cta">
              <Magnetic>
                <TLink href="/duel#play" className="btn btn-ox" data-cursor="Play">
                  Play a practice duel <span className="arrow">→</span>
                </TLink>
              </Magnetic>
              <Magnetic>
                <a href="#ambassadors" className="btn btn-ghost">
                  Become a founding ambassador
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-phone-par">
              <div className="hero-phone">
                <Tilt max={8} radius={52}>
                  <Phone className="p-hero" label="Ratio’s Today screen: a daily brief, a weekly streak and a duel card">
                    <TodayScreen />
                  </Phone>
                </Tilt>
                <p className="hero-caption mono">Fig. 1 — Today, with the daily brief</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="hero-index" aria-label="On this page">
          <p className="eyebrow">In this issue</p>
          <ol>
            {index.map(([n, t, h]) => (
              <li key={n}>
                <a href={h} className="link-u">
                  <span className="mono ox">{n}</span> {t}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="ticker" aria-hidden>
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>
              <em>{t}</em>
              <b>§</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
