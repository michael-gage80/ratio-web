// App screens rebuilt in HTML from Ratio's static designs (illustrative content).

export function TodayScreen() {
  return (
    <div className="scr scr-today">
      <div className="scr-head">
        <div>
          <p className="scr-meta">Tue 22 Sep · Week 1 of term</p>
          <h3 className="scr-h1">
            Good morning,
            <br />
            Amara.
          </h3>
        </div>
        <span className="scr-av" style={{ background: "var(--ox-fill)" }}>
          A
        </span>
      </div>

      <div className="scr-card scr-brief">
        <div className="scr-row">
          <span className="scr-meta">Brief · 18 min</span>
          <span className="scr-chip">Crime · Mens rea</span>
        </div>
        <p className="scr-title">
          The line between <em className="ox">aim</em> and <em className="ox">foresight.</em>
        </p>
        <p className="scr-body">Chosen because application is your growth edge in Crime.</p>
        <div className="scr-steps">
          <span className="done">Read ✓</span>
          <span className="cur">Drill</span>
          <span>Build</span>
          <span>Review</span>
        </div>
        <div className="scr-btn">Resume: the drill →</div>
        <div className="scr-tutor">
          <span className="scr-tutor-r">R.</span>
          <div>
            <p className="scr-meta">From your tutor</p>
            <p className="scr-small">
              You keep treating <em>foresight</em> as intention. Today’s drill separates the two.
            </p>
          </div>
        </div>
      </div>

      <div className="scr-duo">
        <div className="scr-card">
          <p className="scr-meta">This week</p>
          <p className="scr-mid">3 of 4 days</p>
          <div className="scr-week">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className={i < 3 ? "on" : i === 3 ? "today" : ""} />
            ))}
          </div>
          <p className="scr-note">One more day keeps the week.</p>
        </div>
        <div className="scr-card">
          <p className="scr-meta">Duel · Tort</p>
          <p className="scr-mid">Find an opponent</p>
          <div className="scr-waiting">
            <span className="scr-av sm" style={{ background: "var(--green)" }}>
              Z
            </span>
            <span className="scr-av sm" style={{ background: "var(--ochre)", marginLeft: -10 }}>
              O
            </span>
            <span className="scr-meta ox">2 waiting</span>
          </div>
        </div>
      </div>
      <TabBar active={0} />
    </div>
  );
}

export function TabBar({ active = 0 }: { active?: number }) {
  const tabs = ["Today", "Pathway", "Duel", "Boards", "Me"];
  return (
    <div className="scr-tabs">
      {tabs.map((t, i) => (
        <span key={t} className={i === active ? "on" : ""}>
          <i />
          {t}
        </span>
      ))}
    </div>
  );
}

export function OverviewScreen() {
  return (
    <div className="scr scr-overview">
      <p className="scr-meta">Crime · Lesson 3 · 18 min</p>
      <h3 className="scr-h1 big">
        Meaning to, and <em className="ox">knowing</em> you will.
      </h3>
      <p className="scr-body">Direct and oblique intention, and the unsettled status of Woollin.</p>
      <div className="scr-rule" />
      <p className="scr-meta">Objectives</p>
      <ol className="scr-obj">
        <li>Tell direct intent from oblique intent</li>
        <li>Trace Moloney → Nedrick → Woollin</li>
        <li>Apply the virtual certainty test to new facts</li>
      </ol>
      <p className="scr-meta">Leading authorities</p>
      <ul className="scr-auth">
        <li>
          <span className="case">
            R <span className="v">v</span> Moloney
          </span>
          <span className="scr-mono">1985</span>
        </li>
        <li>
          <span className="case">
            R <span className="v">v</span> Nedrick
          </span>
          <span className="scr-mono">1986</span>
        </li>
        <li>
          <span className="case">
            R <span className="v">v</span> Woollin
          </span>
          <span className="scr-mono">1999</span>
        </li>
      </ul>
      <div className="scr-why">
        <p className="scr-meta">Why this matters to you</p>
        <p className="scr-small">You can already recite Woollin. This lesson is about the fight over what it decided.</p>
      </div>
      <div className="scr-btn ink">Begin the lecture →</div>
      <p className="scr-foot">Law stated as at 22 Sep 2026 · Sample</p>
    </div>
  );
}

