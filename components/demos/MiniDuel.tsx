"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { duelQuestions, type DuelQ } from "@/lib/content";

type Who = "you" | "bot" | "none";
type RoundResult = { q: DuelQ; point: Who; youPick: string | null; botPick: string | null; youMs: number | null; reason: string };
type Phase = "intro" | "count" | "q" | "reveal" | "done";

const EASE = [0.22, 1, 0.36, 1] as const;

function answerText(q: DuelQ): string {
  return q.kind === "spot" ? q.correct : q.options[q.correct];
}
function choices(q: DuelQ): string[] {
  return q.kind === "spot" ? q.parts.filter((p): p is { span: string } => typeof p !== "string").map((p) => p.span) : q.options;
}

export default function MiniDuel() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [secs, setSecs] = useState(10);
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(3);
  const [left, setLeft] = useState(10);
  const [botLocked, setBotLocked] = useState(false);
  const [results, setResults] = useState<RoundResult[]>([]);
  const start = useRef(0);
  const botPlan = useRef<{ at: number; correct: boolean }>({ at: 5000, correct: true });
  const timers = useRef<number[]>([]);
  const settled = useRef(false);
  const q = duelQuestions[idx];

  const clear = useCallback(() => {
    for (const t of timers.current) window.clearTimeout(t);
    timers.current = [];
  }, []);
  useEffect(() => clear, [clear]);

  const score = (w: Who) => results.filter((r) => r.point === w).length;

  const settle = useCallback(
    (r: Omit<RoundResult, "q">) => {
      if (settled.current) return;
      settled.current = true;
      clear();
      setResults((rs) => [...rs, { q, ...r }]);
      setPhase("reveal");
    },
    [q, clear],
  );

  const begin = () => {
    setResults([]);
    setIdx(0);
    runCountdown(0);
  };

  const runCountdown = (i: number) => {
    setIdx(i);
    setPhase("count");
    setCount(3);
    for (const k of [1, 2]) timers.current.push(window.setTimeout(() => setCount(3 - k), k * 700));
    timers.current.push(window.setTimeout(() => startQuestion(i), 2100));
  };

  const startQuestion = (i: number) => {
    const qq = duelQuestions[i];
    settled.current = false;
    setBotLocked(false);
    setPhase("q");
    start.current = performance.now();
    setLeft(secs);
    // Sparring partner: labelled bot, mid difficulty band.
    const at = 2600 + Math.random() * (secs * 1000 * 0.6);
    const correct = Math.random() < 0.55;
    botPlan.current = { at, correct };
    timers.current.push(
      window.setTimeout(() => {
        setBotLocked(true);
        const opts = choices(qq);
        const pick = correct ? answerText(qq) : opts.find((o) => o !== answerText(qq))!;
        settleRef.current({
          point: correct ? "bot" : "you",
          youPick: null,
          botPick: pick,
          youMs: null,
          reason: correct ? "Sparring partner answered first, correctly." : "Sparring partner answered wrongly, so the point is yours.",
        });
      }, at),
    );
    timers.current.push(
      window.setTimeout(() => {
        settleRef.current({ point: "none", youPick: null, botPick: null, youMs: null, reason: "Time. Nobody scores." });
      }, secs * 1000),
    );
  };

  const settleRef = useRef(settle);
  settleRef.current = settle;

  // Countdown display for the timer ring.
  useEffect(() => {
    if (phase !== "q") return;
    let raf = 0;
    const tick = () => {
      const t = secs - (performance.now() - start.current) / 1000;
      setLeft(Math.max(0, t));
      if (t > 0) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, secs]);

  const answer = (pick: string) => {
    if (phase !== "q" || settled.current) return;
    const ms = Math.round(performance.now() - start.current);
    const ok = pick === answerText(q);
    settle({
      point: ok ? "you" : "bot",
      youPick: pick,
      botPick: null,
      youMs: ms,
      reason: ok ? `You locked in first, in ${(ms / 1000).toFixed(1)} s.` : "Wrong answer: the point goes to your opponent.",
    });
  };

  const next = () => {
    if (idx + 1 < duelQuestions.length) runCountdown(idx + 1);
    else setPhase("done");
  };

  const you = score("you");
  const bot = score("bot");
  const last = results[results.length - 1];
  const fastest = results.filter((r) => r.point === "you" && r.youMs).sort((a, b) => a.youMs! - b.youMs!)[0];
  const frac = left / secs;
  const hot = phase === "q" && left <= 3;

  return (
    <div className="arena moment" aria-live="polite">
      <div className="arena-bar">
        <div className="arena-p">
          <span className="arena-av" style={{ background: "#9B2A24" }}>
            Y
          </span>
          <div>
            <p className="arena-name">You</p>
            <p className="mono arena-sub">Practice · not rated</p>
          </div>
          <span className="arena-score">{you}</span>
        </div>
        <div className="arena-mid mono">
          {phase === "q" || phase === "reveal" ? `Round ${idx + 1} of 3` : "First-time practice duel"}
        </div>
        <div className="arena-p right">
          <span className="arena-score">{bot}</span>
          <div>
            <p className="arena-name">Sparring partner</p>
            <p className="mono arena-sub">{botLocked && phase === "q" ? "Locked in" : "Bot · labelled · not on the boards"}</p>
          </div>
          <span className="arena-av bot" aria-hidden>
            <svg viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 3" />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      <div className="arena-stage">
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div key="intro" className="arena-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: EASE }}>
              <p className="mono arena-eyebrow">Crime · Three rounds</p>
              <h3 className="arena-h">
                First correct answer takes the point. <em className="ox">A wrong one gives it away.</em>
              </h3>
              <ul className="arena-rules">
                <li>Fastest finger · Name the case · Spot the issue</li>
                <li>No answer before the timer ends: nobody scores</li>
              </ul>
              <div className="arena-time" role="radiogroup" aria-label="Time per question">
                <span className="mono">Time per question</span>
                {[10, 15, 20].map((s) => (
                  // biome-ignore lint/a11y/useSemanticElements: styled chips following the ARIA radio pattern.
                  <button key={s} type="button" role="radio" aria-checked={secs === s} className={`arena-tchip ${secs === s ? "on" : ""}`} onClick={() => setSecs(s)}>
                    {s} s{s > 10 ? " · extended" : ""}
                  </button>
                ))}
              </div>
              <button type="button" className="btn btn-ox" onClick={begin} data-cursor="Begin">
                Begin <span className="arrow">→</span>
              </button>
            </motion.div>
          )}

          {phase === "count" && (
            <motion.div key={`c${idx}`} className="arena-count" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="mono arena-eyebrow">{q.label}</p>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  className="arena-num"
                  initial={{ scale: 1.6, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}

          {(phase === "q" || phase === "reveal") && (
            <motion.div key={`q${idx}`} className="arena-q" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: EASE }}>
              <div className="arena-qtop">
                <p className="mono arena-eyebrow">{q.label}</p>
                <motion.svg
                  className={`ring ${hot ? "hot" : ""}`}
                  viewBox="0 0 60 60"
                  animate={hot ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                  transition={hot ? { duration: 0.5, repeat: Infinity } : {}}
                  aria-label={`${Math.ceil(left)} seconds left`}
                >
                  <circle cx="30" cy="30" r="25" fill="none" stroke="var(--rule)" strokeWidth="3" />
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke={hot ? "var(--ox)" : "var(--ink)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={157}
                    strokeDashoffset={157 * (1 - (phase === "q" ? frac : 0))}
                    transform="rotate(-90 30 30)"
                  />
                  <text x="30" y="35" textAnchor="middle" fontFamily="var(--mono)" fontSize="15" fill="var(--ink)">
                    {phase === "q" ? Math.ceil(left) : "·"}
                  </text>
                </motion.svg>
              </div>
              <p className="arena-prompt">{q.prompt}</p>

              {q.kind === "spot" ? (
                <p className="arena-spot">
                  {q.parts.map((p, i) =>
                    typeof p === "string" ? (
                      <span key={i}>{p}</span>
                    ) : (
                      <button
                        key={i}
                        type="button"
                        disabled={phase !== "q"}
                        className={`spot-span ${phase === "reveal" ? (p.span === q.correct ? "right" : last?.youPick === p.span ? "wrong" : "") : ""}`}
                        onClick={() => answer(p.span)}
                      >
                        {p.span}
                      </button>
                    ),
                  )}
                </p>
              ) : (
                <div className={`arena-grid ${q.kind === "case" ? "cases" : ""}`}>
                  {q.options.map((o, i) => {
                    const st =
                      phase === "reveal" ? (i === q.correct ? "right" : last?.youPick === o || last?.botPick === o ? "wrong" : "dim") : "";
                    return (
                      <button key={o} type="button" disabled={phase !== "q"} className={`arena-opt ${st}`} onClick={() => answer(o)}>
                        <span className="mono">{String.fromCharCode(65 + i)}</span>
                        <em className="case">
                          R <span className="v">v</span> {o.replace("R v ", "")}
                        </em>
                      </button>
                    );
                  })}
                </div>
              )}

              <AnimatePresence>
                {phase === "reveal" && last && (
                  <motion.div
                    className={`arena-verdict ${last.point}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div>
                      <p className="mono arena-eyebrow">
                        {last.point === "you" ? "Point to you" : last.point === "bot" ? "Point to sparring partner" : "No point"}
                      </p>
                      <p>{last.reason}</p>
                    </div>
                    {/* biome-ignore lint/a11y/noAutofocus: moves keyboard users straight to the next round. */}
                    <button type="button" className="btn btn-ink btn-sm" onClick={next} autoFocus>
                      {idx + 1 < duelQuestions.length ? "Next round" : "Enter judgment"} <span className="arrow">→</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div key="done" className="arena-done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="mono arena-eyebrow center">Judgment entered</p>
              <motion.div
                className="seal-win"
                initial={{ scale: 2.2, rotate: -25, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 }}
              >
                <span>R.</span>
              </motion.div>
              <h3 className="arena-h center">
                {you > bot ? (
                  <>
                    You won the <em className="ox">duel.</em>
                  </>
                ) : you < bot ? (
                  <>
                    Judgment for the <em className="ox">sparring partner.</em>
                  </>
                ) : (
                  <>
                    Honours <em className="ox">even.</em>
                  </>
                )}
              </h3>
              <p className="mono arena-final">
                {you} – {bot} · {fastest ? `Fastest point ${(fastest.youMs! / 1000).toFixed(1)} s` : "Practice · not rated"}
              </p>

              <div className="debrief">
                <p className="mono arena-eyebrow">Debrief</p>
                {results.map((r, i) => (
                  <div key={i} className="debrief-row">
                    <span className={`debrief-mark ${r.point === "you" ? "ok" : "no"}`}>{r.point === "you" ? "✓" : "✗"}</span>
                    <div>
                      <p className="debrief-a">
                        <span className="mono">{r.q.label} · </span>
                        {answerText(r.q)}
                      </p>
                      <p className="small muted">{r.q.why}</p>
                    </div>
                    <span className="mono debrief-rev">Revisit {r.q.revisit}</span>
                  </div>
                ))}
              </div>
              <div className="arena-actions">
                <button type="button" className="btn btn-ox" onClick={begin} data-cursor="Again">
                  Rematch <span className="arrow">↺</span>
                </button>
              </div>
              <p className="small muted center">Sample questions from Ratio’s Crime drafts, pending lawyer review.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
