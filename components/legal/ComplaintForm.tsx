"use client";
import { useState } from "react";
import { legal } from "@/lib/legal";
import { site } from "@/lib/site";

const TYPES = {
  privacy: { label: "A complaint about how we use personal data", to: "privacy" },
  rights: { label: "A data protection request (access, deletion, correction…)", to: "privacy" },
  safety: { label: "A report or complaint about content or another user", to: "safety" },
  appeal: { label: "An appeal against a moderation decision about me", to: "safety" },
  other: { label: "Something else", to: "support" },
} as const;

type TypeKey = keyof typeof TYPES;

function inbox(to: "privacy" | "safety" | "support") {
  const e = to === "privacy" ? legal.privacyEmail : to === "safety" ? legal.safetyEmail ?? legal.supportEmail : legal.supportEmail;
  return e ?? site.email;
}

/** An electronic complaint form (DPA 2018 s.164A; OSA 2023 s.21). Opens the user's email app. */
export default function ComplaintForm({ initial = "privacy" }: { initial?: TypeKey }) {
  const [f, setF] = useState({ type: initial as TypeKey, name: "", account: "", details: "" });
  const set =
    (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }));
  const t = TYPES[f.type];
  const href = `mailto:${inbox(t.to)}?subject=${encodeURIComponent(`Ratio: ${t.label}`)}&body=${encodeURIComponent(
    `Type: ${t.label}\nName: ${f.name}\nEmail on my Ratio account (if different): ${f.account}\n\nDetails:\n${f.details}\n`,
  )}`;

  return (
    <form
      className="form card lform"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <div className="field">
        <label htmlFor="c-type">What is this about?</label>
        <select id="c-type" value={f.type} onChange={set("type")}>
          {(Object.keys(TYPES) as TypeKey[]).map((k) => (
            <option key={k} value={k}>
              {TYPES[k].label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-name">Your name</label>
        <input id="c-name" required value={f.name} onChange={set("name")} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="c-account">Email on your Ratio account, if different</label>
        <input id="c-account" type="email" value={f.account} onChange={set("account")} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="c-details">What happened, and what would you like us to do?</label>
        <textarea id="c-details" required rows={4} value={f.details} onChange={set("details")} />
      </div>
      <button type="submit" className="btn btn-ox" data-cursor="Send">
        Send <span className="arrow">→</span>
      </button>
      <p className="small muted form-note">
        This opens your email app with the form filled in. You can also write to us directly, or use the report and help
        options inside the app.
      </p>
    </form>
  );
}
