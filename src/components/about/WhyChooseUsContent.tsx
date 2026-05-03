"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { StatsBar } from "@/components/sections/StatsBar";
import { USPSection } from "@/components/sections/USPSection";

export function WhyChooseUsContent() {
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
          title="Why Choose B2B Sales Arrow"
          subtitle="We don't just build booths or run campaigns. We architect conversion environments."
          badge="The Advantage"
        />

        {/* Comparison Section */}
        <ComparisonTable 
          title="How We Compare"
          rows={[
            { feature: "Service Model", standard: "Fragmented vendors", b2bsa: "Unified growth architecture" },
            { feature: "Data Quality", standard: "Automated/Stale lists", b2bsa: "100% Human-verified intel" },
            { feature: "Video Standards", standard: "Basic event coverage", b2bsa: "Cinematic enterprise-grade" },
            { feature: "Lead Attribution", standard: "Vanity metrics (clicks)", b2bsa: "Pipeline influenced ($)" },
            { feature: "Global Execution", standard: "Local/Limited reach", b2bsa: "Seamless across 40+ countries" }
          ]}
        />

        {/* Stats Section */}
        <StatsBar 
          stats={[
             { label: "Pipeline Influenced", value: "$1.2B+" },
             { label: "Successful Events", value: "250+" },
             { label: "Data Researchers", value: "50+" },
             { label: "Global Reach", value: "40+ Cnt" }
          ]}
          dark
        />

        {/* USP Section */}
        <USPSection 
          title="The Foundation of Your Growth"
          items={[
            { title: "No Vendor Fragmentation", description: "By handling events, media, and lead gen under one roof, we eliminate data loss and strategy drift." },
            { title: "High-Intent Engineering", description: "Our processes are designed to stop the 'wrong' people and engage the right decision-makers." },
            { title: "Accountable Delivery", description: "We map every dollar spent to its eventual impact on your sales qualified pipeline." }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
