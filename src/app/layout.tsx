import { Montserrat, Playfair_Display } from "next/font/google";

import { PartytownScripts } from "@/app/providers/PartytownScripts";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { SWRegistrar } from "@/app/providers/SWRegistrar";
import { buildOrganizationJsonLd } from "@/lib";

import type { Metadata } from "next";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://b2bsalesarrow.com"),
  title: {
    default: "B2B Sales Arrow | Premium Growth Partner",
    template: "%s | B2B Sales Arrow",
  },
  description:
    "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
};

const jsonLd = buildOrganizationJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="light flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PartytownScripts />
        <SWRegistrar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
