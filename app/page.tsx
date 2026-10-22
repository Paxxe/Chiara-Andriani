import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { Parallax } from "@/components/parallax";
import { Reveal, SplitReveal } from "@/components/reveal";
import { ScrollWords } from "@/components/scroll-words";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Psicologa e Psicoterapeuta a Bologna | Dott.ssa Chiara Andriani",
  absoluteTitle: true,
  description:
    "Cerchi uno psicologo a Bologna? La Dott.ssa Chiara Andriani, psicologa e psicoterapeuta cognitivo-comportamentale, offre colloqui di sostegno e psicoterapia per ansia, attacchi di panico, depressione e disturbi dell'umore, in studio e online.",
  path: "/",
});

// TODO: risposte da far validare a Chiara
const faq = [
  {
    q: "Qual è la differenza tra psicologo e psicoterapeuta?",
    a: "Lo psicologo è laureato in Psicologia e iscritto all'Albo: può svolgere colloqui di sostegno, consulenza e valutazione. Lo psicoterapeuta ha conseguito in più una specializzazione quadriennale in psicoterapia, che gli consente di curare i disturbi psicologici. Sono sia psicologa sia psicoterapeuta cognitivo-comportamentale.",
  },
  {
    q: "Serve la prescrizione del medico per prenotare un colloquio?",
    a: "No, non serve alcuna prescrizione: puoi contattarmi direttamente per fissare un primo colloquio conoscitivo, nel mio studio di Bologna oppure online.",
  },
  {
    q: "Come si svolge il primo colloquio?",
    a: "Il primo incontro serve a conoscerci: mi racconti cosa ti ha portato a cercare uno psicologo e insieme valutiamo se e come impostare un percorso, nei tempi e nei modi adatti alle tue esigenze.",
  },
  {
    q: "Le sedute dallo psicologo sono detraibili?",
    a: "Sì, le prestazioni di psicologi e psicoterapeuti sono spese sanitarie detraibili nella dichiarazione dei redditi, se pagate con metodi tracciabili e con regolare fattura.",
  },
  {
    q: "La terapia online funziona come quella in studio?",
    a: "Gli interventi online seguono le stesse modalità e la stessa professionalità di quelli in presenza, e sono particolarmente indicati per chi, per ragioni di salute, non riesce a raggiungere lo studio.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const aree = [
  { title: "Ansia", text: "Preoccupazioni costanti, attacchi di panico, tensione che non lascia spazio alla serenità." },
  { title: "Depressione", text: "Tristezza persistente, perdita di energia e di interesse per ciò che prima dava piacere." },
  { title: "Disturbi dell'umore", text: "Oscillazioni emotive che rendono difficile la quotidianità e le relazioni." },
  { title: "Momenti di difficoltà", text: "Cambiamenti, perdite, crisi: fasi della vita in cui un sostegno può fare la differenza." },
  { title: "Disagi emotivi", text: "Emozioni difficili da riconoscere, esprimere o gestire nel proprio vissuto." },
  { title: "Crescita personale", text: "Un percorso per conoscersi meglio, rafforzare le proprie risorse e svilupparsi." },
];

const principi = [
  { title: "Lavoro di squadra", text: "Terapeuta e paziente collaborano attivamente verso obiettivi condivisi." },
  { title: "Massima disponibilità", text: "Un impegno reciproco, da parte mia e del paziente, lungo tutto il percorso." },
  { title: "Empatia", text: "Ascolto autentico e accoglienza, senza giudizio." },
  { title: "Professionalità", text: "Metodi efficaci e scientificamente fondati, nel rispetto della persona." },
];

export default function Home() {
  return (
    <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#efe4d5] pt-28 pb-20 sm:pt-36 lg:min-h-svh lg:pb-28">
          <div className="blob pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#e2cbb2]/80 blur-3xl" />
          <div className="blob pointer-events-none absolute -bottom-20 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#f8f1e6]/90 blur-3xl [animation-delay:-7s]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h1>
                <Reveal as="span" className="mb-8 flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
                  <span className="h-px w-10 bg-clay" />
                  Psicologa e Psicoterapeuta a {site.city}
                  <span className="sr-only"> — </span>
                </Reveal>
                <SplitReveal
                  as="span"
                  text="Chiara Andriani"
                  delay={150}
                  className="block font-serif text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95] font-light tracking-[-0.03em] [&_.split-word:last-of-type>span]:pr-[0.1em] [&_.split-word:last-of-type>span]:text-clay-deep [&_.split-word:last-of-type>span]:italic"
                />
              </h1>
              <Reveal delay={500}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                  {site.specialization}. Uno spazio sicuro in cui fermarsi, ascoltarsi e ritrovare il proprio{" "}
                  <em className="font-serif text-cocoa">equilibrio</em>.
                </p>
              </Reveal>
              <Reveal delay={700}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/contatti"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink py-4 pr-4 pl-7 text-cream transition-colors duration-300 hover:bg-cocoa"
                  >
                    Contattami
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/15 transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a href="#chi-sono" className="px-4 py-4 text-ink/80 underline decoration-clay underline-offset-8 hover:text-cocoa">
                    Scopri di più
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="relative lg:col-span-5">
              <Reveal variant="unveil" delay={300} className="overflow-hidden rounded-t-[999px] rounded-b-[2rem]">
                <Parallax speed={0.08} className="scale-110">
                  <Image
                    src="/images/studio-orizzontale.jpg"
                    alt="Colloquio psicologico nello studio della Dott.ssa Chiara Andriani a Bologna"
                    width={1636}
                    height={876}
                    priority
                    className="aspect-[4/5] w-full object-cover object-[30%_50%]"
                  />
                </Parallax>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CITAZIONE */}
        <section className="px-5 py-28 sm:px-8 sm:py-40">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <span className="font-serif text-7xl leading-none text-clay">“</span>
            </Reveal>
            <ScrollWords
              text="Senza emozione, è impossibile trasformare le tenebre in luce e l'apatia in movimento."
              className="font-serif text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.15] font-light tracking-[-0.015em] italic"
            />
            <Reveal delay={200}>
              <p className="mt-10 text-xs tracking-[0.3em] text-muted uppercase">Carl Gustav Jung</p>
            </Reveal>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="chi-sono" className="bg-sand/60 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Chi sono</p>
                </Reveal>
                <SplitReveal
                  text="Chi sono e di cosa mi occupo"
                  className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
                />
                <Reveal delay={300} className="mt-10 flex items-center gap-5">
                  <Image
                    src="/images/chiara.jpg"
                    alt="Dott.ssa Chiara Andriani"
                    width={234}
                    height={312}
                    className="h-24 w-24 rounded-full object-cover object-top ring-4 ring-cream"
                  />
                  <div>
                    <p className="font-serif text-xl">Dott.ssa {site.name}</p>
                    <p className="text-sm text-muted">{site.role}</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-ink/80 sm:text-xl lg:col-span-6 lg:col-start-7 lg:pt-16">
              <Reveal>
                <p>
                  Sono la Dott.ssa Chiara Andriani, psicologa e psicoterapeuta. Esercito la libera professione presso il
                  mio studio con sede a {site.city}.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p>
                  Offro colloqui di sostegno e terapia, e mi occupo in particolare di{" "}
                  <strong className="font-medium text-cocoa">ansia</strong>,{" "}
                  <strong className="font-medium text-cocoa">depressione</strong> e{" "}
                  <strong className="font-medium text-cocoa">disturbi dell&apos;umore</strong>.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Intervengo inoltre ad aiutare la persona nei momenti di{" "}
                  <strong className="font-medium text-cocoa">difficoltà</strong>,{" "}
                  <strong className="font-medium text-cocoa">disagi emotivi</strong> e{" "}
                  <strong className="font-medium text-cocoa">problemi di crescita e sviluppo personale</strong>.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  L&apos;obiettivo è recuperare il benessere psicofisico della persona, nei tempi e nei modi adeguati
                  alle specifiche necessità di ciascun paziente.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <a
                  href="/chi-sono"
                  className="group inline-flex items-center gap-3 rounded-full border border-cocoa/40 py-3 pr-3 pl-6 text-base text-cocoa transition-colors duration-300 hover:bg-cocoa hover:text-cream"
                >
                  Il mio percorso
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-cocoa/10 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>
              <Reveal delay={400} variant="unveil" className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/studio-orizzontale.jpg"
                  alt=""
                  width={1636}
                  height={876}
                  className="aspect-[16/10] w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* AREE DI INTERVENTO */}
        <section id="servizi" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <Reveal>
                  <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Servizi</p>
                </Reveal>
                <SplitReveal
                  text="Aree di intervento"
                  className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
                />
              </div>
              <Reveal delay={200}>
                <p className="max-w-md text-lg text-muted">
                  Colloqui di sostegno psicologico e percorsi individuali di psicoterapia cognitivo-comportamentale a{" "}
                  {site.city} e online.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {aree.map((area, i) => (
                <Reveal key={area.title} delay={(i % 3) * 120} className="h-full">
                  <article className="group h-full bg-cream p-8 transition-colors duration-500 hover:bg-white sm:p-10">
                    <p className="font-serif text-sm text-clay-deep">0{i + 1}</p>
                    <h3 className="mt-10 font-serif text-3xl font-light transition-colors duration-500 group-hover:text-cocoa">
                      {area.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{area.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 text-center">
              <a
                href="/servizi"
                className="group inline-flex items-center gap-3 rounded-full border border-cocoa/40 py-3 pr-3 pl-6 text-cocoa transition-colors duration-300 hover:bg-cocoa hover:text-cream"
              >
                Tutti i servizi
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cocoa/10 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* APPROCCIO */}
        <section className="relative overflow-hidden bg-cocoa px-5 py-24 text-cream sm:px-8 sm:py-32">
          <div className="blob pointer-events-none absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-clay/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="mb-6 text-xs tracking-[0.25em] text-clay uppercase">Il mio approccio</p>
            </Reveal>
            <SplitReveal
              text="I punti fondamentali di un percorso terapeutico"
              className="max-w-4xl font-serif text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.05] font-light tracking-[-0.02em]"
            />

            <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {principi.map((p, i) => (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="border-t border-cream/25 pt-8">
                    <p className="font-serif text-5xl font-light text-clay italic">{i + 1}</p>
                    <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-cream/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IN PRESENZA E ONLINE */}
        <section id="online" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <Reveal>
                <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Dove ricevo</p>
              </Reveal>
              <SplitReveal
                text="In studio oppure online"
                className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-light tracking-[-0.02em]"
              />
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-muted">
                  Sono disponibile a effettuare colloqui in presenza, nel mio studio di psicologia a {site.city}, e
                  online in videochiamata.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-[2rem] bg-sand/70 p-10 sm:p-12">
                  <p className="text-xs tracking-[0.25em] text-clay-deep uppercase">In presenza</p>
                  <h3 className="mt-6 font-serif text-4xl font-light">Studio a {site.city}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    Un ambiente accogliente e riservato, facilmente raggiungibile in {site.address}.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="h-full rounded-[2rem] bg-clay p-10 text-white sm:p-12">
                  <p className="text-xs tracking-[0.25em] text-white/80 uppercase">Consulenza online</p>
                  <h3 className="mt-6 font-serif text-4xl font-light">Ovunque tu sia</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/85">
                    Colloqui in videochiamata, con la stessa cura e riservatezza di una seduta in studio. Basta una
                    connessione e uno spazio tranquillo.
                  </p>
                  <a href="/consulenza-online" className="mt-8 inline-block text-white underline underline-offset-8">
                    Scopri come funziona →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DOMANDE FREQUENTI */}
        <section className="bg-sand/60 px-5 py-24 sm:px-8 sm:py-32">
          <JsonLd data={faqSchema} />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="mb-6 text-xs tracking-[0.25em] text-clay-deep uppercase">Domande frequenti</p>
              </Reveal>
              <SplitReveal
                text="Andare dallo psicologo a Bologna"
                className="font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.05] font-light tracking-[-0.02em]"
              />
            </div>
            <div className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-7 lg:col-start-6">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 60}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl sm:text-2xl [&::-webkit-details-marker]:hidden">
                      <h3>{item.q}</h3>
                      <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 text-lg transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-[2rem] bg-ink p-10 text-cream sm:p-12">
                <div>
                  <p className="text-xs tracking-[0.25em] text-clay uppercase">Contatti</p>
                  <h2 className="mt-6 font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.05] font-light">
                    Fai il primo passo.
                  </h2>
                  <p className="mt-4 text-cream/70">Scrivimi o chiamami per fissare un primo colloquio conoscitivo.</p>
                  <a
                    href="/contatti"
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cream py-3 pr-3 pl-6 text-ink transition-colors duration-300 hover:bg-white"
                  >
                    Scrivimi un messaggio
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink/10 transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
                <div className="mt-12 space-y-5">
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block font-serif text-2xl hover:text-clay">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="block font-serif text-2xl break-all hover:text-clay">
                    {site.email}
                  </a>
                  <div className="border-t border-cream/15 pt-5">
                    <p className="text-cream/70">{site.address}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-clay underline underline-offset-4"
                    >
                      Come arrivare →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="min-h-[24rem] overflow-hidden rounded-[2rem] lg:col-span-7">
              <iframe
                title={`Mappa: ${site.address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[24rem] w-full border-0 grayscale-[0.7] sepia-[0.15]"
              />
            </Reveal>
          </div>
        </section>
    </main>
  );
}
