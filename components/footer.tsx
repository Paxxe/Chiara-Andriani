import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 text-sm text-muted md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-ink">Dott.ssa {site.name}</p>
          <p className="mt-1">Psicologa e {site.specialization} a {site.city}</p>
        </div>

        <address className="not-italic">
          <p>{site.address}</p>
          <p className="mt-1">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cocoa">
              {site.phone}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="hover:text-cocoa">
              {site.email}
            </a>
          </p>
        </address>

        <nav aria-label="Pagine del sito" className="flex flex-col gap-1 md:items-end">
          <a href="/" className="hover:text-cocoa">
            Home
          </a>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-cocoa">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-2 border-t border-ink/10 pt-6 text-xs text-muted md:flex-row">
        <p>{site.albo}</p>
        <p>
          {site.piva} · © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
