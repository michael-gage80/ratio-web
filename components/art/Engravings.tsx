"use client";
import { useId } from "react";

/** Engraving-style line art. Stroke = currentColor, hatch fills via pattern. */

function Hatch({ id, angle = 45, gap = 4 }: { id: string; angle?: number; gap?: number }) {
  return (
    <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle})`}>
      <line x1="0" y1="0" x2="0" y2={gap} stroke="currentColor" strokeWidth="0.8" />
    </pattern>
  );
}

export function ScalesSeal({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <Hatch id={`h${id}`} />
      </defs>
      <circle cx="100" cy="100" r="96" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="var(--ink-2)" strokeWidth="1" strokeDasharray="1.5 5" />
      <g stroke="var(--ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="42" r="4.5" />
        <rect x="97" y="46" width="6" height="74" fill={`url(#h${id})`} />
        <path d="M52 64 Q100 52 148 64" />
        <path d="M58 64 L40 104 M58 64 L76 104" />
        <path d="M142 64 L124 104 M142 64 L160 104" />
        <path d="M36 104 Q58 124 80 104 Z" fill={`url(#h${id})`} />
        <path d="M120 104 Q142 124 164 104 Z" fill={`url(#h${id})`} />
        <path d="M84 120 L116 120 L124 132 L76 132 Z" fill={`url(#h${id})`} />
        <path d="M66 132 L134 132" />
      </g>
      <text x="100" y="166" textAnchor="middle" fontFamily="var(--serif)" fontStyle="italic" fontSize="30" fill="var(--ox)">
        v
      </text>
    </svg>
  );
}

export function ModuleArt({ kind, className }: { kind: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  const H = `url(#h${id})`;
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.4,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      <defs>
        <Hatch id={`h${id}`} gap={3.5} />
      </defs>
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeOpacity=".25" strokeDasharray="1 4" />
      <g {...common}>
        {kind === "crime" && (
          <>
            {/* a chain whose middle link has parted: causation */}
            <ellipse cx="44" cy="80" rx="22" ry="13" transform="rotate(-20 44 80)" />
            <ellipse cx="44" cy="80" rx="13" ry="5" transform="rotate(-20 44 80)" fill={H} />
            <path d="M66 70 q10 -8 16 2" />
            <path d="M86 92 q8 8 16 -2" />
            <ellipse cx="116" cy="80" rx="22" ry="13" transform="rotate(-20 116 80)" />
            <ellipse cx="116" cy="80" rx="13" ry="5" transform="rotate(-20 116 80)" fill={H} />
            <path d="M78 60 l4 -8 M84 62 l8 -5 M76 100 l-4 8 M82 102 l-2 9" strokeOpacity=".6" />
          </>
        )}
        {kind === "contract" && (
          <>
            <path d="M44 32 H104 L118 46 V128 H44 Z" />
            <path d="M104 32 V46 H118" />
            <path d="M54 52 H96 M54 62 H106 M54 72 H100 M54 82 H90" strokeOpacity=".7" />
            <circle cx="98" cy="108" r="17" fill={H} />
            <circle cx="98" cy="108" r="10" fill="var(--paper)" />
            <path d="M92 124 l-6 16 l8 -5 l4 7 l2 -16" />
            <path d="M54 110 q8 -10 14 0 t14 0" />
          </>
        )}
        {kind === "tort" && (
          <>
            {/* an opaque ginger-beer bottle, with a small spiral nearby */}
            <path d="M72 28 H88 V44 Q88 52 96 60 Q104 68 104 82 V128 Q104 134 98 134 H62 Q56 134 56 128 V82 Q56 68 64 60 Q72 52 72 44 Z" />
            <path d="M58 90 H102 V124 H58 Z" fill={H} />
            <path d="M70 28 H90" strokeWidth="3" />
            <path d="M122 124 a6 6 0 1 1 -6 -6 a3.5 3.5 0 1 1 3.5 3.5" />
            <path d="M110 128 h18" strokeOpacity=".6" />
          </>
        )}
        {kind === "public" && (
          <>
            {/* portcullis */}
            <path d="M42 40 H118" strokeWidth="2" />
            <path d="M50 40 V112 M66 40 V120 M80 40 V124 M94 40 V120 M110 40 V112" />
            <path d="M46 56 H114 M46 76 H114 M46 96 H114" />
            <path d="M50 112 l-3 8 M66 120 l-3 8 M80 124 l0 9 M94 120 l3 8 M110 112 l3 8" />
            <path d="M42 40 q-10 -14 -2 -24 M118 40 q10 -14 2 -24" strokeOpacity=".6" />
            <rect x="46" y="44" width="68" height="8" fill={H} stroke="none" />
          </>
        )}
        {kind === "land" && (
          <>
            <path d="M52 78 L80 54 L108 78 V110 H52 Z" />
            <path d="M72 110 V90 H88 V110" />
            <path d="M58 78 H102" strokeOpacity=".5" />
            <path d="M26 118 H134" />
            <path d="M26 118 L40 132 H120 L134 118" fill={H} />
            <path d="M30 104 L30 118 M130 104 L130 118" strokeDasharray="2 3" />
            <path d="M22 100 H138" strokeDasharray="2 4" strokeOpacity=".6" />
          </>
        )}
        {kind === "equity" && (
          <>
            {/* crossed keys */}
            <g transform="rotate(45 80 80)">
              <circle cx="80" cy="36" r="12" />
              <circle cx="80" cy="36" r="5" fill={H} />
              <path d="M80 48 V128 M80 112 h10 M80 120 h7" />
            </g>
            <g transform="rotate(-45 80 80)">
              <circle cx="80" cy="36" r="12" />
              <circle cx="80" cy="36" r="5" fill={H} />
              <path d="M80 48 V128 M80 112 h-10 M80 120 h-7" />
            </g>
          </>
        )}
      </g>
    </svg>
  );
}
