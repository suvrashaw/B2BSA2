import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import {
  CASE_STUDIES_HERO,
  CASE_STUDIES_STATS,
  CASE_STUDIES_LIST,
  CASE_STUDIES_TESTIMONIALS,
  CASE_STUDIES_CONTACT,
} from "@/content/page-sections/case-studies";
import { getPageMetadata } from "@/content/pages";

export const metadata: Metadata = getPageMetadata("/case-studies");

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
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
