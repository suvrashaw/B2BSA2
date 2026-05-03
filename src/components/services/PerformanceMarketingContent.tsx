"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

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

        <ServicesGrid 
          title="Our Performance Marketing Services"
          subtitle="Expertise"
          services={[
            { 
              title: "SEO Services", 
              description: "Organic visibility engineered for high-intent B2B search behaviors.",
              href: "/services/marketing-and-market-research/search-engine-optimization",
              icon: "layout"
            },
            { 
              title: "Paid Advertising", 
              description: "Full-funnel PPC and programmatic campaigns optimized for enterprise pipeline.",
              href: "/services/marketing-and-market-research/paid-advertising",
              icon: "zap"
            },
            { 
              title: "LinkedIn Ads for B2B", 
              description: "Hyper-targeted LinkedIn campaigns reaching the world's top decision-makers.",
              href: "/services/marketing-and-market-research/linkedin-ads-b2b",
              icon: "users"
            }
          ]}
        />

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
