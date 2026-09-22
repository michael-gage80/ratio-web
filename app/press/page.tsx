import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import SectionHead from "@/components/pages/SectionHead";
import { Reveal, Stagger, RevealItem } from "@/components/motion/Reveal";
import Tilt from "@/components/motion/Tilt";
import Copy from "@/components/pages/Copy";
import { Mark, Wordmark } from "@/components/Mark";
import { site, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "Press kit",
  "Ratio’s logo, app icons, colours, typography and boilerplate.",
  "/press",
  "/og/press.png",
);

const icons = [
  ["ink", "Ink", "Default"],
  ["parchment", "Parchment", ""],
  ["oxblood", "Oxblood", ""],
  ["chambers", "Chambers", ""],
  ["green", "Green", ""],
  ["gold", "Gold", ""],
];

const colours = [
  ["Ink", "#1D1B18", "Text, primary buttons, dark surfaces"],
  ["Parchment", "#F3F0E9", "Background"],
  ["Paper", "#FDFCF8", "Cards and reading surfaces"],
  ["Oxblood", "#9B2A24", "The one accent"],
  ["Verdigris", "#1C7147", "Correct and secure only"],
  ["Rule", "#D9D4CA", "Dividers"],
];

const boiler =
  "Ratio is a learning game for LLB students in England and Wales. It teaches the law in short, carefully designed lessons, then asks students to apply it to new facts. A profile of each student’s knowledge, understanding and application, shown with honest uncertainty bands, decides what they study next, and multiplayer duels make practice social. Lessons are AI-drafted and signed off by qualified lawyers. Ratio is coming soon to iPhone.";

export default function Press() {
  return (
    <>
      <PageHero
        eyebrow="Press kit"
        title={
          <>
            The mark, <em className="ox">in words.</em>
          </>
        }
        lede="Everything you need to write about Ratio. Please use the assets as they are: no stretching, recolouring, rotating, outlining or effects."
      >
        <div className="press-actions">
          <a className="btn btn-ox" href="/press/Ratio-icons.zip" download data-cursor="Save">
            Download all icons (.zip) <span className="arrow">↓</span>
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}?subject=Press%20enquiry`}>
            Press enquiries
          </a>
        </div>
      </PageHero>

      <section className="section tight" aria-labelledby="lock-h">
        <div className="wrap">
          <SectionHead n="01" eyebrow="Wordmark and lockups" id="lock-h" title={<>Newsreader Italic, <em className="ox">one round dot.</em></>} />
          <div className="lockups">
            <Reveal className="lockup card">
              <Wordmark className="lockup-wm" />
            </Reveal>
            <Reveal className="lockup card moment" delay={0.08}>
              <Wordmark className="lockup-wm" />
            </Reveal>
            <Reveal className="lockup card" delay={0.16}>
              <div className="lockup-h">
                <Mark tile size={72} />
                <Wordmark className="lockup-wm sm" />
              </div>
            </Reveal>
            <Reveal className="lockup card lockup-green" delay={0.24}>
              <div className="lockup-v">
                <img src="/press/ratio-gold-default.svg" alt="" width={84} height={84} />
                <Wordmark className="lockup-wm sm" />
              </div>
            </Reveal>
          </div>
          <p className="small muted press-rule">
            Clear space: half the icon’s height on every side. Minimum sizes: icon 16 px, wordmark 60 px wide. In print: icon
            5 mm, wordmark 18 mm.
          </p>
        </div>
      </section>

      <section className="section tight" aria-labelledby="icons-h">
        <div className="wrap">
          <SectionHead n="02" eyebrow="App icons" id="icons-h" title={<>Six colourways. <em className="ox">One glyph.</em></>} />
          <Stagger className="icons" gap={0.06}>
            {icons.map(([k, n, note]) => (
              <RevealItem key={k} className="icon-card" as="article">
                <Tilt max={14} radius={40}>
                  <img className="icon-img" src={`/press/ratio-${k}-default-1024.png`} alt={`Ratio app icon, ${n} colourway`} width={200} height={200} loading="lazy" />
                </Tilt>
                <p className="icon-name">
                  {n} {note && <span className="mono muted">· {note}</span>}
                </p>
                <p className="icon-dl mono">
                  <a className="link-u" href={`/press/ratio-${k}-default-1024.png`} download>
                    PNG
                  </a>{" "}
                  ·{" "}
                  <a className="link-u" href={`/press/ratio-${k}-default.svg`} download>
                    SVG
                  </a>
                </p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section tight" aria-labelledby="col-h">
        <div className="wrap">
          <SectionHead n="03" eyebrow="Colour" id="col-h" title={<>Paper, ink, <em className="ox">one accent.</em></>} />
          <Stagger className="swatches" gap={0.05}>
            {colours.map(([n, hex, use]) => (
              <RevealItem key={n} className="swatch" as="article">
                <div className="swatch-chip" style={{ background: hex }} />
                <div className="swatch-meta">
                  <p className="swatch-n">{n}</p>
                  <p className="mono small muted">{hex}</p>
                  <p className="small muted">{use}</p>
                  <Copy text={hex} label="Copy hex" />
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section tight" aria-labelledby="type-h">
        <div className="wrap">
          <SectionHead n="04" eyebrow="Typography" id="type-h" title={<>Two families, <em className="ox">strict roles.</em></>} />
          <div className="type-grid">
            <Reveal className="type-card card">
              <p className="mono muted small">Reading and headings</p>
              <p className="type-spec">Newsreader</p>
              <p className="type-sample">
                The jury is not entitled to find the necessary intention unless … <em className="ox">virtual certainty.</em>
              </p>
            </Reveal>
            <Reveal className="type-card card" delay={0.1}>
              <p className="mono muted small">Metadata, labels, citations, timers</p>
              <p className="type-spec mono">IBM Plex Mono</p>
              <p className="type-sample mono">[1999] 1 AC 82 · HL · 10 S</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="boil-h">
        <div className="wrap">
          <SectionHead n="05" eyebrow="Boilerplate" id="boil-h" title={<>About Ratio, <em className="ox">in one paragraph.</em></>} />
          <Reveal className="boiler card">
            <p>{boiler}</p>
            <Copy text={boiler} label="Copy paragraph" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
