import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CONTACT_HERO, CONTACT_WHO_WE_ARE, CONTACT_FAQ, CONTACT_FORM } from "@/content/contact";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/contact");

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
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
