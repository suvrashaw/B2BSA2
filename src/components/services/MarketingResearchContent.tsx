"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function MarketingResearchContent() {
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
          title="Data-Driven Marketing & High-Precision Market Research"
          subtitle="We combine human-verified market intelligence with performance marketing frameworks to fill your enterprise pipeline with the right decision-makers."
          badge="Growth Intelligence"
        />

        <ServicesGrid 
          title="Our Marketing & Research Ecosystem"
          subtitle="Capabilities"
          services={[
            { 
              title: "Performance Marketing", 
              description: "Data-led multi-channel campaigns engineered for MQL to SQL conversion.",
              href: "/services/marketing-and-market-research/performance-marketing",
              icon: "zap"
            },
            { 
              title: "ABM Frameworks", 
              description: "Strategic Account-Based Marketing systems that target your top-tier executive accounts.",
              href: "/services/marketing-and-market-research/abm-frameworks",
              icon: "users"
            },
            { 
              title: "SEO & Content", 
              description: "Organic growth systems built around high-intent B2B search behaviors.",
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
            },
            { 
              title: "Meta Ads for B2B", 
              description: "Omnichannel retargeting on Facebook and Instagram to surround your top accounts.",
              href: "/services/marketing-and-market-research/meta-ads-b2b",
              icon: "zap"
            },
            { 
              title: "SQL Lead Generation", 
              description: "Verified, sales-ready prospects aligned to your strict ICP and BANT criteria.",
              href: "/services/marketing-and-market-research/sales-qualified-lead-generation",
              icon: "target"
            },
            { 
              title: "B2B Market Research", 
              description: "Deep-dive competitive intelligence and market mapping to find your next growth opportunity.",
              href: "/services/marketing-and-market-research/b2b-market-research",
              icon: "globe"
            },
            { 
              title: "B2B Lead Generation", 
              description: "Multi-channel lead discovery and qualification for enterprise sales teams.",
              href: "/services/marketing-and-market-research/b2b-lead-generation",
              icon: "zap"
            },
            { 
              title: "Contact Discovery", 
              description: "Human-verified contact data for 100% accuracy in your outreach programs.",
              href: "/services/marketing-and-market-research/b2b-contact-discovery",
              icon: "users"
            }
          ]}
        />

        <TextSection 
          title="Why Human-Verified Intelligence Beats Automated Scraping"
          subtitle="The Quality Gap"
          content="Scraping tools deliver high volume but low accuracy. For enterprise B2B, a 30% bounce rate is a failure. We use a proprietary 50+ person research team to manually verify every contact, title, and intent signal before it ever touches your CRM.\n\nOur market research services provide the foundational data that makes our performance marketing work. When you know exactly who you are targeting, your ad spend is more efficient, your messaging is sharper, and your conversion rate is significantly higher."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Unified Growth Methodology"
          items={[
            { title: "Intelligence-First", description: "Every campaign begins with research. We don't guess; we map your market and ICP with precision." },
            { title: "Accountable Attribution", description: "We map marketing interactions to revenue pipeline, ensuring every dollar is traceable to impact." },
            { title: "Human-at-the-Core", description: "We use technology to scale, but humans to verify. 100% data accuracy is our baseline." }
          ]}
        />

        <CTABanner 
          title="Ready to Build a High-Precision Growth Engine?"
          subtitle="Stop relying on stale data. Build your pipeline on a foundation of human-verified intelligence and performance frameworks."
          ctaText="Request a Research Brief"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
