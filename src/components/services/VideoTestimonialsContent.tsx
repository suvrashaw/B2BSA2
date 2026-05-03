"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function VideoTestimonialsContent() {
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
          title="Video Testimonials — Turn Your Success Stories Into High-Trust Sales Assets"
          subtitle="Enterprise buyers trust peers, not brochures. We capture cinematic, authentic customer testimonials that validate your solution and compress your sales cycle."
          badge="Social Proof"
        />

        <TextSection 
          title="The Authority of Peer-to-Peer Validation"
          subtitle="Trust Architecture"
          content="In high-ticket enterprise sales, trust is the primary friction point. A written quote can be fabricated, but a cinematic video testimonial showing a real leader at a real company discussing real ROI is undeniable proof.\n\nWe don't just 'record interviews.' We produce peer-level validation films. Our team understands how to ask the right questions to extract the 'Commercial Impact' of your solution, framing it in a way that resonates with your future prospects."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Video Testimonial Methodology"
          items={[
            { title: "On-Site Global Coverage", description: "Our crews deploy to your clients' locations worldwide to capture high-fidelity authentic footage." },
            { title: "Story-Led Interviewing", description: "Using trained journalists to extract deep pain-point and ROI narratives that sell." },
            { title: "Modular Asset Creation", description: "Providing full case study films plus 'micro-content' clips for LinkedIn and sales decks." }
          ]}
        />

        <CTABanner 
          title="Capture Your Next Major Success Story"
          subtitle="Don't let your best results go undocumented. Turn your client successes into a permanent sales engine."
          ctaText="Book a Production Brief"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
