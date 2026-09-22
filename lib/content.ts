// Site copy and demo content.
// Legal demo items are adapted from Ratio's Crime lesson drafts (v0.1.0),
// which are pending sign-off by a qualified lawyer. Keep the "sample" label
// on every demo until reviewedBy is set in the source JSON.

export const references = [
  {
    id: 1,
    short: "Roediger & Karpicke (2006)",
    full: "Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.",
    doi: "10.1111/j.1467-9280.2006.01693.x",
  },
  {
    id: 2,
    short: "Dunlosky et al. (2013)",
    full: "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4–58.",
    doi: "10.1177/1529100612453266",
  },
  {
    id: 3,
    short: "Cepeda et al. (2006)",
    full: "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.",
    doi: "10.1037/0033-2909.132.3.354",
  },
  {
    id: 4,
    short: "Ye, Su & Cao (2022)",
    full: "Ye, J., Su, J., & Cao, Y. (2022). A stochastic shortest path algorithm for optimizing spaced repetition scheduling. Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 4381–4390. The open-source FSRS scheduler builds on this line of work.",
    doi: "10.1145/3534678.3539081",
  },
  {
    id: 5,
    short: "Rohrer & Taylor (2007)",
    full: "Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35(6), 481–498.",
    doi: "10.1007/s11251-007-9015-8",
  },
  {
    id: 6,
    short: "Kornell & Bjork (2008)",
    full: "Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the “enemy of induction”? Psychological Science, 19(6), 585–592.",
    doi: "10.1111/j.1467-9280.2008.02127.x",
  },
  {
    id: 7,
    short: "Sweller & Cooper (1985)",
    full: "Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. Cognition and Instruction, 2(1), 59–89.",
    doi: "10.1207/s1532690xci0201_3",
  },
  {
    id: 8,
    short: "Atkinson, Renkl & Merrill (2003)",
    full: "Atkinson, R. K., Renkl, A., & Merrill, M. M. (2003). Transitioning from studying examples to solving problems: Effects of self-explanation prompts and fading worked-out steps. Journal of Educational Psychology, 95(4), 774–783.",
    doi: "10.1037/0022-0663.95.4.774",
  },
  {
    id: 9,
    short: "Shute (2008)",
    full: "Shute, V. J. (2008). Focus on formative feedback. Review of Educational Research, 78(1), 153–189.",
    doi: "10.3102/0034654307313795",
  },
];

export const mechanics = [
  {
    key: "retrieval",
    n: "i",
    title: "Retrieval practice",
    line: "Recall comes before reveal. Always.",
    body: "Every card asks you to pull the rule out of memory before you see it. In the classic study, students who practised recalling a passage remembered more of it a week later than students who spent the same time re-reading, even though re-reading looked better five minutes afterwards.",
    refs: [1, 2],
    where: "Recall-first cards, tests, duels",
  },
  {
    key: "spacing",
    n: "ii",
    title: "Spaced repetition",
    line: "Items come back just as you are about to forget them.",
    body: "Spreading practice out beats cramming, and the best gap grows the longer you need to remember. Ratio schedules every item for every student with an FSRS-style scheduler, and folds what is due into your daily brief.",
    refs: [3, 4],
    where: "Due items woven into the daily brief",
  },
  {
    key: "interleaving",
    n: "iii",
    title: "Interleaving",
    line: "Mixed reviews, so you learn to tell similar rules apart.",
    body: "Practising problem types mixed together, rather than in blocks, helps learners choose the right approach on a later test, even though blocked practice feels easier at the time. Exams do not tell you which topic a question is from. Neither does Ratio.",
    refs: [5, 6],
    where: "Daily brief reviews, duels, the weekly quiz",
  },
  {
    key: "fading",
    n: "iv",
    title: "Worked examples, then fading",
    line: "A full model answer first. Then less and less help.",
    body: "Novices learn well from studying worked solutions, and gain more when those steps are removed one at a time until they work alone. Ratio’s IRAC builder starts with every slot filled and fades across four scaffold levels.",
    refs: [7, 8],
    where: "The Build step in lessons",
  },
  {
    key: "feedback",
    n: "v",
    title: "Explanatory feedback",
    line: "Every wrong answer shows the reasoning, and the trap it fell into.",
    body: "Feedback helps most when it is specific and explains why an answer is right or wrong, rather than just marking it. Each Ratio item carries its reasoning, and the most common wrong answer gets its own card: the trap.",
    refs: [9],
    where: "The trap card, lesson and duel debriefs",
  },
];

