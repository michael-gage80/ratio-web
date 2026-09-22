import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import DuelHero from "@/components/pages/DuelHero";
import MiniDuel from "@/components/demos/MiniDuel";
import SectionHead from "@/components/pages/SectionHead";
import LobbyCode from "@/components/pages/LobbyCode";
import { Reveal, Stagger, RevealItem } from "@/components/motion/Reveal";
import { rounds } from "@/lib/content";

export const metadata: Metadata = pageMeta(
  "Duel",
  "First to three, ten seconds a question. Ratio’s multiplayer duels for LLB students: four round types, labelled sparring partners and boards that count human wins only.",
  "/duel",
  "/og/duel.png",
);

const rules = [
  ["The first correct answer takes the point.", "Speed is measured on your device from the moment the question appears, then checked against the server’s own timestamps, so a slow connection doesn’t cost you."],
  ["A wrong answer gives the point away.", "Button-mashing never pays. If you are not sure, it can be worth letting the clock run."],
  ["Nobody answers correctly in time? Nobody scores.", "Ten seconds a question by default; fifteen or twenty in the extended-time pool."],
];

const modes = [
  { t: "Ranked", d: "Matchmaking within ±100 rating in your chosen module, widening every ten seconds. After a minute you are offered a sparring partner, labelled as one." },
  { t: "Async challenge", d: "Challenge a friend or a past opponent. They have 24 hours to play their half. Rating applies." },
  { t: "Friend lobby", d: "A six-character code with no look-alike characters, plus a share link. Expires in fifteen minutes. Chat is filtered before it is sent.", lobby: true },
  { t: "Sparring", d: "Bots in five difficulty bands, calibrated on real play. Always labelled. Rating moves; the boards don’t." },
  { t: "Extended time", d: "Fifteen or twenty seconds a question, matched only with other extended-time players. The equivalent of exam access arrangements, and never paywalled." },
];

const board = [
  ["1", "Zara K.", "Year 2", "14", "1,468"],
  ["2", "Omar S.", "Year 1", "12", "1,441"],
  ["3", "Priya N.", "Year 3", "11", "1,430"],
  ["…", "", "", "", ""],
  ["12", "Amara O. (you)", "Year 2", "7", "1,412"],
];

export default function DuelPage() {
  return (
    <>
      <DuelHero />

      <section id="play" className="section play" aria-labelledby="play-h">
        <div className="wrap">
          <SectionHead
            n="01"
            eyebrow="Play"
            id="play-h"
            title={
              <>
                The practice duel. <em className="ox">Three rounds.</em>
              </>
            }
            lede="This is the first-time tutorial from the app: a short practice match against a labelled sparring partner. Nothing is rated and nothing is stored."
          />
          <Reveal>
            <MiniDuel />
          </Reveal>
        </div>
      </section>

      <section className="section tight rules" aria-labelledby="rules-h">
        <div className="wrap rules-grid">
          <SectionHead n="02" eyebrow="Scoring" id="rules-h" title={<>Three rules. <em className="ox">No loopholes.</em></>} />
          <ol className="rules-list">
            {rules.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="rule-item">
                <span className="rule-n">{["i", "ii", "iii"][i]}</span>
                <div>
                  <h3 className="h3">{t}</h3>
                  <p className="muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tight moment" aria-labelledby="rounds-h">
        <div className="wrap">
          <SectionHead
            n="03"
            eyebrow="Rounds"
            id="rounds-h"
            title={<>Four round types, <em className="ox">so speed alone doesn’t win.</em></>}
          />
          <Stagger className="rounds" gap={0.1}>
            {rounds.map((r, i) => (
              <RevealItem key={r.t} className="round card spot" as="article">
                <span className="mono round-n">Round type {i + 1}</span>
                <h3 className="h3">{r.t}</h3>
                <p className="muted small">{r.d}</p>
                <span className="chip">{r.s}</span>
              </RevealItem>
            ))}
          </Stagger>
          <p className="small muted rating-note">
            Ratings use Glicko-2 for each student and module, starting at 1,200. Question difficulty is drawn from the
            lower of the two players’ bands. Duel answers update your skill scores, but duels are kept separate from your
            spaced-review queue.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="modes-h">
        <div className="wrap">
          <SectionHead n="04" eyebrow="Modes" id="modes-h" title={<>Play live, later, <em className="ox">or with friends.</em></>} />
          <Stagger className="modes" gap={0.08}>
            {modes.map((m) => (
              <RevealItem key={m.t} className={`mode card spot ${m.lobby ? "mode-lobby" : ""}`} as="article">
                <h3 className="h3">{m.t}</h3>
                <p className="muted small">{m.d}</p>
                {m.lobby && <LobbyCode />}
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section boards-sec" aria-labelledby="boards-h">
        <div className="wrap boards-grid">
          <div>
            <SectionHead
              n="05"
              eyebrow="Boards & streaks"
              id="boards-h"
              title={<>Competitive, <em className="ox">never cruel.</em></>}
              lede="Daily, weekly and monthly boards rank wins in human duels only. Filter by everyone, your university or friends. Your own row is always pinned, even outside the top hundred."
            />
            <ul className="humane">
              <li>Sparring-partner wins never count on the boards.</li>
              <li>Streaks are weekly, set by you, with an exam pause.</li>
              <li>No streak-lost screens. No guilt copy. Ever.</li>
            </ul>
          </div>
          <Reveal className="board card">
            <div className="board-tabs mono">
              <span className="on">Weekly</span>
              <span>Everyone</span>
              <span>My university</span>
              <span>Friends</span>
            </div>
            <div className="board-head mono">
              <span>#</span>
              <span>Name</span>
              <span>Wins</span>
              <span>Rating</span>
            </div>
            {board.map((r, i) =>
              r[1] ? (
                <div key={i} className={`board-row ${r[1].includes("you") ? "me" : ""}`}>
                  <span className="mono">{r[0]}</span>
                  <span>
                    {r[1]} <span className="mono muted board-y">{r[2]}</span>
                  </span>
                  <span className="mono">{r[3]}</span>
                  <span className="mono">{r[4]}</span>
                </div>
              ) : (
                <div key={i} className="board-gap mono">
                  ⋯
                </div>
              ),
            )}
            <p className="small muted board-note">Illustrative. Wins in human duels this week.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
