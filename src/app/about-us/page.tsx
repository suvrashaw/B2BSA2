import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { Timeline } from "@/components/ui/timeline";
import { TeamGrid } from "@/components/about/team-grid";
import { Culture } from "@/components/about/culture";
import { GlobalPresence } from "@/components/about/global-presence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import {
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_STATS,
  ABOUT_TEAM,
  ABOUT_VALUES,
  ABOUT_PRESENCE,
  ABOUT_TESTIMONIALS,
  ABOUT_CONTACT,
} from "@/content/page-sections/about-us";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

export const metadata: Metadata = {
  title: "About Us | B2B Sales Arrow",
  description: "Learn about B2B Sales Arrow — our story, values, and the team behind $1.2B in client pipeline across 40+ countries.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...ABOUT_HERO} />
      <Timeline data={ABOUT_ORIGIN_TIMELINE.items} heading={ABOUT_ORIGIN_TIMELINE.heading} description={ABOUT_ORIGIN_TIMELINE.description} />
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
