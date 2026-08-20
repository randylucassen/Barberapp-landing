import { ImageResponse } from "next/og";

// Favicon, code-gegenereerd (geen los .ico-bestand nodig) — zelfde
// vormgeving als het logo-vierkant in de header van page.tsx.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          borderRadius: 8,
          color: "#0EA5A4",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        G
      </div>
    ),
    { ...size }
  );
}
