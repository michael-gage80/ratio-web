import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import SectionHead from "@/components/pages/SectionHead";
import Roadmap from "@/components/pages/Roadmap";
import { Reveal } from "@/components/motion/Reveal";
import { site, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "About",
  "Why Ratio exists, who is building it, and where it is going: from the LLB to GDL, SQE and BPTC.",
  "/about",
  "/og/about.png",
);

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Named for the part of a judgment <em className="ox">that binds.</em>
          </>
        }
      >
        <Reveal className="defn card" delay={0.6}>
          <p className="defn-word">
            ratio decidendi <span className="mono muted">Latin · noun</span>
          </p>
          <p className="defn-body">
            The reason for the decision: the principle of law on which a case turns, and the part later courts are bound to
            follow. Everything else is commentary.
          </p>
        </Reveal>
      </PageHero>

      <section className="section tight" aria-labelledby="why-h">
        <div className="wrap about-why">
          <SectionHead n="01" eyebrow="Why" id="why-h" title={<>Students don’t lack effort. <em className="ox">They lack the right practice.</em></>} />
          <div className="about-cols">
            <Reveal>
              <p className="lede">
                Law students put in hours with flashcards, question banks and notes, and still meet exam questions they
                cannot crack. Those tools train recall. The exam rewards application: taking a rule you know and using it
                on facts you have never seen.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="muted">
                Ratio is built on the most robust findings in the learning sciences, and designed like a game that respects
                the people playing it. It measures itself on one thing above all: whether students still remember the law
                a week or more after learning it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section founder-sec moment" aria-labelledby="founder-h">
        <div className="wrap founder">
          <Reveal className="founder-photo" y={40}>
            <div className="founder-frame" role="img" aria-label="Photograph of Mike Gage to follow">
              <span>MG</span>
            </div>
            <p className="mono founder-cap">Portrait to follow</p>
          </Reveal>
          <div>
            <p className="eyebrow">
              <span className="num">02</span> Founder
            </p>
            <h2 id="founder-h" className="h1 founder-name">
              {site.founder.name} <span className="founder-post">{site.founder.postnominals}</span>
            </h2>
            <Reveal>
              <p className="lede">
                Mike studied law (LLB) and has spent his career in operational leadership and building digital products.
                He started Ratio to close the gap between knowing the law and using it: a tool that teaches the law
                properly, then makes you apply it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="muted founder-how">
                Ratio is built by Mike with AI assistance. Lessons are AI-drafted, then read by Mike and signed off
                by qualified lawyers before a single one ships.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a className="btn btn-ghost founder-cta" href={`mailto:${site.email}?subject=Hello%20Mike`} data-cursor="Write">
                Write to Mike <span className="arrow">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="road-h">
        <div className="wrap road-grid">
          <SectionHead n="03" eyebrow="Roadmap" id="road-h" title={<>One student, <em className="ox">first year to qualification.</em></>} />
          <Roadmap />
        </div>
      </section>

      <section className="section tight" aria-labelledby="model-h">
        <div className="wrap">
          <SectionHead n="04" eyebrow="The model" id="model-h" title={<>How Ratio <em className="ox">sustains itself.</em></>} />
          <div className="model">
            <Reveal className="model-item">
              <span className="mono ox">Students</span>
              <h3 className="h3">Free to start, Plus to go further.</h3>
              <p className="muted small">One full module free. Ratio Plus unlocks all six, unlimited duels and full profile drill-down.</p>
            </Reveal>
            <Reveal className="model-item" delay={0.08}>
              <span className="mono ox">Universities</span>
              <h3 className="h3">Per-student licences.</h3>
              <p className="muted small">Law schools unlock Plus for a cohort and gain a view of where application lags.</p>
            </Reveal>
            <Reveal className="model-item" delay={0.16}>
              <span className="mono ox">North star</span>
              <h3 className="h3">Delayed retention.</h3>
              <p className="muted small">Accuracy on items that return seven or more days after first learning them. Engagement and revenue come second.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
