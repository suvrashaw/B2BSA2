import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import {
  CONTACT_HERO,
  CONTACT_WHO_WE_ARE,
  CONTACT_FAQ,
  CONTACT_FORM,
} from "@/content/page-sections/contact";

export const metadata: Metadata = {
  title: "Contact Us | B2B Sales Arrow",
  description: "Get in touch with B2B Sales Arrow. Our growth architects respond within 24 hours.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...CONTACT_HERO} />
      <WhoWeAre {...CONTACT_WHO_WE_ARE} />
      <ClientLogos />
      <FAQ {...CONTACT_FAQ} />
      <ContactUs {...CONTACT_FORM} />
      <Footer />
    </main>
  );
}
