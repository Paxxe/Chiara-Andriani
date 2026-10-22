import type { Metadata } from "next";

// Generata da app/opengraph-image.tsx; va ripetuta perché un openGraph di pagina sostituisce quello ereditato.
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Dott.ssa Chiara Andriani — Psicologa e Psicoterapeuta a Bologna",
};

// Metadati completi di una pagina: canonical e anteprima social coerenti con title/description.
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Dott.ssa Chiara Andriani — Psicologa a Bologna",
      locale: "it_IT",
      type: "website",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
