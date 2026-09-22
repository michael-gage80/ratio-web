"use client";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { mailto } from "@/lib/site";

export default function EnquiryForm() {
  const [f, setF] = useState({ name: "", role: "", inst: "", size: "", msg: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF((s) => ({ ...s, [k]: e.target.value }));
  const href = mailto(
    `University pilot: ${f.inst || "[institution]"}`,
    `Name: ${f.name}\nRole: ${f.role}\nInstitution: ${f.inst}\nApproximate LLB cohort size: ${f.size}\n\n${f.msg}`,
  );
  return (
    <Reveal className="card amb-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
        }}
      >
        <div className="field">
          <label htmlFor="u-name">Your name</label>
          <input id="u-name" required value={f.name} onChange={set("name")} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="u-role">Role</label>
          <input id="u-role" value={f.role} onChange={set("role")} placeholder="Module lead, head of school…" />
        </div>
        <div className="field">
          <label htmlFor="u-inst">Institution</label>
          <input id="u-inst" required value={f.inst} onChange={set("inst")} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="u-size">Approximate LLB cohort size</label>
          <input id="u-size" inputMode="numeric" value={f.size} onChange={set("size")} />
        </div>
        <div className="field">
          <label htmlFor="u-msg">Anything else (optional)</label>
          <textarea id="u-msg" rows={3} value={f.msg} onChange={set("msg")} />
        </div>
        <Magnetic>
          <button type="submit" className="btn btn-ox" data-cursor="Send">
            Write to us <span className="arrow">→</span>
          </button>
        </Magnetic>
        <p className="small muted form-note">Opens your email app with this filled in. Nothing is stored on this site.</p>
      </form>
    </Reveal>
  );
}
