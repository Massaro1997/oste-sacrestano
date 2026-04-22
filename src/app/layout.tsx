import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { ConditionalNavigation, ConditionalFooter } from "@/components/ConditionalChrome";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://losteeilsacrestano.it");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "L'Oste e il Sacrestano | Osteria Contemporanea a Licata",
  description: "Osteria contemporanea nel cuore di Licata. Lo Chef Peppe Bonsignore propone una cucina siciliana moderna con prodotti freschi del territorio. Ristorante selezionato dalla Guida Michelin.",
  keywords: "ristorante licata, osteria siciliana, peppe bonsignore, cucina siciliana, guida michelin sicilia, ristorante agrigento",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "L'Oste e il Sacrestano",
    title: "L'Oste e il Sacrestano | Osteria Contemporanea a Licata",
    description: "Osteria contemporanea nel cuore di Licata. Cucina siciliana moderna dello Chef Peppe Bonsignore.",
    url: siteUrl,
    locale: "it_IT",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "L'Oste e il Sacrestano — piatti dello Chef Peppe Bonsignore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Oste e il Sacrestano | Osteria Contemporanea a Licata",
    description: "Cucina siciliana moderna dello Chef Peppe Bonsignore nel cuore di Licata.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <ConditionalNavigation />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
