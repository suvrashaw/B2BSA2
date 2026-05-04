import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { OurServices } from "@/components/sections/OurServices";
import { Blogs } from "@/components/sections/Blogs";
import { Footer } from "@/components/layout/Footer";
import {
  THANK_YOU_HERO,
  THANK_YOU_SERVICES,
  THANK_YOU_BLOGS,
} from "@/content/page-sections/thank-you";

export const metadata: Metadata = {
  title: "Thank You | B2B Sales Arrow",
  description: "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...THANK_YOU_HERO} />
      <OurServices {...THANK_YOU_SERVICES} />
      <Blogs {...THANK_YOU_BLOGS} />
      <Footer />
    </main>
  );
}
