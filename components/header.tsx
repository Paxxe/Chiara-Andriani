"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-cream/80 shadow-[0_1px_0_rgba(42,34,30,0.06)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group leading-none" onClick={() => setOpen(false)}>
          <span className="block font-serif text-xl tracking-tight">{site.name}</span>
          <span className="mt-1 block text-[11px] tracking-[0.22em] text-muted uppercase">{site.role}</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[15px] text-ink/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-cocoa after:transition-transform after:duration-500 hover:text-cocoa hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contatti"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition-colors duration-300 hover:bg-cocoa"
          >
            Prenota un colloquio
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-18 bottom-0 bg-cream px-5 pt-10 transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-serif text-4xl transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
