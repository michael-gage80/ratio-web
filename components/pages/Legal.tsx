export default function Legal({ title, sections }: { title: string; sections: [string, string][] }) {
  return (
    <section className="legal">
      <div className="wrap legal-wrap">
        <p className="draft-banner mono">Draft · not final · not yet in force</p>
        <h1 className="h1">{title}</h1>
        <p className="lede">
          This page is a placeholder outline. It will be replaced by the final text, reviewed by a qualified lawyer, before
          Ratio launches or collects any personal data.
        </p>
        <ol className="legal-list">
          {sections.map(([h, b]) => (
            <li key={h}>
              <h2 className="h3">{h}</h2>
              <p className="muted">{b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
