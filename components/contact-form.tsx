"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "peer w-full border-0 border-b border-ink/25 bg-transparent px-0 pt-7 pb-3 text-lg text-ink placeholder-transparent transition-colors focus:border-cocoa focus:ring-0 focus:outline-none";
const labelClass =
  "pointer-events-none absolute top-1 left-0 text-xs tracking-[0.18em] text-muted uppercase transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-lg peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-1 peer-focus:text-xs peer-focus:tracking-[0.18em] peer-focus:text-cocoa peer-focus:uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      console.error("NEXT_PUBLIC_WEB3FORMS_KEY non configurata");
      setStatus("error");
      return;
    }

    setStatus("sending");
    const data = new FormData(form);
    data.append("access_key", key);
    data.append("from_name", `Sito ${site.name}`);
    data.set("subject", `Nuovo messaggio dal sito: ${data.get("oggetto") || "senza oggetto"}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center py-10">
        <p className="font-serif text-4xl font-light text-cocoa">Grazie!</p>
        <p className="mt-4 max-w-md text-lg text-muted">
          Il tuo messaggio è stato inviato. Ti risponderò il prima possibile.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-cocoa underline underline-offset-8">
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative">
          <input id="nome" name="nome" type="text" required placeholder="Nome" autoComplete="name" className={inputClass} />
          <label htmlFor="nome" className={labelClass}>
            Nome *
          </label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
        </div>
      </div>
      <div className="relative">
        <input id="oggetto" name="oggetto" type="text" placeholder="Oggetto" className={inputClass} />
        <label htmlFor="oggetto" className={labelClass}>
          Oggetto
        </label>
      </div>
      <div className="relative">
        <textarea id="messaggio" name="messaggio" rows={5} placeholder="Messaggio" className={`${inputClass} resize-none`} />
        <label htmlFor="messaggio" className={labelClass}>
          Messaggio
        </label>
      </div>

      <label className="flex items-start gap-3 pt-2 text-sm leading-relaxed text-muted">
        <input type="checkbox" name="privacy" required className="mt-1 h-4 w-4 shrink-0 accent-cocoa" />
        <span>
          Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR), al solo fine di
          ricevere una risposta. *
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full bg-ink py-4 pr-4 pl-8 text-cream transition-colors duration-300 hover:bg-cocoa disabled:opacity-60"
        >
          {status === "sending" ? "Invio in corso…" : "Invia"}
          <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/15 transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-[#a03c2c]">
            Si è verificato un errore. Riprova oppure scrivi a{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
