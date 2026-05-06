import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_HERO, CONTACT_WHO_WE_ARE, CONTACT_FAQ, CONTACT_FORM } from "@/content/contact";
import { getPageMetadata } from "@/content/pages";

export const metadata: Metadata = getPageMetadata("/contact-us");

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
