import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import { COMPANY_INFO } from "@/lib/company-info";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const title = "Groomy — Barbers aan huis, geboekt in seconden";
const description =
  "Groomy brengt professionele barbers naar jouw locatie. Boek direct of plan vooruit, betaal veilig via escrow, en volg live waar je barber is.";
const siteUrl = getSiteUrl();

// `metadataBase` laat alle relatieve URL's hieronder (canonical, OG-/
// Twitter-images) correct resolven naar een absolute URL — zonder deze
// waarschuwt Next.js en vallen social-share-previews soms terug op een
// verkeerde host. Zie src/lib/site-url.ts: wijzig NEXT_PUBLIC_SITE_URL
// zodra er een eigen domein aan dit project hangt, dan volgt de rest
// vanzelf mee.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["barber aan huis", "mobiele kapper", "knipbeurt boeken", "barber boeken", "kapper thuis"],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: COMPANY_INFO.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
