"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function CorporateVideoProductionContent() {
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
          title="Corporate Video Production Solutions That Command Enterprise Attention"
          subtitle="Your corporate video should do more than explain what you do. It should make your market believe you are the right company to trust. We produce solutions that build authority and shorten sales cycles."
          badge="Brand Authority"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Corporate Video Content We Produce</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Brand & Culture Films", desc: "Communicate your values and mission through cinematic storytelling." },
                { title: "Product & Solution Explainers", desc: "Break down complex technology into clear, compelling narratives." },
                { title: "Executive Interview Series", desc: "Position your leadership as industry authorities." },
                { title: "Investor & Board Presentations", desc: "High-stakes video content for critical financial milestones." },
                { title: "Sales Enablement Content", desc: "Short, punchy videos designed to handle common sales objections." },
                { title: "Customer Testimonial Films", desc: "Let your biggest fans sell for you with authentic social proof." }
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
          title="How Corporate Video Accelerates Your Sales Cycle"
          subtitle="The ROI"
          content="Strong video helps buyers understand your value faster. It gives sales teams a sharper story, gives decision-makers confidence, and gives your website and presentations a richer way to communicate trust.\n\nVideo on landing pages can increase conversions by up to 80%. B2B buyers often watch video content before they ever pick up the phone to talk to a representative. Our production process ensures your story is told with the polish and clarity your audience expects."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Enterprise-Grade Production Standards"
          items={[
            { title: "Hollywood-Level Tech", description: "We use 4K+ cinema cameras, professional lighting, and studio-grade sound for every project." },
            { title: "Creative Storytelling", description: "Message development and scripting that goes beyond the surface level." },
            { title: "Global Talent Network", description: "Access to world-class editors, motion designers, and colorists under one roof." }
          ]}
        />

        <CTABanner 
          title="Make Your Brand Impossible to Ignore"
          subtitle="When your product, team, or story is complex, video makes it clear. We package that clarity with enterprise-level polish."
          ctaText="Start Your Corporate Video"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
