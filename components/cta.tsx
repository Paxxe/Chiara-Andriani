import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-cocoa px-8 py-16 text-center text-cream sm:px-16 sm:py-24">
          <div className="blob pointer-events-none absolute -top-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-clay/40 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-light">
              Vuoi iniziare un percorso insieme?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Ricevo in studio a {site.city} e online. Contattami per un primo colloquio conoscitivo.
            </p>
            <a
              href="/contatti"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cream py-4 pr-4 pl-7 text-ink transition-colors duration-300 hover:bg-white"
            >
              Contattami
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