export const principles = [
  { t: "No guilt.", d: "No “you’re falling behind”, no streak-lost screens, no loss animations. Missing a day costs nothing." },
  { t: "Streaks count weeks, not days.", d: "You set a weekly target. Exam pause freezes it for up to three weeks a year." },
  { t: "No lives. No failure states.", d: "A wrong answer is the start of an explanation, not the end of a game." },
  { t: "Bots are always labelled.", d: "If you are playing a sparring partner, it says so. Wins against them never count on the boards." },
  { t: "Accessibility is never paywalled.", d: "Dyslexia-friendly type, extended duel time, reduce motion and full VoiceOver routes are free." },
  { t: "Every statement cites an authority.", d: "Lessons are signed off by qualified lawyers and show the date the law is stated at." },
  { t: "Honest about uncertainty.", d: "Your scores carry visible error bands. Your profile is a hypothesis, never a label." },
  { t: "Educational, not legal advice.", d: "Said at sign-up, in every lesson footer, and here." },
];

export const modules = [
  { key: "crime", title: "Criminal law", short: "Crime", cases: ["Woollin", "Pagett", "Miller"], blurb: "Intention, causation, homicide, property offences and defences." },
  { key: "contract", title: "Contract", short: "Contract", cases: ["Carlill", "Hadley v Baxendale"], blurb: "Formation, terms, misrepresentation, frustration and remedies." },
  { key: "tort", title: "Tort", short: "Tort", cases: ["Donoghue v Stevenson", "Caparo"], blurb: "Negligence, duty, breach, causation, occupiers and nuisance." },
  { key: "public", title: "Public law", short: "Public law", cases: ["Entick v Carrington", "Miller"], blurb: "Parliamentary sovereignty, the rule of law and judicial review." },
  { key: "land", title: "Land law", short: "Land law", cases: ["Street v Mountford"], blurb: "Estates, registration, co-ownership, leases and easements." },
  { key: "equity", title: "Equity & Trusts", short: "Equity", cases: ["Saunders v Vautier", "Knight v Knight"], blurb: "Certainties, formalities, trustees’ duties and remedies." },
];

export const ticker = [
  "R v Woollin [1999]",
  "Donoghue v Stevenson [1932]",
  "Carlill v Carbolic Smoke Ball Co [1893]",
  "Entick v Carrington (1765)",
  "Street v Mountford [1985]",
  "R v Nedrick [1986]",
  "Saunders v Vautier (1841)",
  "Hadley v Baxendale (1854)",
  "R v Pagett (1983)",
  "Caparo Industries plc v Dickman [1990]",
];

// ——— In-line game demos (Crime, pending review) ———

export const demoQuickCheck = {
  source: "Crime · Lesson 3 · Intention",
  prompt:
    "A defendant plants a bomb on a cargo plane purely to destroy the cargo for an insurance claim, knowing the crew will certainly die. Is this direct or oblique intent as to the crew’s deaths?",
  options: [
    "Direct intent: killing the crew was his purpose",
    "Oblique intent: not his purpose, but foreseen as virtually certain",
  ],
  correct: 1,
  right:
    "Right. His purpose was the insurance money; the deaths are a foreseen, not desired, side effect. The paradigm case for oblique intent.",
  wrong:
    "His actual purpose was the insurance payout, not anyone’s death. That makes this the paradigm oblique intent scenario: foresight of a virtually certain consequence of pursuing a different goal.",
};

export const demoThreshold = {
  source: "Crime · Lesson 3 · Intention",
  prompt:
    "Where death was not D’s aim, how likely must D have foreseen it to be before a jury is entitled to find intention?",
  stops: [
    { label: "Possible", note: "Foresight of a possibility is, at most, recklessness." },
    { label: "Probable", note: "Not enough. Under s 8 Criminal Justice Act 1967 a jury is not bound to infer intention just because a result was a natural and probable consequence." },
    { label: "Highly probable", note: "Still short. The House of Lords in Woollin treated a ‘substantial risk’ direction as a misdirection." },
    { label: "Virtually certain", note: "Right. Woollin: death or serious harm a virtual certainty (barring unforeseen intervention), and D appreciated that. Even then the jury is entitled, not required, to find intention." },
  ],
  correct: 3,
};

