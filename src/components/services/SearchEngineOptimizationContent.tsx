"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function SearchEngineOptimizationContent() {
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
          title="B2B SEO That Captures High-Intent Decision Makers"
          subtitle="Visibility is the foundation of authority. We build SEO and content systems that ensure your enterprise brand appears exactly when and where your buyers are researching solutions."
          badge="Organic Growth"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our B2B SEO & Content Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "High-Intent Keyword Research",
                "Technical SEO Audits",
                "Editorial Content Strategy",
                "B2B Thought Leadership",
                "On-Page Optimization",
                "Authority Link Building",
                "Local & Global SEO",
                "Analytics & ROI Tracking"
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
          title="Why B2B SEO Is About Intent, Not Just Traffic"
          subtitle="Strategic SEO"
          content="Ranking for high-volume terms that bring the 'wrong' traffic is a waste of budget. We prioritize long-tail, high-intent keywords that signal a buyer is in the consideration or decision phase. Our goal is to connect your brand with executive-level searchers looking for specific outcomes.\n\nWe combine technical excellence with editorial authority. Our content teams produce whitepapers, case studies, and articles that search engines love and buyers actually read. Every piece of content is engineered to support your wider lead generation and sales objectives."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Content-Led SEO Framework"
          items={[
            { title: "Topical Authority Mapping", description: "Identifying the core themes your brand must own to be seen as the industry leader." },
            { title: "Technical Hygiene", description: "Ensuring your site architecture is fast, secure, and easily crawlable by global search engines." },
            { title: "Conversion Integration", description: "Optimizing content with clear CTAs and paths into your lead generation funnel." }
          ]}
        />

        <CTABanner 
          title="Claim Your Authority in Search"
          subtitle="If you are not visible in search, you are invisible to the modern buyer. Let's build your organic authority starting today."
          ctaText="Request an SEO Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
