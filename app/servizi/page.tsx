import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Cta } from "@/components/cta";
import { Reveal, SplitReveal } from "@/components/reveal";
import { ScrollWords } from "@/components/scroll-words";

export const metadata: Metadata = pageMeta({
  title: "Psicoterapia a Bologna: ansia, panico, depressione",
  description:
    "Psicoterapia cognitivo-comportamentale a Bologna e online: disturbi d'ansia, attacchi di panico e agorafobia, disturbo ossessivo-compulsivo, depressione, disturbi alimentari, stress e gestione delle emozioni.",
  path: "/servizi",
});

const abc = [
  { letter: "A", title: "Evento", text: "Ciò che accade, fuori o dentro di noi." },
  { letter: "B", title: "Pensiero", text: "Il modo in cui interpretiamo ciò che accade." },
  { letter: "C", title: "Emozione", text: "Ciò che proviamo, come conseguenza del pensiero." },
];

const ambiti = [
  "Disturbi d'Ansia",
  "Disturbo da Attacchi di Panico e Agorafobia",
  "Disturbi Ossessivo-Compulsivi",
  "Depressione e Disturbi dell'Umore",
  "Disturbi del Comportamento Alimentare",
  "Stress",
  "Disturbi dell'Adattamento",
  "Gestione delle Emozioni",
];

export default function Servizi() {
  return (
    <main>
      {/* INTRO */}
      <section className="relative overflow-hidden bg-[#efe4d5] pt-32 pb-20 sm:pt-44 sm:pb-28">
        <div className="blob pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#e2cbb2]/80 blur-3xl" />
        <div className="blob pointer-events-none absolute -bottom-20 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#f8f1e6]/90 blur-3xl [animation-delay:-7s]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
              <span className="h-px w-10 bg-clay" />
              Cosa offro
            </p>
          </Reveal>
          <SplitReveal
            as="h1"
            text="Psicoterapia cognitivo-comportamentale a Bologna"
            delay={150}
            className="max-w-5xl font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] font-light tracking-[-0.03em]"
          />
          <Reveal delay={500}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              I miei interventi seguono l&apos;approccio Cognitivo-Comportamentale, che si basa sul fatto che esistono
              eventi (A), pensieri (B) ed emozioni (C).
            </p>
          </Reveal>
        </div>
      </section>

      {/* MODELLO ABC */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 md:grid-cols-3">
            {abc.map((step, i) => (
              <Reveal key={step.letter} delay={i * 150} className="h-full">
                <div className={`relative h-full p-10 sm:p-12 ${step.letter === "B" ? "bg-clay text-white" : "bg-cream"}`}>
                  <p
                    className={`font-serif text-8xl leading-none font-light italic ${
                      step.letter === "B" ? "text-white/90" : "text-clay"
                    }`}
                  >
                    {step.letter}
                  </p>
                  <h3 className="mt-8 font-serif text-3xl">{step.title}</h3>
                  <p className={`mt-3 text-lg leading-relaxed ${step.letter === "B" ? "text-white/85" : "text-muted"}`}>
                    {step.text}
                  </p>
                  {i < abc.length - 1 && (
                    <span className="absolute top-1/2 -right-5 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-ink text-cream md:grid">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-28 max-w-4xl text-center">
            <Reveal>
              <p className="mb-8 text-lg text-muted">
                Solitamente le emozioni vengono attribuite agli eventi, interni o esterni, che accadono. Secondo il mio
                approccio, invece:
              </p>
            </Reveal>
            <ScrollWords
              text="sono i pensieri all'origine delle emozioni."
              className="font-serif text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[1.08] font-light tracking-[-0.02em] italic"
            />
          </div>
        </div>
      </section>

      {/* OBIETTIVO */}
      <section className="bg-sand/60 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Il lavoro in terapia</p>
            </Reveal>
            <SplitReveal
              text="Dai pensieri alle emozioni adattive"
              className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
            />
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-ink/80 sm:text-xl lg:col-span-6 lg:col-start-7 lg:pt-10">
            <Reveal>
              <p>
                Attraverso la terapia si va quindi a{" "}
                <strong className="font-medium text-cocoa">
                  lavorare sui <em className="font-serif">pensieri</em>
                </strong>
                , che quando disfunzionali definiscono emozioni disfunzionali.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                L&apos;obiettivo è quindi quello di tornare a provare{" "}
                <strong className="font-medium text-cocoa">
                  <em className="font-serif">emozioni adattive</em>
                </strong>{" "}
                e che permettano un buon funzionamento della persona.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AMBITI */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Ambiti di intervento</p>
              </Reveal>
              <SplitReveal
                text="Di cosa mi occupo"
                className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
              />
            </div>
            <Reveal delay={200}>
              <p className="max-w-md text-lg text-muted">
                Effettuo interventi per problematiche legate ai seguenti ambiti, in studio a Bologna e online.
              </p>
            </Reveal>
          </div>

          <ul className="border-t border-ink/15">
            {ambiti.map((ambito, i) => (
              <li key={ambito}>
                <Reveal delay={(i % 4) * 60}>
                  <div className="group flex items-baseline gap-6 border-b border-ink/15 py-7 transition-colors duration-500 hover:bg-sand/50 sm:gap-10 sm:px-4">
                    <span className="w-8 shrink-0 font-serif text-sm text-clay-deep">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-[clamp(1.5rem,3.2vw,2.4rem)] leading-tight font-light transition-transform duration-500 group-hover:translate-x-2 group-hover:text-cocoa">
                      {ambito}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </main>
  );
}
