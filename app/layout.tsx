import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { businessSchema, JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: "Psicologa e Psicoterapeuta a Bologna | Dott.ssa Chiara Andriani",
    template: "%s | Dott.ssa Chiara Andriani",
  },
  description:
    "Psicologa e psicoterapeuta cognitivo-comportamentale a Bologna. La Dott.ssa Chiara Andriani offre colloqui di sostegno e psicoterapia per ansia, attacchi di panico, depressione e disturbi dell'umore, in studio e online.",
  applicationName: "Chiara Andriani Psicologa",
  authors: [{ name: "Dott.ssa Chiara Andriani" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#efe4d5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${jost.variable}`}>
      <body>
        <JsonLd data={businessSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
