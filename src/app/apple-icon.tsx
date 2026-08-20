import { ImageResponse } from "next/og";

// Grotere variant voor "toevoegen aan beginscherm" op iOS.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          color: "#0EA5A4",
          fontSize: 100,
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
