"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function LiveStreamingServicesContent() {
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
          title="Live Streaming Services That Bring Your Global Events to the World"
          subtitle="Do not limit your event audience to the people in the room. Our broadcast-grade live streaming services turn your keynotes and panels into a global digital experience."
          badge="Live Broadcast"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Broadcast-Grade Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Multi-Camera Switching", desc: "Dynamic visuals with professional live-directed camera switching." },
                { title: "Hybrid Event Support", description: "Seamlessly connecting on-site and remote speakers in real-time." },
                { title: "Multi-Platform Restreaming", description: "Broadcast to LinkedIn, YouTube, and your custom event hub simultaneously." },
                { title: "Real-Time Engagement", description: "Integrated Q&A, polls, and social feeds within the stream." },
                { title: "Secure CDN Delivery", description: "Stable, high-bandwidth streaming for global corporate audiences." },
                { title: "Instant Archive & VOD", description: "Your stream is recorded and ready for replay immediately after the event." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue transition-all group">
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="opacity-70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Scale Your Audience Without Increasing Your Footprint."
          subtitle="Hybrid ROI"
          content="Live streaming allows you to engage thousands of additional prospects who couldn't attend in person. It creates a 'digital second row' for your event, increasing visibility and sponsorship value while providing real-time data on viewer behavior.\n\nWe provide turnkey live stream solutions including on-site tech crews, internet failover management, encoder setup, and platform management. Whether it's a 30-minute executive update or a 3-day global conference, we ensure the stream remains stable, clear, and professional."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Multi-Platform Delivery and Hybrid Solutions"
          items={[
            { title: "Low-Latency Precision", description: "Ensuring your remote audience sees the action exactly as it happens." },
            { title: "Interactive Hubs", description: "Custom-branded landing pages for your live stream with chat and CTAs." },
            { title: "Global CDN Stability", description: "Enterprise-grade server networks that prevent buffering for thousands of users." }
          ]}
        />

        <CTABanner 
          title="Ready to Stream Your Next Global Keynote?"
          subtitle="Don't leave your global audience in the dark. Bring the event to them with broadcast-quality clarity."
          ctaText="Book Live Stream Services"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
