"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// No ambiguous characters (0/O, 1/I).
const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const rand = () => Array.from({ length: 6 }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join("");

export default function LobbyCode() {
  const [code, setCode] = useState("KQ7M4P");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setCode(rand()), 3200);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="lobby" role="img" aria-label="Example lobby code">
      {code.split("").map((c, i) => (
        <span key={i} className="lobby-cell mono">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={c + i + code}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {c}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </div>
  );
}