export function LectureScreen() {
  return (
    <div className="scr scr-lecture">
      <div className="scr-progress">
        <span className="on" />
        <span />
        <span />
        <span />
        <em>Part 1 of 4</em>
      </div>
      <p className="scr-meta">Part I</p>
      <p className="scr-h2">The facts</p>
      <p className="scr-body ink">
        Most murders involve direct intention. <em className="ox">Woollin</em> is about the rarer case, where the result was
        never the aim at all.
      </p>
      <div className="scr-card scr-case">
        <div className="scr-row">
          <span className="scr-chip">Case</span>
          <span className="scr-mono">[1999] 1 AC 82 · HL</span>
        </div>
        <p className="scr-casename">
          R <span className="v">v</span> Woollin
        </p>
        <div className="scr-ratio">
          <p className="scr-meta">Ratio</p>
          <p className="scr-small">
            Where death or serious injury was not D’s aim, the jury may find intention only if it was a virtual certainty
            and D appreciated that.
          </p>
        </div>
      </div>
      <div className="scr-card scr-recall">
        <p className="scr-meta">
          <span className="scr-reddot" /> Recall first
        </p>
        <p className="scr-q">Before you read on: what must the prosecution prove for murder’s mens rea?</p>
        <div className="scr-input">In your own words…</div>
        <div className="scr-btn muted">Reveal</div>
      </div>
      <div className="scr-locked">🔒 Part II · The test — answer to continue</div>
    </div>
  );
}

export function ExamScreen() {
  return (
    <div className="scr scr-exam">
      <div className="scr-row">
        <p className="scr-meta">Tests · 2 of 4</p>
        <p className="scr-meta">Knowledge</p>
      </div>
      <p className="scr-q big">
        Which case first introduced ‘virtual certainty’, replacing Moloney’s ‘natural consequence’?
      </p>
      <div className="scr-opts">
        <div className="scr-opt">
          <span>A</span>R v Moloney
        </div>
        <div className="scr-opt right">
          <span>✓</span>R v Nedrick
        </div>
        <div className="scr-opt wrong">
          <span>✗</span>R v Woollin
        </div>
        <div className="scr-opt">
          <span>D</span>R v Matthews and Alleyne
        </div>
      </div>
      <div className="scr-trap">
        <p className="scr-meta">The trap</p>
        <p className="scr-small">
          Woollin is the case you remember best, so it tempts. But Nedrick coined the phrase; Woollin refined it.
        </p>
      </div>
    </div>
  );
}

export function DebriefScreen() {
  const rows: [string, boolean][] = [
    ["Oblique intent: the two limbs", true],
    ["Purpose, certainty, appreciation", true],
    ["“Infer” or “find”?", false],
    ["Apply the rule: Sasha’s fire", true],
  ];
  return (
    <div className="scr scr-debrief">
      <div className="scr-row top">
        <div>
          <p className="scr-meta">Lesson complete · Crime</p>
          <p className="scr-h1">
            Secure on
            <br />
            <em className="ox">3 of 4.</em>
          </p>
        </div>
        <svg className="scr-ringpct" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--sunk)" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--green)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="264"
            strokeDashoffset="66"
            transform="rotate(-90 50 50)"
          />
          <text x="50" y="54" textAnchor="middle" fontSize="20" fill="var(--ink)" fontFamily="var(--serif)">
            75%
          </text>
        </svg>
      </div>
      <div className="scr-card scr-list">
        {rows.map(([t, ok], i) => (
          <div key={t} className="scr-li">
            <span className="scr-mono">0{i + 1}</span>
            <span className="t">{t}</span>
            <span className={ok ? "ok" : "no"}>{ok ? "✓ Secure" : "✗ Revisit"}</span>
          </div>
        ))}
      </div>
      <div className="scr-card scr-band">
        <p className="scr-meta">What changed in your profile</p>
        <div className="scr-row">
          <span className="scr-mid">Application</span>
          <span className="scr-mid">52 → 56</span>
        </div>
        <div className="scr-bandbar">
          <span className="was" />
          <span className="now" />
          <i />
        </div>
        <p className="scr-note">Band narrowed 12 → 10: firmer as well as higher.</p>
      </div>
      <div className="scr-duo">
        <div className="scr-btn ghost">Review my miss</div>
        <div className="scr-btn ink">Back to Today</div>
      </div>
    </div>
  );
}
