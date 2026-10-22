"use client";

import { useEffect, useRef, useState } from "react";

// Le parole si "accendono" una alla volta mentre la sezione attraversa lo schermo.
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - rect.top) / (start - end + rect.height * 0.5);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = text.split(" ");
  return (
    <p ref={ref} aria-label={text} className={className}>
      {words.map((word, i) => {
        const local = Math.min(1, Math.max(0, progress * words.length - i));
        return (
          <span
            key={i}
            aria-hidden
            className="transition-opacity duration-300"
            style={{ opacity: 0.18 + 0.82 * local }}
          >
            {word}
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </p>
  );
}
