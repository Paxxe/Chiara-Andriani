// Dati del sito in un unico punto: modifica qui contatti e informazioni legali.
export const site = {
  // Dominio principale (sovrascrivibile con NEXT_PUBLIC_SITE_URL)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://andrianichiara.it").replace(/\/$/, ""),
  name: "Chiara Andriani",
  role: "Psicologa · Psicoterapeuta",
  specialization: "Psicoterapeuta Cognitivo-Comportamentale",
  city: "Bologna",
  address: "Via Toscana, 64 — 40141 Bologna",
  street: "Via Toscana, 64",
  postalCode: "40141",
  mapsQuery: "via Toscana 64, Bologna",
  phone: "+39 327 011 3153",
  email: "chiara_andriani@yahoo.com",
  albo: "Iscritta all'Ordine degli Psicologi dell'Emilia-Romagna n. 8939",
  piva: "P.IVA 03697771206",
};

export const nav = [
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/consulenza-online", label: "Consulenza online" },
  { href: "/contatti", label: "Contatti" },
];
