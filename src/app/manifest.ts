import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Groomy",
    short_name: "Groomy",
    description: "Barbers aan huis, geboekt in seconden.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111111",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
