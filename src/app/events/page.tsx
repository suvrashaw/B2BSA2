import { getCmsPageMetadata } from "@/cms/mock/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import {
  EVENTS_HERO,
  EVENTS_UPCOMING,
  EVENTS_STATS,
  EVENTS_CASE_STUDIES,
  EVENTS_WHY,
  EVENTS_TESTIMONIALS,
  EVENTS_CONTACT,
} from "@/content/events";

import type { Metadata } from "next";

export const metadata: Metadata = getCmsPageMetadata("events");

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...EVENTS_HERO} />
      <UpcomingEvents {...EVENTS_UPCOMING} />
      <WhoWeAre {...EVENTS_STATS} />
      <CaseStudies {...EVENTS_CASE_STUDIES} />
      <WhyChooseUs {...EVENTS_WHY} />
      <Testimonials {...EVENTS_TESTIMONIALS} />
      <ContactUs {...EVENTS_CONTACT} />
      <Footer />
    </main>
  );
}
