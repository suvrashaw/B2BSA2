"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function HumanPoweredIntelligenceContent() {
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
          title="Human-Powered B2B Market Intelligence — The Insight Automated Tools Cannot Deliver"
          subtitle="AI can scrape. Humans understand. Our market intelligence combines structured research with expert interpretation to help enterprise teams see what automated tools miss."
          badge="High Fidelity Intel"
        />

        <TextSection 
          title="Why Human Intelligence Delivers What AI Cannot"
          subtitle="The Insight Gap"
          content="Markets are shaped by motives, timing, positioning, pressure, and nuance. While data aggregation tools are useful, our analysts interpret what the data suggests, what competitors imply, and what buyers actually mean. We provide the 'Why' behind the 'What.'"
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Research Services"
          items={[
            { title: "Competitor Analysis", description: "Deep-dive mapping of competitor positioning, pricing strategies, and market share shifts." },
            { title: "Landscape Mapping", description: "Identifying every relevant account and decision-maker in your TAM (Total Addressable Market)." },
            { title: "Buyer Behavior Insights", description: "Win/loss interviews and expert panels to understand the specific triggers that drive enterprise purchase decisions." }
          ]}
        />

        <CTABanner 
          title="The Most Valuable Strategic Meetings Start With the Right Intelligence"
          subtitle="When leadership teams have sharper insight, decisions become faster and more grounded. Build your strategy on human-powered intelligence."
          ctaText="Commission a Custom Report"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
