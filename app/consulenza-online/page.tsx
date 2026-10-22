import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { Reveal, SplitReveal } from "@/components/reveal";
import { ScrollWords } from "@/components/scroll-words";

export const metadata: Metadata = {
  title: "Consulenza online",
  description:
    "Colloqui psicologici e psicoterapia online in videochiamata con la Dott.ssa Chiara Andriani, con le stesse modalità e la stessa professionalità degli incontri in studio.",
};

const passi = [
  { title: "Contattami", text: "Scrivimi o chiamami per concordare un primo colloquio." },
  { title: "Fissiamo l'incontro", text: "Scegliamo insieme giorno e orario della seduta." },
  { title: "Ci colleghiamo", text: "Ti invio il link per la videochiamata: serve solo uno spazio tranquillo." },
];

export default function ConsulenzaOnline() {
  return (
    <main>
      {/* INTRO */}
      <section className="relative overflow-hidden bg-[#efe4d5] pt-32 pb-20 sm:pt-44 sm:pb-28">
        <div className="blob pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#e2cbb2]/80 blur-3xl" />
        <div className="blob pointer-events-none absolute -bottom-20 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#f8f1e6]/90 blur-3xl [animation-delay:-7s]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
                <span className="h-px w-10 bg-clay" />
                Consulenza online
              </p>
            </Reveal>
            <SplitReveal
              as="h1"
              text="La terapia, ovunque tu sia"
              delay={150}
              className="font-serif text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em]"
            />
            <Reveal delay={500}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                I colloqui possono essere svolti anche in modalità online, in videochiamata.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300} variant="unveil" className="overflow-hidden rounded-[2rem] lg:col-span-5">
            <Image
              src="/images/studio-orizzontale.jpg"
              alt=""
              width={1636}
              height={876}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* STESSA PROFESSIONALITÀ */}
      <section className="px-5 py-28 sm:px-8 sm:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollWords
            text="Gli interventi online sono definiti dalle stesse modalità e da eguale professionalità di quelli svolti in presenza."
            className="font-serif text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.15] font-light tracking-[-0.015em]"
          />
        </div>
      </section>

      {/* PER CHI */}
      <section className="bg-sand/60 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Per chi è indicata</p>
            </Reveal>
            <SplitReveal
              text="Quando lo studio è difficile da raggiungere"
              className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
            />
            <Reveal delay={200}>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                La consulenza online è particolarmente indicata per le persone che, per ragioni di salute o di lavoro,
                non riescono a recarsi fisicamente nello studio del professionista.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <div className="rounded-[2rem] bg-clay p-10 text-white sm:p-12">
              <h3 className="font-serif text-4xl font-light">Ragioni di salute</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Per chi, per motivi di salute, non riesce a raggiungere fisicamente lo studio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Reveal>
              <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Come funziona</p>
            </Reveal>
            <SplitReveal
              text="Tre semplici passi"
              className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
            />
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {passi.map((step, i) => (
              <Reveal key={step.title} delay={i * 150}>
                <div className="border-t border-ink/15 pt-8">
                  <p className="font-serif text-sm text-clay-deep">0{i + 1}</p>
                  <h3 className="mt-6 font-serif text-3xl font-light">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
