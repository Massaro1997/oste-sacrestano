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

export const metadata: Metadata = {
  title: "L'Oste e il Sacrestano | Osteria Contemporanea a Licata",
  description: "Osteria contemporanea nel cuore di Licata. Lo Chef Peppe Bonsignore propone una cucina siciliana moderna con prodotti freschi del territorio. Ristorante selezionato dalla Guida Michelin.",
  keywords: "ristorante licata, osteria siciliana, peppe bonsignore, cucina siciliana, guida michelin sicilia, ristorante agrigento",
  openGraph: {
    title: "L'Oste e il Sacrestano | Osteria Contemporanea",
    description: "Osteria contemporanea nel cuore di Licata. Cucina siciliana moderna dello Chef Peppe Bonsignore.",
    images: ["/images/hero.png"],
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
