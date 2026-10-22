import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { Reveal, SplitReveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Il percorso della Dott.ssa Chiara Andriani: laurea in Neuropsicologia, specializzazione in Psicoterapia presso Studi Cognitivi, oggi libera professionista a Bologna.",
};

const percorso = [
  {
    when: "2016",
    title: "Laurea in Neuropsicologia",
    text: "Laurea in Neuropsicologia e Riabilitazione Neuropsicologica. Iscrizione all'Ordine degli Psicologi dell'Emilia-Romagna (n. 8939).",
  },
  {
    when: "Formazione",
    title: "Tirocini a Parma e Bologna",
    text: "Tirocini formativi presso l'Ospedale Psichiatrico Maria Luigia (PR), l'Ospedale Villa Baruzziana (BO) e l'AUSL di Bologna.",
  },
  {
    when: "Specializzazione",
    title: "Psicoterapia cognitivo-comportamentale",
    text: "Specializzazione in Psicoterapia presso la scuola Studi Cognitivi, con sede a Milano.",
  },
  {
    when: "Oggi",
    title: "Il mio studio a Bologna",
    text: "Svolgo la mia attività di Psicologa-Psicoterapeuta come libera professionista presso il mio studio, con sede a Bologna, e online.",
  },
];

export default function ChiSono() {
  return (
    <main>
      {/* INTRO */}
      <section className="relative overflow-hidden bg-[#efe4d5] pt-32 pb-20 sm:pt-44 sm:pb-28">
        <div className="blob pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#e2cbb2]/80 blur-3xl" />
        <div className="blob pointer-events-none absolute -bottom-20 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#f8f1e6]/90 blur-3xl [animation-delay:-7s]" />

        <div className="relative mx-auto grid max-w-7xl items-end gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
                <span className="h-px w-10 bg-clay" />
                Chi sono
              </p>
            </Reveal>
            <SplitReveal
              as="h1"
              text="Ascoltare, comprendere, accompagnare."
              delay={150}
              className="font-serif text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em]"
            />
            <Reveal delay={500}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Sono la Dott.ssa {site.name}, psicologa e psicoterapeuta cognitivo-comportamentale. Attualmente svolgo
                la mia attività come libera professionista presso il mio studio, con sede a {site.city}.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300} variant="unveil" className="mx-auto w-full max-w-xs overflow-hidden rounded-t-[999px] rounded-b-[2rem] lg:col-span-4 lg:ml-auto">
            <Image
              src="/images/chiara.jpg"
              alt={`Dott.ssa ${site.name}`}
              width={234}
              height={312}
              priority
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </Reveal>
        </div>
      </section>

      {/* NUMERI */}
      <section className="border-y border-ink/10 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { value: "2016", label: "Laurea in Neuropsicologia" },
            { value: "n. 8939", label: "Ordine Psicologi Emilia-Romagna" },
            { value: "CBT", label: "Psicoterapia cognitivo-comportamentale" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120} className="py-10 sm:px-8 sm:first:pl-0">
              <p className="font-serif text-5xl font-light text-clay-deep">{item.value}</p>
              <p className="mt-3 text-sm tracking-wide text-muted">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PERCORSO */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Formazione ed esperienza</p>
              </Reveal>
              <SplitReveal
                text="Il mio percorso"
                className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
              />
            </div>
          </div>

          <ol className="relative lg:col-span-7 lg:col-start-6">
            <Reveal variant="unveil" className="absolute top-2 bottom-2 left-[7px] w-px bg-clay/40">
              <span />
            </Reveal>
            {percorso.map((step, i) => (
              <li key={step.title} className="relative pb-14 pl-12 last:pb-0">
                <Reveal delay={i * 80}>
                  <span className="absolute top-2 left-0 h-[15px] w-[15px] rounded-full border-2 border-clay bg-cream" />
                  <p className="text-xs tracking-[0.25em] text-clay-deep uppercase">{step.when}</p>
                  <h3 className="mt-3 font-serif text-3xl font-light">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Cta />
    </main>
  );
}
