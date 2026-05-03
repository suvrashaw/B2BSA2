"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";

const EVENTS = [
  { category: "Technology & SaaS", list: ["GITEX Global", "CES Las Vegas", "Web Summit", "AWS re:Invent", "Salesforce Dreamforce"] },
  { category: "Financial Services", list: ["Sibos", "Money20/20", "Finovate", "iFX EXPO"] },
  { category: "Healthcare & Life Sciences", list: ["BIO International", "Arab Health", "HIMSS", "Medica"] },
  { category: "Energy & Infrastructure", list: ["ADIPEC", "CERAWeek", "Hannover Messe"] },
  { category: "Telecom & Connectivity", list: ["Mobile World Congress (MWC)", "GSMA Thrive"] }
];

export function IndustryEventsContent() {
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
          title="Dominate the Industry Events That Drive Your Market"
          subtitle="From GITEX to Web Summit — we identify the right events for your brand, build your on-site presence, and ensure every interaction converts to pipeline."
          badge="Global Coverage"
        />

        <section className="py-24 bg-brand-charcoal text-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Key Industry Events Where We Execute</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EVENTS.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan transition-all group">
                   <h3 className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-6">{item.category}</h3>
                   <ul className="space-y-4">
                      {item.list.map((event, j) => (
                        <li key={j} className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">• {event}</li>
                      ))}
                   </ul>
                </div>
              ))}
            </div>
            <p className="mt-16 text-center text-gray-400 italic">"Don't see your event? We operate in 40+ countries — let's talk."</p>
          </div>
        </section>

        <TextSection 
          title="Why the Right Industry Events Are Your Best Sales Channel"
          subtitle="Strategic Impact"
          content="Not every event deserves your budget. The best corporate event solutions put your team where buyer intent, category relevance, and relationship-building overlap. We help forecast ROI before you commit and measure commercial outcomes after execution.\n\nAttendance alone rarely moves the needle. We operate as an experiential marketing agency by designing environments, programs, and touchpoints that create active buyer engagement rather than passive foot traffic."
        />

        <section className="py-24 bg-brand-gray/5">
           <div className="container mx-auto px-8">
              <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">Full-Service Industry Event Management</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Event Selection & ROI Forecasting", "Booth Design & Fabrication", "Pre-Show Lead Targeting", "On-Site Execution & Staff Support", "Post-Show Analytics", "Pipeline Reporting"].map((service, i) => (
                      <div key={i} className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-center font-bold text-sm text-brand-blue uppercase tracking-tight">
                         {service}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        <FAQAccordion 
          title="Industry Event FAQs"
          items={[
            { question: "Which industry events should you prioritize?", answer: "We provide data-led assessments based on your ICP (Ideal Customer Profile) and where your competitors are currently seeing the highest conversion rates." },
            { question: "How do you measure ROI for live events?", answer: "We track qualified lead volume, cost per acquisition, pipeline influence ($), and post-event meeting conversion rates." }
          ]}
        />

        <CTABanner 
          title="Which Industry Events Should You Prioritize?"
          subtitle="The strongest event strategy is not about showing up everywhere. Arrive with a presence strong enough to be remembered."
          ctaText="Get a Free ROI Assessment"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
