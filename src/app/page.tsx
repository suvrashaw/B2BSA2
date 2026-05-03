import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurServices } from "@/components/sections/OurServices";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-gray dark:bg-[#1a1c1e]">
      <Header />
      <Hero 
        title="Global B2B Event, Booth & Lead Generation Experts" 
        subtitle="End-to-End Solutions That Drive Pipeline and Revenue"
      />
      <ClientLogos />
      {/* Stats Counter - Placeholder */}
      <WhoWeAre /> {/* Problem Statement */}
      <OurServices /> {/* Services Overview Grid */}
      <UpcomingEvents /> {/* Industries Served */}
      <CinematicSequence /> {/* Process Overview / Innovation */}
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Blogs />
      <ContactUs />
      <Footer />
    </main>
  );
}
