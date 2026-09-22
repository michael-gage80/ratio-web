import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/pages/PageHero";
import SectionHead from "@/components/pages/SectionHead";
import Pipeline from "@/components/pages/Pipeline";
import Cohort from "@/components/pages/Cohort";
import EnquiryForm from "@/components/pages/EnquiryForm";
import { Reveal, Stagger, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = pageMeta(
  "For universities",
  "Per-student licences that unlock Ratio Plus for your LLB cohort, with a cohort view of where students’ application skills need work.",
  "/universities",
  "/og/universities.png",
);

const offer = [
  { t: "Ratio Plus for every student", d: "All six modules, unlimited duels and full profile drill-down, unlocked by a per-student annual licence." },
  { t: "A cohort view", d: "Where your students are strong and where application lags, by topic and skill. Aggregates only; minimum cohort of ten." },
  { t: "Custom assignments", d: "Set lessons from the library to line up with your teaching weeks." },
  { t: "Single sign-on", d: "Microsoft Entra and Shibboleth/SAML are planned. Until then, a university code plus a university email check." },
];

const safeguards = [
  ["Consent first", "A student’s individual data reaches their university only if the student opts in."],
  ["UK hosting", "Data will be hosted in Google Cloud’s London region wherever each service allows."],
  ["18+ only", "Ratio is for students aged 18 and over. Free-text chat exists only in private friend lobbies, filtered before sending."],
  ["Accessible", "Designed to meet WCAG 2.2 AA, with a dyslexia-friendly mode and extended duel time. None of it is paywalled."],
];

export default function Universities() {
  return (
    <>
      <PageHero
        eyebrow="For law schools"
        title={
          <>
            Know where your cohort <em className="ox">applies</em> the law, and where it only recalls it.
          </>
        }
        lede="Ratio gives your students short, rigorous lessons and honest feedback, and gives you a view of where application is lagging, topic by topic."
      />

      <section className="section tight" aria-labelledby="offer-h">
        <div className="wrap">
          <SectionHead n="01" eyebrow="The licence" id="offer-h" title={<>What a licence <em className="ox">includes.</em></>} />
          <Stagger className="offer" gap={0.08}>
            {offer.map((o, i) => (
              <RevealItem key={o.t} className="offer-item" as="article">
                <span className="mono ox">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{o.t}</h3>
                <p className="muted">{o.d}</p>
              </RevealItem>
            ))}
          </Stagger>
          <p className="small muted phase-note">
            The consumer app comes first. The cohort view, custom assignments and single sign-on are the next phase, and we
            are looking for a small number of law schools to pilot them with us.
          </p>
        </div>
      </section>

      <section className="section tight" aria-label="Cohort view concept">
        <div className="wrap">
          <Reveal>
            <Cohort />
          </Reveal>
        </div>
      </section>

      <section className="section moment" aria-labelledby="acc-h">
        <div className="wrap">
          <SectionHead
            n="02"
            eyebrow="Accuracy"
            id="acc-h"
            title={<>AI-drafted. <em className="ox">Lawyer-signed.</em></>}
            lede="We are open about how lessons are made. Drafting is fast; review is the critical path, and it is never skipped."
          />
          <Pipeline />
          <div className="acc-rules">
            <Reveal>
              <p className="h3">Paraphrased and cited.</p>
              <p className="muted small">Judgments and law reports are paraphrased and cited, never reproduced.</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="h3">Contested is taught as contested.</p>
              <p className="muted small">Whether Woollin is a rule of evidence or of substantive law is presented as unresolved.</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="h3">When the law moves, so do we.</p>
              <p className="muted small">Affected lessons are flagged, and students who studied them get a short update in their brief.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="safe-h">
        <div className="wrap">
          <SectionHead n="03" eyebrow="Safeguards" id="safe-h" title={<>Built for <em className="ox">procurement</em>, too.</>} />
          <Stagger className="safe" gap={0.08}>
            {safeguards.map(([t, d]) => (
              <RevealItem key={t} className="safe-item card spot" as="article">
                <h3 className="h3">{t}</h3>
                <p className="muted small">{d}</p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="pilot" className="section amb" aria-labelledby="pilot-h">
        <div className="wrap amb-grid">
          <SectionHead
            n="04"
            eyebrow="Pilot"
            id="pilot-h"
            title={<>Pilot Ratio with <em className="ox">your cohort.</em></>}
            lede="Priced per student, per year, and cheaper at volume. Tell us about your cohort and we will share pilot terms."
          />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
