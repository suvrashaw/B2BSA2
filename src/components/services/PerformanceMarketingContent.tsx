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

export function PerformanceMarketingContent() {
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
          title="Performance Marketing That Maps Directly to Your Sales Pipeline"
          subtitle="We don't chase clicks. We chase conversion. Our B2B performance marketing services are engineered to move prospects from initial discovery to sales-qualified opportunities."
          badge="ROI-Focused"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our B2B Performance Marketing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Paid Search (PPC) Management",
                "LinkedIn ABM Ads",
                "Meta/X B2B Targeting",
                "Display & Programmatic",
                "Landing Page Optimization",
                "Conversion Rate Optimization",
                "Analytics & Attribution Setup",
                "Multi-Channel Retargeting"
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-gray/5 border border-brand-charcoal/5 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                   <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Why B2B Performance Marketing Is Different"
          subtitle="B2B Strategy"
          content="In B2C, you want volume. In B2B, you want precision. A single high-value lead can be worth more than 10,000 generic visits. That's why our strategy focuses on account-level intent, job-title accuracy, and high-trust content offers rather than just broad traffic acquisition.\n\nWe optimize for Pipeline influenced ($), not just MQLs. By aligning our bidding and targeting with your sales team's feedback, we ensure the traffic we generate is actually convertible into revenue."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Data-Led Performance Framework"
          items={[
            { title: "Target Audience Mapping", description: "Using human-verified research to define exactly who we are bidding on." },
            { title: "Full-Funnel Attribution", description: "Mapping every click to a CRM record to measure true commercial impact." },
            { title: "Rapid Iteration", description: "Testing messaging, creative, and offer combinations to drive down CPL while increasing quality." }
          ]}
        />

        <CTABanner 
          title="Stop Spending. Start Investing in Pipeline."
          subtitle="If your current ad spend isn't showing a clear path to SQLs, it's time to change the framework. Let's build a performance engine that works."
          ctaText="Request a Performance Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
