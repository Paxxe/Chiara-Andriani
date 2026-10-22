"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "./use-in-view";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "fade" | "unveil";
  className?: string;
};

export function Reveal({ children, as: Tag = "div", delay = 0, variant = "fade", className = "" }: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  const style = { "--d": `${delay}ms` } as CSSProperties;

  // Il clip-path va su un figlio: su alcuni browser un elemento completamente
  // ritagliato non risulta mai "visibile" all'IntersectionObserver.
  if (variant === "unveil") {
    return (
      <Tag ref={ref} className={className}>
        <div className={`unveil h-full w-full ${inView ? "is-in" : ""}`} style={style}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

type SplitProps = {
  text: string;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export function SplitReveal({ text, as: Tag = "h2", delay = 0, className = "" }: SplitProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={`${inView ? "is-in" : ""} ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {words.map((word, i) => (
        <span key={i} className="split-word">
          <span style={{ "--i": i } as CSSProperties}>{word}</span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
