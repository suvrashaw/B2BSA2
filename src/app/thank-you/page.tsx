import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { THANK_YOU_HERO, THANK_YOU_SERVICES, THANK_YOU_BLOGS } from "@/content/thank-you";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...THANK_YOU_HERO} />
      <OurServices {...THANK_YOU_SERVICES} />
      <Blogs {...THANK_YOU_BLOGS} />
      <Footer />
    </main>
  );
}
