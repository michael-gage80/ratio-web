"use client";
import { useState } from "react";
import SplitReveal from "@/components/motion/SplitReveal";
import { Reveal } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { mailto } from "@/lib/site";

export default function Ambassadors() {
  const [f, setF] = useState({ name: "", uni: "", year: "Year 1", why: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const href = mailto(
    `Founding ambassador: ${f.name || "[name]"}, ${f.uni || "[law school]"}`,
    `Name: ${f.name}\nLaw school: ${f.uni}\nYear: ${f.year}\n\nWhy I’d like to be a founding ambassador:\n${f.why}\n\n(I confirm I am 18 or over.)`,
  );

  return (
    <section id="ambassadors" className="section amb" aria-labelledby="amb-h">
      <div className="wrap amb-grid">
        <div>
          <p className="eyebrow">
            <span className="num">09</span> Founding ambassadors
          </p>
          <SplitReveal as="h2" id="amb-h" className="h1">
            Bring Ratio to <em className="ox">your law school.</em>
          </SplitReveal>
          <p className="lede">
            We are looking for students at ten to fifteen law schools to help shape Ratio before launch: test early
            builds, recruit the beta, and tell us where we are wrong.
          </p>
          <ul className="amb-list">
            <li>First access to the beta</li>
            <li>Ratio Plus while you are an ambassador</li>
            <li>A direct line to the founder</li>
          </ul>
        </div>

        <Reveal className="card amb-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = href;
            }}
          >
            <div className="field">
              <label htmlFor="a-name">First name and surname initial</label>
              <input id="a-name" required value={f.name} onChange={set("name")} placeholder="Amara O." autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="a-uni">Law school</label>
              <input id="a-uni" required value={f.uni} onChange={set("uni")} placeholder="Your university" />
            </div>
            <div className="field">
              <label htmlFor="a-year">Year</label>
              <select id="a-year" value={f.year} onChange={set("year")}>
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Starting in September</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="a-why">Why you (optional)</label>
              <textarea id="a-why" rows={3} value={f.why} onChange={set("why")} placeholder="A line or two" />
            </div>
            <Magnetic>
              <button type="submit" className="btn btn-ox" data-cursor="Send">
                Write to us <span className="arrow">→</span>
              </button>
            </Magnetic>
            <p className="small muted form-note">
              Opens your email app with this filled in. Nothing is stored on this site. Ambassadors must be 18 or over.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
