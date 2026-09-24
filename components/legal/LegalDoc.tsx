import { legal, type LegalKey } from "@/lib/legal";
import { Reveal } from "@/components/motion/Reveal";

const LABELS: Partial<Record<LegalKey, string>> = {
  company: "COMPANY NAME",
  companyNumber: "COMPANY NUMBER",
  registeredOffice: "REGISTERED OFFICE ADDRESS",
  privacyEmail: "PRIVACY EMAIL",
  supportEmail: "SUPPORT EMAIL",
  safetyEmail: "SAFETY EMAIL",
  postalAddress: "POSTAL ADDRESS",
  icoRegistration: "ICO REGISTRATION NUMBER",
  emailProvider: "EMAIL PROVIDER",
  effectiveDate: "EFFECTIVE DATE",
};

/** A fact from lib/legal.ts, or a highlighted placeholder if it hasn't been filled in. */
export function V({ k, link }: { k: LegalKey; link?: "mail" }) {
  const value = legal[k];
  if (value === null || value === undefined || value === "") {
    return <mark className="ph">[{LABELS[k] ?? String(k).toUpperCase()}]</mark>;
  }
  if (link === "mail") {
    return (
      <a className="link-u ox" href={`mailto:${value}`}>
        {String(value)}
      </a>
    );
  }
  return <>{String(value)}</>;
}

/** "Ratio" and the company behind it, e.g. "Ratio Learning Ltd (“Ratio”, “we”, “us”)". */
export function Who() {
  return (
    <>
      <V k="company" />, a company registered in {legal.jurisdictionOfIncorporation} with company number{" "}
      <V k="companyNumber" />, whose registered office is at <V k="registeredOffice" />
    </>
  );
}

export type TocItem = { id: string; title: string };

export function LegalDoc({
  eyebrow,
  title,
  version,
  toc,
  summary,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  version: string;
  toc: TocItem[];
  summary: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="ldoc">
      <div className="wrap">
        {!legal.ready && (
          <p className="draft-banner mono" role="note">
            Not yet in force · highlighted details to be completed before launch
          </p>
        )}
        <header className="ldoc-head">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          <p className="ldoc-meta mono">
            Version {version} · Effective <V k="effectiveDate" /> · Last reviewed {legal.lastReviewed}
          </p>
        </header>

        <Reveal className="ldoc-summary card">
          <p className="eyebrow">
            <span className="dot" /> The short version
          </p>
          {summary}
        </Reveal>

        <div className="ldoc-grid">
          <nav className="ldoc-toc" aria-label="Contents">
            <p className="eyebrow">Contents</p>
            <ol>
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="link-u">
                    <span className="mono ox">{String(i + 1).padStart(2, "0")}</span> {t.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="ldoc-body">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function Sec({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="lsec" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="lsec-h">
        <span className="mono ox">{String(n).padStart(2, "0")}</span> {title}
      </h2>
      {children}
    </section>
  );
}

export function LTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="ltable-wrap">
      <table className="ltable">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row">
                    {c}
                  </th>
                ) : (
                  <td key={j}>{c}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
