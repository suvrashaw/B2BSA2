"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function ModularPortableBoothsContent() {
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
          title="Modular & Portable Trade Show Booths — Engineered for Enterprise Efficiency"
          subtitle="Deploy a premium, branded presence at any event — in any country — with our modular booth systems. Reconfigurable. Lightweight. Built to perform at scale."
          badge="Agile Presence"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Modular Booth Range</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "10x10 Modular Kits", desc: "Perfect for starter and satellite booths with fast assembly." },
                { title: "10x20 & 20x20 Inlines", desc: "Reconfigurable layouts that grow with your event calendar." },
                { title: "Island Modular Systems", desc: "High-impact, 360-degree visibility using modular components." },
                { title: "Hybrid Accent Builds", desc: "Combining modular efficiency with custom structural accents." },
                { title: "Branded Tensile Fabric", desc: "Seamless, high-resolution graphic systems for a premium look." },
                { title: "Portable Pop-Ups", desc: "Tabletop and floor displays for executive roadshows and VIP events." }
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
          title="Why Enterprise Brands Are Moving to Modular Booth Systems"
          subtitle="The Agile Advantage"
          content="Custom timber builds are impressive but expensive to ship and impossible to reconfigure. Modular trade show booths give you the look of a custom build with the flexibility of a system. You can scale a 10x10 booth into a 20x20 island across different shows, significantly reducing your cost per use.\n\nOur systems are tool-free, lightweight, and airline-checkable in many cases. This makes them the ideal choice for multi-city event tours, emerging market activations, and sales enablement environments where speed and consistency are critical."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="What Makes Our Modular Systems Different"
          items={[
            { title: "Tool-Free Assembly", description: "Set up your entire presence in under 4 hours without specialized labor." },
            { title: "Integrated LED & Tech", description: "Modular slots for screens, lighting, and interactive digital elements." },
            { title: "Sustainable Materials", description: "Recyclable aluminum frames and reusable fabric panels for lower eco-impact." }
          ]}
        />

        <CTABanner 
          title="One Booth System. Every Event. Any Country."
          subtitle="Don't build from scratch every time. Invest in a modular system that grows with your brand."
          ctaText="Request a Modular Quote"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
