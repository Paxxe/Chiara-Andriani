import { ImageResponse } from "next/og";

export const alt = "Dott.ssa Chiara Andriani — Psicologa e Psicoterapeuta a Bologna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Anteprima mostrata quando il sito viene condiviso (WhatsApp, Facebook, LinkedIn…).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #efe4d5 0%, #e2cbb2 100%)",
          color: "#2a221e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, letterSpacing: 6, color: "#6f625a" }}>
          <div style={{ width: 60, height: 2, background: "#c2967e" }} />
          PSICOLOGA A BOLOGNA
        </div>
        <div style={{ marginTop: 36, fontSize: 112, lineHeight: 1, letterSpacing: -3 }}>Chiara Andriani</div>
        <div style={{ marginTop: 36, fontSize: 36, color: "#6e4634" }}>
          Psicologa · Psicoterapeuta Cognitivo-Comportamentale
        </div>
        <div style={{ marginTop: 12, fontSize: 30, color: "#6f625a" }}>In studio a Bologna e online</div>
      </div>
    ),
    size,
  );
}
