import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const FROM = process.env.CONTACT_FROM_EMAIL ?? "Sito Chiara Andriani <noreply@andrianichiara.it>";
const TO = process.env.CONTACT_TO_EMAIL ?? site.email;

const LIMITS = { nome: 100, email: 200, oggetto: 200, messaggio: 5000 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY non configurata");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: i bot compilano anche il campo nascosto. Rispondiamo ok senza inviare.
  if (body.botcheck) return NextResponse.json({ ok: true });

  const nome = clean(body.nome, LIMITS.nome);
  const email = clean(body.email, LIMITS.email);
  const oggetto = clean(body.oggetto, LIMITS.oggetto);
  const messaggio = clean(body.messaggio, LIMITS.messaggio);

  if (!nome || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.privacy !== true) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const rows = [
    ["Nome", nome],
    ["Email", email],
    ["Oggetto", oggetto || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#2a221e;max-width:600px">
      <h2 style="font-weight:normal;color:#6e4634">Nuovo messaggio dal sito</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#6f625a;width:90px">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#6f625a">Messaggio</p>
      <div style="white-space:pre-wrap;background:#f6f2eb;padding:16px;border-radius:8px">${escapeHtml(messaggio || "—")}</div>
      <p style="margin-top:24px;font-size:12px;color:#6f625a">Rispondi direttamente a questa email per scrivere a ${escapeHtml(nome)}.</p>
    </div>`;

  const text = `Nuovo messaggio dal sito\n\nNome: ${nome}\nEmail: ${email}\nOggetto: ${oggetto || "—"}\n\nMessaggio:\n${messaggio || "—"}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Nuovo messaggio dal sito: ${oggetto || nome}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Errore Resend", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
