import type { Config } from "tailwindcss";

// Zelfde design tokens als de hoofd-Groomy-app (groomy-mvp/groomy/
// tailwind.config.ts) — dit project heeft geen eigen designsysteem,
// hergebruikt bewust dezelfde kleuren/afrondingen zodat de marketingpagina
// visueel bij de rest van Groomy blijft passen, ook al is de codebase
// hier volledig los.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: {
          DEFAULT: "#0EA5A4",
          dark: "#0B8584",
          soft: "#E6F5F5",
        },
        surface: "#F8F8F8",
        border: {
          DEFAULT: "#E5E7EB",
          soft: "#F1F2F4",
        },
        text: {
          primary: "#111111",
          secondary: "#6B7280",
          tertiary: "#9CA3AF",
          inverse: "#FFFFFF",
          accent: "#0EA5A4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "14px",
        lg: "18px",
        xl: "24px",
        pill: "999px",
      },
      height: {
        "ctrl-lg": "56px",
      },
      transitionDuration: {
        fast: "150ms",
      },
      transitionTimingFunction: {
        groomy: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
