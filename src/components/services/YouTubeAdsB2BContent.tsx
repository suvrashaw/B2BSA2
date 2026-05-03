"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function YouTubeAdsB2BContent() {
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
          title="YouTube Ads for B2B — Intent-Driven Video Growth"
          subtitle="Stop chasing views. Start building pipeline. We combine cinematic production with Google's deepest search-intent data to put your enterprise solution in front of decision-makers when they are looking for answers."
          badge="High Intent"
        />

        <TextSection 
          title="Why YouTube is the Secret Weapon for Enterprise B2B"
          subtitle="The Video Advantage"
          content="YouTube is the world's second-largest search engine. For B2B, it's not about 'going viral.' It's about 'Custom Intent.' We sync your YouTube targeting with what prospects are searching for on Google, ensuring your ad appears at the precise moment they are researching your category.\n\nOur approach treats YouTube as a full-funnel performance engine: from high-impact brand films that build authority to detailed product walkthroughs that convert mid-funnel leads into SQLs."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our YouTube for B2B Strategy"
          items={[
            { title: "Custom Intent Sync", description: "Bidding on prospects who have recently searched for your competitors or key category terms on Google." },
            { title: "Skip-Proof Production", description: "Hooking decision-makers in the first 5 seconds with high-fidelity, problem-first storytelling." },
            { title: "Retargeting Ecosystem", description: "Using YouTube to stay top-of-mind for prospects who have already visited your site or interacted with your ABM ads." }
          ]}
        />

        <CTABanner 
          title="Turn Your Channel Into a Revenue Driver"
          subtitle="Don't just upload videos. Build a high-precision video advertising engine that targets executive intent."
          ctaText="Build Your YouTube Strategy"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
