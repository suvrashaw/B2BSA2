import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import { TERMS_HERO, TERMS_FAQ, TERMS_CONTACT } from "@/content/page-sections/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | B2B Sales Arrow",
  description: "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...TERMS_HERO} />
      <FAQ {...TERMS_FAQ} />
      <ContactUs {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
}
