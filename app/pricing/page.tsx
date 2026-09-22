import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/pages/PageHero";
import { Stagger, RevealItem, Reveal } from "@/components/motion/Reveal";
import { TLink } from "@/components/motion/Transition";

export const metadata: Metadata = pageMeta(
  "Pricing",
  "Free to start, Ratio Plus for everything, and per-student licences for universities. Prices announced at launch.",
  "/pricing",
  "/og/pricing.png",
);

const tiers = [
  {
    name: "Free",
    tag: "Free to start",
    lines: ["One full module of your choice", "Daily brief and spaced review in that module", "Three duels a day", "Headline profile scores", "News centre and weekly quiz"],
    cta: { href: "/#ambassadors", label: "Join as an ambassador" },
  },
  {
    name: "Ratio Plus",
    tag: "Price at launch",
    featured: true,
    lines: ["All six LLB modules", "Brief and spaced review across every module", "Unlimited duels", "Topic drill-down and trends in your profile", "Everything in Free"],
    cta: { href: "/duel#play", label: "Try a practice duel" },
  },
  {
    name: "University",
    tag: "Per student, per year",
    lines: ["Ratio Plus for every licensed student", "Cohort view (aggregates only)", "Custom assignments", "Single sign-on (planned)", "Pilot terms on request"],
    cta: { href: "/universities#pilot", label: "Talk to us" },
  },
];

const rows: [string, string, string][] = [
  ["Modules", "1 of your choice", "All 6"],
  ["Daily brief and spaced review", "Within your free module", "All modules"],
  ["Duels", "3 a day", "Unlimited"],
  ["Profile", "Headline scores", "Topic drill-down and trends"],
  ["News centre and weekly quiz", "Yes", "Yes"],
  ["Extended time and accessibility", "Yes", "Yes"],
];

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Free to start. <em className="ox">Plus</em> when you’re ready.
          </>
        }
        lede="Prices will be announced at launch. What won’t change: accessibility features are never behind the paywall, and there are no ads."
      />
      <section className="section tight">
        <div className="wrap">
          <Stagger className="tiers" gap={0.1}>
            {tiers.map((t) => (
              <RevealItem key={t.name} className={`tier card spot ${t.featured ? "tier-feat moment" : ""}`} as="article">
                <p className="mono tier-tag">{t.tag}</p>
                <h2 className="tier-name">
                  {t.name === "Ratio Plus" ? (
                    <>
                      Ratio <em className="ox">Plus</em>
                    </>
                  ) : (
                    t.name
                  )}
                </h2>
                <ul className="tier-list">
                  {t.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <TLink href={t.cta.href} className={`btn ${t.featured ? "btn-ox" : "btn-ghost"} tier-cta`}>
                  {t.cta.label} <span className="arrow">→</span>
                </TLink>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap">
          <Reveal>
            <table className="compare">
              <caption className="eyebrow">Free and Plus, side by side</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Free</th>
                  <th scope="col">Plus or licensed</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([a, b, c]) => (
                  <tr key={a}>
                    <th scope="row">{a}</th>
                    <td>{b}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  );
}
