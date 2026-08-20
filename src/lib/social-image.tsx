import { ImageResponse } from "next/og";

// Gedeeld door opengraph-image.tsx en twitter-image.tsx — Next.js valt
// in de praktijk vaak terug op opengraph-image voor Twitter-kaarten,
// maar een expliciet eigen bestand voorkomt daarover elke twijfel.
export const socialImageSize = { width: 1200, height: 630 };

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#0EA5A4",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#111111",
            }}
          >
            G
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#FFFFFF" }}>Groomy</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 920,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          Een barber aan huis. Geboekt in een paar tikken.
        </div>
      </div>
    ),
    { ...socialImageSize }
  );
}
