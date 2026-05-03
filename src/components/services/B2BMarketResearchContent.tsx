"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function B2BMarketResearchContent() {
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
          title="B2B Market Research That Uncovers Your Next Growth Lever"
          subtitle="Stop guessing about your market's potential. We provide human-verified intelligence that helps you map competitors, identify decision-makers, and find the white space in your category."
          badge="Market Intel"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our B2B Market Research Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Competitor Mapping", desc: "Detailed analysis of competitor positioning, pricing, and market share." },
                { title: "ICP Development", description: "Identifying your Ideal Customer Profile based on real buying data." },
                { title: "Total Addressable Market (TAM)", desc: "Quantifying your true growth potential across global regions." },
                { title: "Intent Signal Mapping", description: "Identifying accounts actively researching solutions in your category." },
                { title: "Customer Perception Studies", description: "Understanding how your brand is truly seen by target buyers." },
                { title: "Opportunity White Space", description: "Finding the underserved segments in your industry." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-gray/5 border border-brand-charcoal/5 hover:bg-brand-blue hover:text-white transition-all group">
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="The Power of Human-Verified Intelligence"
          subtitle="The Human Edge"
          content="Automated reports only tell half the story. Our 50+ person research team goes deeper — manually verifying contact data, checking executive roles, and validating intent signals. We provide the 'why' behind the 'what,' giving your leadership team the confidence to make high-stakes commercial decisions.\n\nOur market research services support every other part of the growth engine: from event targeting to performance marketing and ABM. When the data is right, everything else works better."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Research Methodology"
          items={[
            { title: "Primary Data Discovery", description: "Getting information directly from the source through verified research channels." },
            { title: "Cross-Reference Validation", description: "Ensuring every data point is checked against multiple high-fidelity sources." },
            { title: "Actionable Insights", description: "We don't just deliver data; we deliver recommendations on how to use it for growth." }
          ]}
        />

        <CTABanner 
          title="Uncover Your Market's Hidden Opportunities"
          subtitle="Information is only power if it's accurate and actionable. Let's map your next billion-dollar opportunity."
          ctaText="Request a Research Brief"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
