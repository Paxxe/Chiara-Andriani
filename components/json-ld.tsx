import { site } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

// Scheda dello studio per la ricerca locale ("psicologo Bologna").
export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${site.url}/#studio`,
      name: `Dott.ssa ${site.name} — Psicologa e Psicoterapeuta a ${site.city}`,
      description:
        "Studio di psicologia e psicoterapia cognitivo-comportamentale a Bologna. Colloqui di sostegno psicologico e psicoterapia per ansia, attacchi di panico, depressione, disturbi dell'umore, in presenza e online.",
      url: site.url,
      image: `${site.url}/opengraph-image`,
      telephone: site.phone.replace(/\s/g, ""),
      email: site.email,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        postalCode: site.postalCode,
        addressLocality: site.city,
        addressRegion: "BO",
        addressCountry: "IT",
      },
      areaServed: [
        { "@type": "City", name: "Bologna" },
        { "@type": "Country", name: "Italia" },
      ],
      hasMap: `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}`,
      knowsAbout: [
        "Psicoterapia cognitivo-comportamentale",
        "Disturbi d'ansia",
        "Attacchi di panico",
        "Agorafobia",
        "Disturbo ossessivo-compulsivo",
        "Depressione",
        "Disturbi dell'umore",
        "Disturbi del comportamento alimentare",
        "Stress",
        "Disturbi dell'adattamento",
        "Gestione delle emozioni",
      ],
      availableService: [
        { "@type": "MedicalTherapy", name: "Psicoterapia cognitivo-comportamentale" },
        { "@type": "MedicalTherapy", name: "Colloqui di sostegno psicologico" },
        { "@type": "MedicalTherapy", name: "Consulenza psicologica online" },
      ],
      founder: { "@id": `${site.url}/#chiara` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#chiara`,
      name: site.name,
      honorificPrefix: "Dott.ssa",
      jobTitle: "Psicologa e Psicoterapeuta",
      url: `${site.url}/chi-sono`,
      image: `${site.url}/images/chiara.jpg`,
      email: site.email,
      telephone: site.phone.replace(/\s/g, ""),
      worksFor: { "@id": `${site.url}/#studio` },
      alumniOf: { "@type": "EducationalOrganization", name: "Studi Cognitivi, Milano" },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Iscrizione all'Albo",
        name: "Ordine degli Psicologi dell'Emilia-Romagna n. 8939",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — Psicologa a ${site.city}`,
      inLanguage: "it-IT",
    },
  ],
};
