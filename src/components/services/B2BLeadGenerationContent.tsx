"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function B2BLeadGenerationContent() {
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
          title="B2B Lead Generation Services That Deliver High-Intent Opportunities"
          subtitle="Stop chasing cold lists. We build multi-channel lead generation systems that combine human-verified intelligence with performance marketing to deliver sales-ready opportunities."
          badge="Pipeline Architecture"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our B2B Lead Generation Ecosystem</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Outbound Prospecting", desc: "Strategic email and LinkedIn outreach focused on your high-value target accounts." },
                { title: "Inbound Optimization", description: "Turning your existing website traffic into qualified leads through better offers and tech." },
                { title: "Content-Led Lead Gen", desc: "Using whitepapers, webinars, and research to capture early-stage buyer intent." },
                { title: "Paid Lead Acquisition", description: "Precision-targeted ad campaigns across search and social platforms." },
                { title: "Event-Led Lead Gen", desc: "Bridging the gap between physical exhibitions and digital CRM records." },
                { title: "Database Reactivation", description: "Turning your stale old lists into fresh, convertible sales conversations." }
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
          title="Why Our Lead Generation System Outperforms General Agencies"
          subtitle="The Advantage"
          content="Most agencies focus on volume. We focus on conversion. By combining our internal market research team with our performance marketing experts, we ensure every lead generated meets your strict qualification criteria.\n\nWe don't just hand over a list of names. We deliver context: why they are interested, what they are researching, and where they sit in the buying cycle. This gives your sales team the 'unfair advantage' they need to close enterprise deals faster."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="The B2B Sales Arrow Lead Gen Process"
          items={[
            { title: "ICP & Persona Mapping", description: "Defining exactly who your best buyers are and where they congregate." },
            { title: "Multi-Channel Engagement", description: "Using a mix of content, ads, and direct outreach to create high-frequency brand visibility." },
            { title: "Lead Scoring & Handoff", description: "Ensuring only the most qualified opportunities reach your sales team." }
          ]}
        />

        <CTABanner 
          title="Start Building Your Pipeline"
          subtitle="Wait-and-see is not a strategy. Build a predictable lead generation engine that fuels your revenue growth."
          ctaText="Request a Growth Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
