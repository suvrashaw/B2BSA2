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

export function MediaProductionContent() {
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
          title="B2B Media Production That Builds Enterprise Authority"
          subtitle="We produce cinematic content that makes your brand impossible to ignore — from live event coverage to corporate video series and everything in between."
          badge="Cinematic Quality"
        />

        <ServicesGrid 
          title="Our Media Production Capabilities"
          subtitle="Expertise"
          services={[
            { 
              title: "Event Video Production", 
              description: "Capture the energy, conversations, and key moments of your global exhibitions.",
              href: "/services/media-production/event-video-production",
              icon: "calendar"
            },
            { 
              title: "Corporate Video Production", 
              description: "Brand films and executive interviews that build trust and shorten sales cycles.",
              href: "/services/media-production/corporate-video-production",
              icon: "users"
            },
            { 
              title: "Video Editing Services", 
              description: "Professional post-production to turn raw footage into high-conversion marketing assets.",
              href: "/services/media-production/video-editing-services",
              icon: "layout"
            },
            { 
              title: "Live Streaming Services", 
              description: "Broadcast-quality streaming for virtual and hybrid events with global reach.",
              href: "/services/media-production/live-streaming-services",
              icon: "zap"
            }
          ]}
        />

        <TextSection 
          title="Why Enterprise Brands Can't Afford Low-Quality Content"
          subtitle="Quality Matters"
          content="Brand perception is set in seconds. Poor production quality signals poor brand quality. High-fidelity media drives trust, engagement, and conversion — especially in B2B where every touchpoint is scrutinized.\n\nOur commercial video production company delivers high-fidelity content that makes your brand look credible and enterprise-ready. We don't just film; we shape story, message, and visual language so every asset has a role: educate the market, support sales, or extend the value of an event."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Production Philosophy"
          items={[
            { title: "Cinematic Storytelling", description: "We Tell Stories That Sell. We bring the emotional resonance of film to the functional goals of B2B." },
            { title: "Brand-Aligned Aesthetics", description: "Every Frame Is a Brand Decision. We ensure visual consistency across all video touchpoints." },
            { title: "Integrated Delivery", description: "From Script to Screen — All Under One Roof. We handle everything from concept to final export." }
          ]}
        />

        <section className="py-24 bg-brand-charcoal text-white">
           <div className="container mx-auto px-8 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">Production Specs</h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">Our video production services include 4K cinema cameras, multi-camera capture, drone footage, studio and on-location crews, and global production coordination.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {["4K Resolution", "Multi-Cam", "Motion Graphics", "Color Grading"].map((spec, i) => (
                   <div key={i} className="p-4 rounded-xl border border-white/10 font-bold uppercase tracking-widest text-xs">{spec}</div>
                 ))}
              </div>
           </div>
        </section>

        <CTABanner 
          title="Produce Content Your Audience Actually Remembers"
          subtitle="Content should not disappear after one campaign. We build assets your teams can keep using."
          ctaText="Start Your Media Project"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
