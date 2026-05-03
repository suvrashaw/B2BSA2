"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function EventVideoProductionContent() {
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
          title="Event Video Production That Turns Live Moments Into Lasting Assets"
          subtitle="Your event may last three days, but the right video content can support your marketing for months. We capture the energy, conversations, and key moments that make your event worth remembering."
          badge="Event Content"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Event Video Content We Produce</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Event Highlight & Sizzle Reels",
                "Booth Walkthrough & Feature Videos",
                "Speaker & Keynote Coverage",
                "Client Testimonial Capture On-Site",
                "Product Demo Films",
                "Social Cut-Downs (15s, 30s, 60s)",
                "Post-Event Recap Content",
                "Executive Interview Series"
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-gray/5 border border-brand-charcoal/5 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                   <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Your Event Lasts 3 Days. Your Video Lasts 3 Years."
          subtitle="The ROI of Capture"
          content="Event video production gives your team assets for social media, sales decks, landing pages, investor updates, internal recaps, and future event promotion. The right footage helps your event keep working after the booth is packed away.\n\nWe begin with shot planning, messaging priorities, interview lists, and key moments. During the event, our crew captures multi-camera footage and interviews. Afterward, we edit, grade, package, and deliver formats optimized for web, social, sales, and internal use."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Global Coverage for Global Events"
          items={[
            { title: "40+ Markets Supported", description: "Specialist coverage available for GITEX, CES, MWC, and major industry trade shows." },
            { title: "Local Crew Network", description: "Avoid heavy travel costs with our verified network of directors and videographers in key hubs." },
            { title: "Fast Turnaround", description: "Get your sizzle reels within 24-48 hours while the event buzz is still high." }
          ]}
        />

        <CTABanner 
          title="Your Next Event Deserves to Be Remembered"
          subtitle="Do not let the value of the event end when the lights go down. Capture it properly."
          ctaText="Book Event Video Production"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
