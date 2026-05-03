"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { CTABanner } from "@/components/sections/CTABanner";
import { USPSection } from "@/components/sections/USPSection";

export function EventBoothRentalContent() {
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
          title="Premium Trade Show Booth Rental — Deploy Globally in Weeks"
          subtitle="When speed matters, trade show booth rental gives your enterprise brand a polished exhibition presence without the full custom fabrication timeline."
          badge="Global Inventory"
        />

        <ComparisonTable 
          title="When Rental Makes More Sense Than Custom Builds"
          rows={[
            { feature: "Time to Market", standard: "12-20 Weeks (Custom)", b2bsa: "2-4 Weeks (Rental)" },
            { feature: "Budget Flexibility", standard: "High upfront CapEx", b2bsa: "Predictable OpEx" },
            { feature: "Global Logistics", standard: "Complex shipping/storage", b2bsa: "Local inventory access" },
            { feature: "Brand Consistency", standard: "Varies by builder", b2bsa: "Strict brand-configurable kits" }
          ]}
        />

        <section className="py-24 bg-brand-charcoal text-white">
           <div className="container mx-auto px-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Rental Booth Inventory</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   { title: "10x10 Standard", desc: "Starter presence for quick deployments." },
                   { title: "20x20 Island", desc: "High-visibility formats for major halls." },
                   { title: "Double-Deck", desc: "Premium floor presence with meeting zones." },
                   { title: "Custom-Branded", desc: "Your brand on our modular structures." }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan transition-all">
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <USPSection 
          title="What Every Rental Package Includes"
          items={[
            { title: "Installation & Breakdown", description: "Full on-site labor handled by our global crew network." },
            { title: "Branded Graphic Panels", description: "High-quality, custom-printed tension fabric or rigid panels." },
            { title: "Furniture & AV Options", description: "Full catalog of professional seating, counters, and LED displays." },
            { title: "On-Site Support", description: "Dedicated project supervisor for the duration of the event." }
          ]}
        />

        <section className="py-24 bg-brand-white">
           <div className="container mx-auto px-8 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">How Our Rental Process Works</h2>
              <div className="flex flex-wrap justify-center gap-4">
                 {["Enquire", "Availability Check", "Branding Config", "Delivery & Setup", "Post-Event Collection"].map((step, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="px-6 py-3 rounded-full bg-brand-blue text-white font-bold text-sm uppercase">{step}</div>
                      {i < 4 && <div className="hidden md:block w-8 h-px bg-brand-charcoal/20" />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTABanner 
          title="Fast Does Not Have to Feel Temporary"
          subtitle="Event booths for major shows book early. If you need a fast but credible presence, start with an availability check."
          ctaText="Check Rental Availability"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
