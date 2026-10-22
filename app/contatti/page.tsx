import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { Reveal, SplitReveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contatti — Psicologa a Bologna, via Toscana 64",
  description:
    "Contatta la Dott.ssa Chiara Andriani, psicologa e psicoterapeuta a Bologna (via Toscana 64), per fissare un primo colloquio conoscitivo in studio oppure online. Tel. 327 011 3153.",
  path: "/contatti",
});

export default function Contatti() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#efe4d5] pt-32 pb-24 sm:pt-44 sm:pb-32">
        <div className="blob pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#e2cbb2]/80 blur-3xl" />
        <div className="blob pointer-events-none absolute -bottom-20 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#f8f1e6]/90 blur-3xl [animation-delay:-7s]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-muted uppercase">
                <span className="h-px w-10 bg-clay" />
                Contatti
              </p>
            </Reveal>
            <SplitReveal
              as="h1"
              text="Contattami"
              delay={150}
              className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.98] font-light tracking-[-0.03em]"
            />
            <Reveal delay={400}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted sm:text-xl">
                Chiedere aiuto è già un primo passo. Scrivimi per qualsiasi domanda o per fissare un primo colloquio
                conoscitivo, in studio a {site.city} oppure online: ti risponderò il prima possibile.
              </p>
            </Reveal>

            <Reveal delay={550}>
              <dl className="mt-12 space-y-6 border-t border-ink/15 pt-8">
                <div>
                  <dt className="text-xs tracking-[0.25em] text-clay-deep uppercase">Telefono</dt>
                  <dd className="mt-1">
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-serif text-2xl hover:text-cocoa">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.25em] text-clay-deep uppercase">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-serif text-2xl break-all hover:text-cocoa">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.25em] text-clay-deep uppercase">Studio</dt>
                  <dd className="mt-1 font-serif text-2xl">{site.address}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={300} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-[2rem] bg-cream/80 p-8 shadow-[0_30px_80px_-40px_rgba(42,34,30,0.35)] backdrop-blur sm:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <Reveal className="mx-auto h-[26rem] max-w-7xl overflow-hidden rounded-[2rem]">
          <iframe
            title={`Mappa: ${site.address}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[0.7] sepia-[0.15]"
          />
        </Reveal>
      </section>
    </main>
  );
}
