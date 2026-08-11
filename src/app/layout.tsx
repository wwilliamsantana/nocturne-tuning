import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import StructuredData from "@/components/seo/StructuredData";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Nocturne — Preparação Automotiva de Performance",
    template: "%s | Nocturne",
  },
  description:
    "Preparação automotiva de alta performance: motor, suspensão, chassis e remap sob medida para quem quer mais do carro. Conheça nossos projetos.",
  keywords: [
    "preparação automotiva",
    "preparação de motor",
    "performance automotiva",
    "remap ECU",
    "tuning",
    "oficina de performance",
  ],
  authors: [{ name: "Nocturne" }],
  metadataBase: new URL("https://nocturnemotors.com.br"), // troque pelo domínio real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nocturne — Preparação Automotiva de Performance",
    description:
      "Preparação automotiva de alta performance: motor, suspensão, chassis e remap sob medida.",
    // url: "https://nocturnemotors.com.br",
    siteName: "Nocturne",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1300,
        height: 850,
        alt: "Nocturne — Preparação Automotiva de Performance",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <StructuredData />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
