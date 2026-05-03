"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { USPSection } from "@/components/sections/USPSection";

export function TradeShowBoothDesignContent() {
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
          title="Trade Show Booth Design That Converts Foot Traffic Into Pipeline"
          subtitle="A good booth looks impressive. A great booth changes how people move, stop, talk, and remember your brand. We engineer immersive spaces designed to start conversations."
          badge="Strategic Design"
        />

        {/* Visual Showcase: Before/After */}
        <section className="py-24 bg-brand-charcoal overflow-hidden">
          <div className="container mx-auto px-8 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">From Concept to Concrete Reality</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Swipe to see how our architectural concepts translate into award-winning exhibition floors.</p>
          </div>
          <div className="container mx-auto px-8 max-w-6xl">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
              beforeLabel="3D Rendering"
              afterLabel="On-Ground Execution"
            />
          </div>
        </section>

        <USPSection 
          title="Why Generic Exhibition Booth Design Costs You Leads"
          items={[
            { title: "Psychological Traffic Flow", description: "We design custom trade show booths around traffic flow and demo visibility, not just empty space." },
            { title: "Conversation Zones", description: "Our layouts create private meeting areas and sensory details that hold attendee attention longer." },
            { title: "Conversion Hand-off", description: "Every square foot is planned to support the handoff between booth engagement and sales follow-up." }
          ]}
          className="bg-brand-gray/5"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Booth Sizes and Formats We Design</h2>
              <p className="text-gray-600 text-lg">Each format is planned around the same question: how should the buyer move through the experience?</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "10x10 Starter Kits", desc: "Optimized for focused market entry with high visual impact." },
                { title: "20x20 Island Booths", desc: "360-degree visibility engineered for premium brand presence." },
                { title: "Double-Deck Structures", desc: "Multi-level environments for private executive meetings and VIP hospitality." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue transition-all">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessTimeline 
          title="From Brief to Build: Our 6-Step Design Process"
          subtitle="Our Methodology"
          steps={[
            { title: "Discovery & Alignment", description: "We start with your brand guidelines and commercial goals to define the spatial strategy." },
            { title: "Spatial Concept", description: "Developing the visitor journey and functional zones (Demo, Meeting, Lead Gen)." },
            { title: "3D Rendering", description: "High-fidelity visualization so you can experience the booth before fabrication begins." },
            { title: "Material & Finish", description: "Specifying every surface, lighting element, and digital integration for durability and impact." },
            { title: "Fabrication Handoff", description: "Coordinating with builders to ensure the engineering matches the vision perfectly." },
            { title: "On-Site Readiness", description: "Setup supervision and quality review to ensure a flawless opening morning." }
          ]}
        />

        <FAQAccordion 
          title="Booth Design FAQs"
          items={[
            { question: "Do you only design, or also fabricate?", answer: "We support both design-only and full design-to-build engagements globally." },
            { question: "Can you work with existing brand guidelines?", answer: "Yes. We extend your existing brand system into the physical exhibition environment without losing consistency." },
            { question: "Can the booth be reused?", answer: "Yes. Reuse planning is included from the start through modular components and storage strategies." }
          ]}
        />

        <CTABanner 
          title="Ready to Stop Blending In?"
          subtitle="Your next booth should make buyers stop mid-stride. We design custom trade show booths for enterprise teams competing in crowded environments."
          ctaText="Start Your Design Project"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
