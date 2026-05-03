"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function B2BContactDiscoveryContent() {
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
          title="High-Precision B2B Contact Discovery Services"
          subtitle="Stop relying on outdated databases. We use human-powered research to find and verify the specific decision-makers you need to reach, even in the most niche industries."
          badge="Precision Sourcing"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Contact Discovery Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Hard-to-Find Executive Contacts",
                "Niche Industry Role Discovery",
                "Direct Extension & Mobile Sourcing",
                "Buying Committee Mapping",
                "Account-Level Contact Grids",
                "Global Region Support (40+ Cnt)",
                "Social Presence Verification",
                "Technology Install-Base Discovery"
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-gray/5 border border-brand-charcoal/5 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                   <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Precision Over Volume: The B2B Sales Arrow Edge"
          subtitle="The Quality Standard"
          content="In enterprise sales, you don't need a list of 10,000 names; you need the right 100 people. Our B2B contact discovery service is built for surgical precision. We identify the exact individuals who hold the budget, influence the decision, and manage the technical requirements within your target accounts.\n\nEvery contact is manually verified by our researchers. We cross-reference multiple sources to ensure that when your sales team picks up the phone or hits 'send,' they are reaching the right person with the right context. We specialize in hard-to-reach sectors like Defense, Aerospace, Fintech, and Deep-Tech."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Manual Discovery Process"
          items={[
            { title: "Identify", description: "Mapping the target accounts and identifying the buying committee roles." },
            { title: "Source", description: "Using multi-channel research to find contact data that automated tools miss." },
            { title: "Verify", description: "Human verification of every record to ensure 100% accuracy and deliverability." }
          ]}
        />

        <CTABanner 
          title="Find Your Hard-to-Reach Decision Makers"
          subtitle="Don't let bad data block your growth. Get the precise contact intelligence you need to start winning more enterprise deals."
          ctaText="Request a Discovery Sample"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
