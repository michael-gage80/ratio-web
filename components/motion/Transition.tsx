"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mark } from "@/components/Mark";

type Ctx = { go: (href: string) => void };
const TransitionCtx = createContext<Ctx>({ go: () => {} });

const EASE = [0.76, 0, 0.24, 1] as const;

/** Ink curtain that rises, stamps the mark, and lifts off the new page. */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const pending = useRef<string | null>(null);
  const reduce = useReducedMotion();

  const go = useCallback(
    (href: string) => {
      const target = href.split("#")[0] || "/";
      if (target === pathname) {
        router.push(href);
        return;
      }
      if (phase !== "idle") return;
      pending.current = target;
      setPhase("cover");
      window.setTimeout(() => router.push(href), reduce ? 150 : 650);
    },
    [pathname, phase, reduce, router],
  );

  useEffect(() => {
    if (phase === "cover" && pending.current === pathname) {
      pending.current = null;
      const t = window.setTimeout(() => setPhase("reveal"), 120);
      return () => window.clearTimeout(t);
    }
  }, [pathname, phase]);

  // Never leave the curtain down: lift it if navigation fails or lands on a different path.
  useEffect(() => {
    if (phase !== "cover") return;
    const t = window.setTimeout(() => {
      pending.current = null;
      setPhase("reveal");
    }, 4000);
    return () => window.clearTimeout(t);
  }, [phase]);

  return (
    <TransitionCtx.Provider value={{ go }}>
      {children}
      <AnimatePresence onExitComplete={() => setPhase("idle")}>
        {phase === "cover" && (
          <motion.div
            key="curtain"
            className="curtain"
            aria-hidden
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0.15 : 0.62, ease: EASE }}
          >
            <motion.div
              className="curtain-mark"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Mark size={64} glyph="#F3F0E9" dot="#E27B73" />
            </motion.div>
            <motion.div
              className="curtain-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionCtx.Provider>
  );
}

export function useTransitionNav() {
  return useContext(TransitionCtx);
}

export function TLink({
  href,
  children,
  className,
  onClick,
  ...rest
}: LinkProps & {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "data-cursor"?: string;
  "aria-current"?: "page" | undefined;
  "aria-label"?: string;
}) {
  const { go } = useTransitionNav();
  return (
    <Link
      href={href}
      className={className}
      {...rest}
      onClick={(e) => {
        onClick?.();
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (!href.startsWith("/")) return;
        e.preventDefault();
        go(href);
      }}
    >
      {children}
    </Link>
  );
}