export const demoTap = {
  source: "Crime · Lesson 2 · Causation",
  prompt:
    "Tap the fact that keeps Pagett’s own act as an operating and substantial cause of death, despite an officer firing the fatal shot.",
  parts: [
    "Pagett ",
    { span: "fires at armed police officers" },
    " while ",
    { span: "holding his girlfriend in front of him" },
    ". The officers, facing gunfire, ",
    { span: "instinctively return fire" },
    " and one shot strikes and kills her. Pagett ",
    { span: "had not intended for her to be shot" },
    ".",
  ] as (string | { span: string })[],
  correct: "instinctively return fire",
  right:
    "Correct. The officers’ return of fire is a reasonable, foreseeable reaction to the danger Pagett created, which is exactly why his act, not theirs, remains the legal cause.",
  wrong:
    "Look at how the officers respond, not at Pagett’s intentions or his use of a shield. The chain survives because their return of fire is a foreseeable, near-instinctive reaction, not a free, independent choice.",
};

export const demoTrap = {
  source: "Crime · Lesson 3 · Intention",
  prompt:
    "Which case first introduced ‘virtual certainty’ as the key phrase, replacing Moloney’s ‘natural consequence’ formula?",
  options: ["R v Moloney", "R v Nedrick", "R v Woollin", "R v Matthews and Alleyne"],
  correct: 1,
  trapIndex: 2,
  trap:
    "Woollin is the case students remember best, so it is the tempting wrong answer. But Woollin approved and slightly amended Nedrick’s wording rather than inventing ‘virtual certainty’ itself. Nedrick coined the phrase; Woollin refined it.",
};

export const demoRecall = {
  source: "Crime · Lesson 3 · Intention",
  prompt: "Before you read on: define direct intent in your own words.",
  model: "Direct intent exists where the prohibited result is the defendant’s actual aim or purpose in acting.",
  keywords: ["aim", "purpose", "want", "desire", "goal"],
};

// ——— Practice duel (three rounds, as in the first-time tutorial) ———

export type DuelQ =
  | { kind: "fastest"; label: string; prompt: string; options: string[]; correct: number; why: string; revisit: string }
  | { kind: "case"; label: string; prompt: string; options: string[]; correct: number; why: string; revisit: string }
  | { kind: "spot"; label: string; prompt: string; parts: (string | { span: string })[]; correct: string; why: string; revisit: string };

export const duelQuestions: DuelQ[] = [
  {
    kind: "fastest",
    label: "Fastest finger",
    prompt: "Which case first introduced ‘virtual certainty’ as the test for oblique intent?",
    options: ["R v Moloney", "R v Nedrick", "R v Woollin", "R v Hancock"],
    correct: 1,
    why: "Nedrick (1986) coined ‘virtual certainty’. Woollin (1999) approved it, swapping ‘infer’ for ‘find’.",
    revisit: "Crime 3 · ¶2",
  },
  {
    kind: "case",
    label: "Name the case",
    prompt:
      "D shoots at armed police while using his girlfriend as a shield. Officers return fire and kill her. D’s act is still a legal cause of death.",
    options: ["R v Jordan", "R v Blaue", "R v Pagett", "R v Smith"],
    correct: 2,
    why: "Pagett: a reasonable, foreseeable reaction by the police did not break the chain of causation.",
    revisit: "Crime 2 · ¶2",
  },
  {
    kind: "spot",
    label: "Spot the issue",
    prompt: "Tap the phrase that would cost marks in an exam answered under current law.",
    parts: [
      "Applying ",
      { span: "R v Vickers and R v Cunningham" },
      ", D’s ",
      { span: "intention to cause GBH is sufficient mens rea" },
      ", so D is ",
      { span: "guilty of second-degree murder" },
      " and receives a ",
      { span: "mandatory life sentence" },
      ".",
    ],
    correct: "guilty of second-degree murder",
    why: "‘Second-degree murder’ is a Law Commission proposal that has not been enacted. Current law is Vickers and Cunningham, with mandatory life.",
    revisit: "Crime 6 · ¶5",
  },
];

export const rounds = [
  { t: "Fastest finger", s: "Knowledge", d: "Four options in a two-by-two grid." },
  { t: "Name the case", s: "Understanding", d: "Two lines of facts. Pick the authority." },
  { t: "Spot the issue", s: "Application", d: "Tap the legally relevant phrase." },
  { t: "Final round", s: "Mixed", d: "Played only if it reaches two all." },
];
