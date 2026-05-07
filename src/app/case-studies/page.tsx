import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import {
  CASE_STUDIES_HERO,
  CASE_STUDIES_STATS,
  CASE_STUDIES_LIST,
  CASE_STUDIES_TESTIMONIALS,
  CASE_STUDIES_CONTACT,
} from "@/content/case-studies";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/case-studies");

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...CASE_STUDIES_HERO} />
      <WhoWeAre {...CASE_STUDIES_STATS} />
      <CaseStudies {...CASE_STUDIES_LIST} />
      <ClientLogos />
      <Testimonials {...CASE_STUDIES_TESTIMONIALS} />
      <ContactUs {...CASE_STUDIES_CONTACT} />
      <Footer />
    </main>
  );
}
