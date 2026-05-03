"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { USPSection } from "@/components/sections/USPSection";

export function TradeShowBoothBuilderContent() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main>
        <Hero 
          title="Trade Show Booth Builders Who Engineer for Conversion, Not Just Aesthetics"
          subtitle="We are a full-service exhibition booth builder — design, fabrication, logistics, and on-site installation — serving enterprise brands at the world's most competitive trade shows."
          badge="Global Fabrication"
        />

        <USPSection 
          title="Not Just Booth Builders - An Enterprise Exhibition Partner"
          items={[
            { title: "Engineering-First Design", description: "Our builders think about attendee movement, demo visibility, and meeting privacy before they start construction." },
            { title: "Global Fabrication Network", description: "Seamless execution across NY, London, Dubai, and Singapore through our verified local networks." },
            { title: "End-to-End Management", description: "We handle the details that keep the build safe, compliant, and event-ready, so your team can focus on the pipeline." }
          ]}
          className="bg-brand-gray/5"
        />

        <section className="py-24 bg-brand-white">
           <div className="container mx-auto px-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Booth Building Capabilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   "Custom Timber & Steel Structures",
                   "Modular System Builds",
                   "Double-Deck & Multi-Level Booths",
                   "Digital & LED Integration",
                   "Soft Goods & Tension Systems",
                   "Sustainable & Eco-Friendly Options"
                 ].map((cap, i) => (
                   <div key={i} className="p-8 rounded-2xl bg-white border border-brand-charcoal/10 shadow-sm flex items-center gap-4 group hover:border-brand-blue transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand-cyan group-hover:scale-150 transition-transform" />
                      <span className="font-bold text-lg">{cap}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <ProcessTimeline 
          title="The B2B Sales Arrow Booth Build Process"
          subtitle="Precision Engineering"
          steps={[
            { title: "Design Brief", description: "Aligning on goals, booth size, and functional requirements." },
            { title: "3D Render & Engineering", description: "Finalizing the visual and structural plans for approval." },
            { title: "Material Sourcing", description: "Selecting high-grade components for durability and impact." },
            { title: "Fabrication & QC", description: "Off-site construction and rigorous quality control checks." },
            { title: "Event Delivery & Setup", description: "Logistics management and professional on-site installation." },
            { title: "Breakdown & Storage", description: "Dismantling and post-event inventory management." }
          ]}
        />

        <FAQAccordion 
          title="Booth Builder FAQs"
          items={[
            { question: "What is the typical lead time?", answer: "It depends on booth size and materials. Larger custom builds should begin 12-20 weeks in advance." },
            { question: "Do you handle shipping and logistics?", answer: "Yes. Logistics can be included as part of a turnkey exhibition booth service." },
            { question: "Can we reuse the booth?", answer: "Yes. Reuse planning can be designed into the structure from the beginning." }
          ]}
        />

        <CTABanner 
          title="Let’s Build Something That Commands Attention"
          subtitle="Your booth should be engineered, not improvised. Build with a partner that understands the floor and the brand."
          ctaText="Request a Build Quote"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
