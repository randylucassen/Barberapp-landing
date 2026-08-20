import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const title = "Groomy — Barbers aan huis, geboekt in seconden";
const description =
  "Groomy brengt professionele barbers naar jouw locatie. Boek direct of plan vooruit, betaal veilig via escrow, en volg live waar je barber is.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "nl_NL" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
