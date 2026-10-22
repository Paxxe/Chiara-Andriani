import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Chiara Andriani — Psicologa e Psicoterapeuta a Bologna",
    template: "%s — Chiara Andriani, Psicologa a Bologna",
  },
  description:
    "Dott.ssa Chiara Andriani, psicologa e psicoterapeuta cognitivo-comportamentale a Bologna. Colloqui di sostegno e terapia per ansia, depressione e disturbi dell'umore, in presenza e online.",
  openGraph: {
    title: "Chiara Andriani — Psicologa e Psicoterapeuta",
    description: "Colloqui di sostegno e psicoterapia a Bologna e online.",
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f2eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${jost.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
