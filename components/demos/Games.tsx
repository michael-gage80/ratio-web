"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { demoQuickCheck, demoThreshold, demoTap, demoTrap, demoRecall } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Unfurl({ show, children, tone = "ink" }: { show: boolean; children: React.ReactNode; tone?: "ok" | "no" | "ink" | "trap" }) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          style={{ overflow: "hidden" }}
        >
          <div className={`fb fb-${tone}`} role="status">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Mark({ ok }: { ok: boolean }) {
  return (
    <span className={`fb-mark ${ok ? "ok" : "no"}`} aria-hidden>
      {ok ? "✓" : "✗"}
    </span>
  );
}

function Reset({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="g-reset mono" onClick={onClick}>
      Try again ↺
    </button>
  );
}

export function RecallFirst() {
  const [text, setText] = useState("");
  const [shown, setShown] = useState(false);
  const hits = demoRecall.keywords.filter((k) => text.toLowerCase().includes(k));
  return (
    <div className="g">
      <p className="g-q">{demoRecall.prompt}</p>
      <label className="sr-only" htmlFor="recall">
        Your answer
      </label>
      <textarea
        id="recall"
        className="g-input"
        rows={3}
        placeholder="In your own words…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={shown}
      />
      <div className="g-actions">
        <button type="button" className="btn btn-ink btn-sm" onClick={() => setShown(true)} disabled={shown}>
          Reveal
        </button>
        {!shown && (
          <button type="button" className="g-skip" onClick={() => setShown(true)}>
            I can’t recall — show me
          </button>
        )}
        {shown && <Reset onClick={() => { setShown(false); setText(""); }} />}
      </div>
      <Unfurl show={shown} tone={hits.length ? "ok" : "ink"}>
        <p className="fb-h mono">Model answer</p>
        <p>{demoRecall.model}</p>
        {text.trim() && (
          <p className="fb-sub">
            {hits.length
              ? `You named the key idea (${hits.join(", ")}). That attempt to recall is what makes it stick.`
              : "Compare your words with the model. The attempt itself strengthens the memory, even when it misses."}
          </p>
        )}
      </Unfurl>
    </div>
  );
}

export function QuickCheck() {
  const [pick, setPick] = useState<number | null>(null);
  const ok = pick === demoQuickCheck.correct;
  return (
    <div className="g">
      <p className="g-q">{demoQuickCheck.prompt}</p>
      <div className="g-opts two">
        {demoQuickCheck.options.map((o, i) => {
          const state = pick === null ? "" : i === demoQuickCheck.correct ? "right" : pick === i ? "wrong" : "dim";
          return (
            <button key={o} type="button" className={`g-opt ${state}`} onClick={() => pick === null && setPick(i)} aria-pressed={pick === i}>
              <span className="g-key mono">{state === "right" ? "✓" : state === "wrong" ? "✗" : String.fromCharCode(65 + i)}</span>
              {o}
            </button>
          );
        })}
      </div>
      <Unfurl show={pick !== null} tone={ok ? "ok" : "no"}>
        <p className="fb-h mono">
          <Mark ok={ok} /> {ok ? "Secure" : "Revisit"}
        </p>
        <p>{ok ? demoQuickCheck.right : demoQuickCheck.wrong}</p>
      </Unfurl>
      {pick !== null && <Reset onClick={() => setPick(null)} />}
    </div>
  );
}

export function Threshold() {
  const [v, setV] = useState(0);
  const [locked, setLocked] = useState(false);
  const stop = demoThreshold.stops[v];
  const ok = v === demoThreshold.correct;
  return (
    <div className="g">
      <p className="g-q">{demoThreshold.prompt}</p>
      <div className="thr">
        <div className="thr-scale" aria-hidden>
          {demoThreshold.stops.map((s, i) => (
            <span key={s.label} className={i <= v ? "on" : ""} style={{ left: `${(i / 3) * 100}%` }} />
          ))}
          <motion.i className="thr-fill" animate={{ width: `${(v / 3) * 100}%` }} transition={{ type: "spring", stiffness: 260, damping: 30 }} />
        </div>
        <input
          type="range"
          min={0}
          max={3}
          step={1}
          value={v}
          disabled={locked}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label="Degree of foresight"
          aria-valuetext={stop.label}
          className="thr-input"
        />
        <div className="thr-labels mono">
          {demoThreshold.stops.map((s, i) => (
            <span key={s.label} className={i === v ? "on" : ""}>
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <div className="g-actions">
        <button type="button" className="btn btn-ox btn-sm" onClick={() => setLocked(true)} disabled={locked}>
          Lock it in
        </button>
        {locked && <Reset onClick={() => { setLocked(false); setV(0); }} />}
      </div>
      <Unfurl show={locked} tone={ok ? "ok" : "no"}>
        <p className="fb-h mono">
          <Mark ok={ok} /> {stop.label}
        </p>
        <p>{stop.note}</p>
      </Unfurl>
    </div>
  );
}

export function TapTheFact() {
  const [pick, setPick] = useState<string | null>(null);
  const ok = pick === demoTap.correct;
  return (
    <div className="g">
      <p className="g-q">{demoTap.prompt}</p>
      <p className="tap-text">
        {demoTap.parts.map((p, i) =>
          typeof p === "string" ? (
            <span key={i}>{p}</span>
          ) : (
            <button
              key={i}
              type="button"
              className={`tap ${pick === null ? "" : p.span === demoTap.correct ? "right" : pick === p.span ? "wrong" : "dim"}`}
              onClick={() => pick === null && setPick(p.span)}
            >
              {p.span}
            </button>
          ),
        )}
      </p>
      <Unfurl show={pick !== null} tone={ok ? "ok" : "no"}>
        <p className="fb-h mono">
          <Mark ok={ok} /> {ok ? "Secure" : "Revisit"}
        </p>
        <p>{ok ? demoTap.right : demoTap.wrong}</p>
      </Unfurl>
      {pick !== null && <Reset onClick={() => setPick(null)} />}
    </div>
  );
}

export function TrapMCQ() {
  const [pick, setPick] = useState<number | null>(null);
  const ok = pick === demoTrap.correct;
  return (
    <div className="g">
      <p className="g-q">{demoTrap.prompt}</p>
      <div className="g-opts">
        {demoTrap.options.map((o, i) => {
          const state = pick === null ? "" : i === demoTrap.correct ? "right" : pick === i ? "wrong" : "dim";
          return (
            <button key={o} type="button" className={`g-opt ${state}`} onClick={() => pick === null && setPick(i)} aria-pressed={pick === i}>
              <span className="g-key mono">{state === "right" ? "✓" : state === "wrong" ? "✗" : String.fromCharCode(65 + i)}</span>
              <span>
                <em className="case">
                  R <span className="v">v</span> {o.replace("R v ", "")}
                </em>
              </span>
            </button>
          );
        })}
      </div>
      <Unfurl show={pick !== null} tone="trap">
        <p className="fb-h mono">
          <Mark ok={ok} /> {ok ? "Secure — and here is the trap you avoided" : "The trap"}
        </p>
        <p>{demoTrap.trap}</p>
      </Unfurl>
      {pick !== null && <Reset onClick={() => setPick(null)} />}
    </div>
  );
}
