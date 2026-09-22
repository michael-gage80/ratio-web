"use client";
import { useState } from "react";

export default function Copy({ text, label = "Copy", className = "" }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={`copy mono ${className}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          window.setTimeout(() => setDone(false), 1400);
        } catch {}
      }}
      aria-live="polite"
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}
