"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function MetaAdsB2BContent() {
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
          title="Meta Ads for B2B — Own the Social Environment Where Leaders Relax"
          subtitle="Facebook and Instagram are no longer just for consumers. We use Meta's massive data engine to retarget your enterprise prospects across the platforms they check most frequently."
          badge="High Frequency"
        />

        <TextSection 
          title="The Multi-Touch Retargeting Strategy"
          subtitle="Omnichannel Awareness"
          content="While LinkedIn is the place for professional discovery, Meta is the place for professional persistence. Our B2B Meta strategy focuses on retargeting prospects who have already interacted with your high-intent search ads or ABM content.\n\nBy appearing in a prospect's personal feed with cinematic video and high-value education, you build brand familiarity and trust that makes your sales outreach significantly more effective. We solve the 'One-Platform Trap' by creating a surround-sound effect for your top accounts."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our B2B Meta Framework"
          items={[
            { title: "Custom Audience Sync", description: "Injecting your CRM data directly into Meta to target only the decision-makers on your account list." },
            { title: "Social-First Creative", description: "Producing high-fidelity content that feels native to Instagram while maintaining enterprise authority." },
            { title: "Lead Form Optimization", description: "Reducing friction with Meta-integrated lead forms that capture data without leaving the app." }
          ]}
        />

        <CTABanner 
          title="Surround Your Top Prospects with Your Message"
          subtitle="Stop leaving your retargeting to chance. Build a high-frequency awareness engine on Meta."
          ctaText="Build Your Social Funnel"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
