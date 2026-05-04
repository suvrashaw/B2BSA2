import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import {
  ABOUT_HERO,
  ABOUT_CINEMATIC,
  ABOUT_STATS,
  ABOUT_VALUES,
  ABOUT_CASE_STUDIES,
  ABOUT_TESTIMONIALS,
  ABOUT_CONTACT,
} from "@/content/page-sections/about-us";

export const metadata: Metadata = {
  title: "About Us | B2B Sales Arrow",
  description: "Learn about B2B Sales Arrow — our story, values, and the team behind $1.2B in client pipeline across 40+ countries.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...ABOUT_HERO} />
      <CinematicSequence {...ABOUT_CINEMATIC} />
      <WhoWeAre {...ABOUT_STATS} />
      <WhyChooseUs {...ABOUT_VALUES} />
      <CaseStudies {...ABOUT_CASE_STUDIES} />
      <ClientLogos />
      <Testimonials {...ABOUT_TESTIMONIALS} />
      <ContactUs {...ABOUT_CONTACT} />
      <Footer />
    </main>
  );
}
