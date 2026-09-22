"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import SplitReveal from "@/components/motion/SplitReveal";
import Tilt from "@/components/motion/Tilt";
import { ModuleArt } from "@/components/art/Engravings";
import { modules } from "@/lib/content";

export default function Modules() {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <section className="section modules" aria-labelledby="modules-h">
      <div className="wrap">
        <p className="eyebrow">
          <span className="num">07</span> The syllabus
        </p>
        <div className="modules-head">
          <SplitReveal as="h2" id="modules-h" className="h1">
            Six LLB modules <em className="ox">at launch.</em>
          </SplitReveal>
          <p className="lede">
            Around forty lessons each, ordered by your year and the modules you are taking. GDL, SQE and BPTC pathways
            follow later.
          </p>
        </div>
      </div>

      <div className="modules-rail" ref={rail}>
        <motion.div
          className="modules-track"
          drag="x"
          dragConstraints={rail}
          dragElastic={0.08}
          data-cursor="Drag"
        >
          {modules.map((m, i) => (
            <Tilt key={m.key} max={7} className="cover-tilt" radius={28}>
              <article className="cover">
                <div className="cover-top mono">
                  <span>Module {String(i + 1).padStart(2, "0")}</span>
                  <span>LLB</span>
                </div>
                <ModuleArt kind={m.key} className="cover-art" />
                <h3 className="cover-title">{m.title}</h3>
                <p className="cover-blurb small">{m.blurb}</p>
                <p className="cover-cases">
                  {m.cases.map((c) => (
                    <em key={c}>{c}</em>
                  ))}
                </p>
              </article>
            </Tilt>
          ))}
          <article className="cover cover-soon">
            <div className="cover-top mono">
              <span>Later</span>
              <span>Soon</span>
            </div>
            <p className="cover-soon-list">
              GDL
              <br />
              SQE
              <br />
              BPTC
            </p>
            <p className="small muted">Following a student from first year to qualification.</p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
