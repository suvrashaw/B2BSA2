import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Culture } from "@/components/sections/Culture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Hero } from "@/components/sections/Hero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Timeline } from "@/components/ui/Timeline";
import {
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_STATS,
  ABOUT_TEAM,
  ABOUT_VALUES,
  ABOUT_PRESENCE,
  ABOUT_TESTIMONIALS,
  ABOUT_CONTACT,
} from "@/content/about";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/about-us");

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...ABOUT_HERO} />
      <Timeline
        data={ABOUT_ORIGIN_TIMELINE.items}
        heading={ABOUT_ORIGIN_TIMELINE.heading}
        description={ABOUT_ORIGIN_TIMELINE.description}
      />
      <WhoWeAre {...ABOUT_STATS} />
      <TeamGrid data={ABOUT_TEAM} />
      <Culture data={ABOUT_VALUES} />
      <GlobalPresence data={ABOUT_PRESENCE} />
      <ClientLogos />
      <Testimonials {...ABOUT_TESTIMONIALS} />
      <ContactUs {...ABOUT_CONTACT} />
      <Footer />
    </main>
  );
}
