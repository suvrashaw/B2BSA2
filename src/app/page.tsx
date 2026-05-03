import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
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
      <div id="home">
        <Hero />
      </div>
      
      <CinematicSequence />
      
      <ClientLogos />
      
      <div id="about">
        <WhoWeAre />
      </div>
      
      <div id="services">
        <OurServices />
      </div>
      
      <div id="work">
        <CaseStudies />
      </div>
      
      <div id="events">
        <UpcomingEvents />
      </div>
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <div id="blogs">
        <Blogs />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <div id="contact">
        <ContactUs />
      </div>
      
      <Footer />
    </main>
  );
}
