"use client";
import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";
const KEY = "ratio-theme";

/** Runs before paint so there is no flash of the wrong theme. */
export const themeScript = `(function(){try{var m=localStorage.getItem('${KEY}');if(m==='light'||m==='dark'){document.documentElement.setAttribute('data-theme',m)}}catch(e){}document.documentElement.classList.add('js')})();`;

function apply(mode: Mode) {
  const el = document.documentElement;
  if (mode === "system") el.removeAttribute("data-theme");
  else el.setAttribute("data-theme", mode);
  try {
    if (mode === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, mode);
  } catch {}
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => {
    try {
      const m = localStorage.getItem(KEY);
      if (m === "light" || m === "dark") setMode(m);
    } catch {}
  }, []);

  const next: Record<Mode, Mode> = { system: "light", light: "dark", dark: "system" };
  const labels: Record<Mode, string> = { system: "Auto", light: "Light", dark: "Dark" };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => {
        const n = next[mode];
        setMode(n);
        apply(n);
      }}
      aria-label={`Theme: ${labels[mode]}. Switch to ${labels[next[mode]]}.`}
      data-cursor={labels[next[mode]]}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {mode === "system" && <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />}
        {mode === "dark" && <circle cx="12" cy="12" r="8.5" fill="currentColor" />}
      </svg>
      <span className="mono">{labels[mode]}</span>
    </button>
  );
}
