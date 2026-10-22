"use client";

import { useEffect, useRef, useState } from "react";

// Diventa true la prima volta che l'elemento entra nel viewport.
export function useInView<T extends Element>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Su mobile l'animazione parte appena l'elemento entra nello schermo
    const margin = window.matchMedia("(max-width: 767px)").matches ? "0px" : rootMargin;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
