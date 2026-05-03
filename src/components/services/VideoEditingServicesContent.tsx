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

export function VideoEditingServicesContent() {
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
          title="Professional Video Editing Services That Elevate Your Brand Content"
          subtitle="Raw footage has potential. Edited footage has purpose. Our post-production team transforms your event footage and interviews into polished, conversion-ready assets."
          badge="Post-Production"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Post-Production Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Full-Length Edit & Assembly",
                "Color Correction & Grading",
                "Motion Graphics & Title Design",
                "Subtitle & Caption Generation",
                "Social Media Cut-Downs",
                "Sound Design & Music Licensing",
                "Thumbnail & Poster Frame Design",
                "Format Optimization (Web/Social)"
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-gray/5 border border-brand-charcoal/5 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                   <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Fast Turnaround. Enterprise-Scale Volume."
          subtitle="Scalable Editing"
          content="Whether you need a single hero video or a high-volume editing program for monthly content, we create workflows for fast review, clean file transfer, version control, and consistent brand standards.\n\nWe provide Standard, Express, and Rush delivery tiers to meet your campaign deadlines. Our dedicated editing team acts as an extension of your creative department, ensuring that no raw footage goes to waste and every frame aligns with your brand identity."
          className="bg-brand-gray/5"
        />

        <section className="py-24 bg-brand-charcoal text-white">
           <div className="container mx-auto px-8">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-center">Who Uses Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                 {[
                   { title: "Event Teams", desc: "With post-show content backlogs that need to be turned into sizzle reels fast." },
                   { title: "Marketing Teams", desc: "Running multi-channel campaigns that require variations for LinkedIn, YouTube, and X." },
                   { title: "Sales Teams", desc: "Needing polished product demo videos and high-impact case study films." },
                   { title: "HR Teams", desc: "Building employer brand content and internal culture films." }
                 ].map((use, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <h3 className="text-xl font-bold mb-2 text-brand-cyan">{use.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{use.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTABanner 
          title="Your Footage. Our Craft. Extraordinary Results."
          subtitle="You already captured the raw material. We shape it into content people will actually watch and remember."
          ctaText="Send Us Your Footage"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
