import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
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
  description: "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
};

import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";

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
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" forcedTheme="light">
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
