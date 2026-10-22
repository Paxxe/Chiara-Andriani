import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
        <div>
          <p className="font-serif text-lg text-ink">Dott.ssa {site.name}</p>
          <p>{site.specialization}</p>
        </div>
        <div className="md:text-right">
          <p>{site.albo}</p>
          <p>
            {site.piva} · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
