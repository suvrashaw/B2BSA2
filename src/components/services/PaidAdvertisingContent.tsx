"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function PaidAdvertisingContent() {
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
          title="B2B Paid Advertising That Generates Pipeline, Not Just Clicks"
          subtitle="We manage high-performance paid media programs for enterprise brands — every campaign built around pipeline metrics, not vanity numbers."
          badge="Paid Media"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Paid Channels We Manage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Google Search Ads (PPC)", desc: "Capturing high-intent buyers exactly when they search for your solutions." },
                { title: "Google Display & Programmatic", desc: "Building brand frequency across the web's most premium B2B environments." },
                { title: "YouTube Advertising", desc: "Using cinematic video to build executive authority at scale." },
                { title: "Retargeting & ABM Ads", desc: "Staying top-of-mind with your most valuable target accounts." },
                { title: "Bing/Microsoft Ads", desc: "Reaching professional audiences in a lower-competition environment." },
                { title: "Social Discovery Ads", desc: "Expanding reach across Meta and X with B2B-specific targeting layers." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue transition-all group">
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="How We Build Paid Campaigns That Actually Convert"
          subtitle="Our Approach"
          content="Most agencies optimize for CPL (Cost Per Lead). We optimize for CP-SQL (Cost Per Sales Qualified Lead). By integrating your CRM data back into our bidding algorithms, we teach platforms like Google and LinkedIn to find more of your best customers, not just anyone who will click a button.\n\nOur process includes audience intelligence, creative development, landing page optimization, and full-funnel attribution reporting. We treat every ad dollar as an investment in your pipeline."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Why Our Performance Strategy Wins"
          items={[
            { title: "Audience & ICP Targeting", description: "Using human-verified data to build laser-focused targeting lists." },
            { title: "Ad Copy & Creative Craft", description: "Messaging that speaks to executive pain points, not just features." },
            { title: "Full-Funnel Attribution", description: "Mapping every click to a specific CRM record and revenue impact." }
          ]}
        />

        <CTABanner 
          title="Make Every Ad Dollar Work Harder"
          subtitle="Stop guessing which ads are driving revenue. Get a performance audit and start building a real pipeline engine."
          ctaText="Request a Paid Media Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
