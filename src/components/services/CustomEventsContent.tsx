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

export function CustomEventsContent() {
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
          title="Custom Event Solutions That Position Your Brand as the Market Authority"
          subtitle="You do not have to wait for the market’s event calendar. We design and produce custom event solutions that put your brand in control of the room and the commercial outcome."
          badge="Proprietary Experiences"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Custom Event Formats We Produce</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Executive Roundtables", desc: "Private, high-level discussions for C-suite decision-makers." },
                { title: "Hosted Buyer Programs", desc: "Targeted networking events designed for direct procurement intent." },
                { title: "Client Summits", desc: "Deep-dive user conferences that strengthen loyalty and momentum." },
                { title: "Product Launches", desc: "Immersive brand reveals that command attention and press coverage." },
                { title: "VIP Networking", desc: "Exclusive hospitality experiences in world-class environments." },
                { title: "Hybrid Roadshows", desc: "Multi-city tours that combine physical presence with global digital reach." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-gray/5 border border-brand-charcoal/5 hover:bg-brand-blue hover:text-white transition-all group">
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="A Brand Experience Agency Approach"
          subtitle="Brand Experience"
          content="Strong custom events feel less like marketing and more like a curated experience your audience chose to attend. As a brand experience agency, we shape each moment around a business goal: executive access, product momentum, customer loyalty, market education, or partner growth.\n\nSenior buyers protect their time. That is why every invitation, agenda, room design, speaker moment, and follow-up asset must feel intentional. We create events that are worth attending and commercially useful after the room clears."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="End-to-End Custom Event Production"
          items={[
            { title: "Venue Strategy & Sourcing", description: "Finding the perfect environment that aligns with your brand's authority." },
            { title: "Speaker & Agenda Curation", description: "Ensuring the content delivered is high-value and engineered for retention." },
            { title: "Live Streaming & Capture", description: "Turning your 3-day event into 12 months of high-impact video assets." }
          ]}
        />

        <CTABanner 
          title="Your Audience Deserves an Event Worth Attending"
          subtitle="If you want senior buyers to give you their time, the experience must earn it. We make sure it does."
          ctaText="Plan Your Custom Event"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
