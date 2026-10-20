import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE_URL } from "@/features/landing/data/links";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "Grano y Grano · Compra y vende café y pimienta con números claros";
const description =
  "App para compradores y productores de café y pimienta en Chiapas. Calcula la merma al instante, controla tu inversión y conecta con tu región. Gratis para empezar.";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: { default: title, template: "%s · Grano y Grano" },
  description,
  applicationName: "Grano y Grano",
  keywords: [
    "café",
    "pimienta",
    "Chiapas",
    "merma",
    "acopio",
    "compradores de café",
    "productores de café",
    "app",
  ],
  authors: [{ name: "Softvana" }],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Grano y Grano",
    title,
    description,
    url: "./",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#3b2418",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
