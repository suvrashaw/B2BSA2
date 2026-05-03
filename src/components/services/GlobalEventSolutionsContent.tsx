"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { TextSection } from "@/components/sections/TextSection";
import { CTABanner } from "@/components/sections/CTABanner";

export function GlobalEventSolutionsContent() {
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
          title="Global Event Solutions That Command Every Floor You Enter"
          subtitle="From GITEX Dubai to CES Las Vegas — we design, build, and execute immersive event experiences that generate enterprise pipeline across every major market."
          badge="End-to-End"
        />

        <StatsBar 
          stats={[
            { label: "Events Executed", value: "250+" },
            { label: "Pipeline Influenced", value: "$1.2B" },
            { label: "Countries Served", value: "40+" },
            { label: "Booth Designs", value: "500+" }
          ]}
          dark
        />

        <ServicesGrid 
          title="End-to-End Global Event Solutions Under One Roof"
          subtitle="What We Do"
          services={[
            { 
              title: "Trade Show Booth Design", 
              description: "Architectural exhibition environments engineered to convert foot traffic into qualified pipeline.",
              href: "/services/global-event-solutions/trade-show-booth-design",
              icon: "layout"
            },
            { 
              title: "Event Lead Generation", 
              description: "Precision systems to capture, qualify, and route enterprise leads in real time on the show floor.",
              href: "/services/global-event-solutions/event-lead-generation",
              icon: "zap"
            },
            { 
              title: "Industry Events", 
              description: "Strategic presence and management at the world's most high-ROI B2B industry conferences.",
              href: "/services/global-event-solutions/industry-events",
              icon: "globe"
            },
            { 
              title: "Custom Events", 
              description: "Proprietary event experiences built entirely around your brand's unique commercial objectives.",
              href: "/services/global-event-solutions/custom-events",
              icon: "users"
            },
            { 
              title: "Event Booth Rental", 
              description: "Premium, brand-configurable booth inventory available globally — deploy in weeks, not months.",
              href: "/services/global-event-solutions/event-booth-rental",
              icon: "calendar"
            },
            { 
              title: "Trade Show Booth Builder", 
              description: "Full fabrication and production services for high-pressure, custom exhibition structures.",
              href: "/services/global-event-solutions/trade-show-booth-builder",
              icon: "wrench"
            },
            { 
              title: "Modular Booth Systems", 
              description: "High-end, reconfigurable, and tool-free booth systems for multi-city event tours.",
              href: "/services/global-event-solutions/modular-portable-booths",
              icon: "box"
            }
          ]}
        />

        <TextSection 
          title="The $1.2B Reason B2B Enterprises Prioritize Live Events"
          subtitle="Why It Matters"
          content="Enterprise buyers do not make complex decisions from a single ad click. They need trust, context, proof, and conversation. Live events compress months of relationship-building into a few focused days, especially when your presence is designed as a conversion environment rather than a static display.\n\nOur B2B event solutions are built around one question from the beginning: what will this event return? By eliminating vendor fragmentation and aligning design with lead capture, we ensure your event budget delivers measurable pipeline value."
          className="bg-brand-gray/5"
        />

        <ProcessTimeline 
          title="Our 5-Phase Global Event Execution Framework"
          subtitle="The Process"
          steps={[
            { 
              title: "Strategic Planning & Market Intelligence", 
              description: "We identify the event opportunity, audience, competitive landscape, and commercial goal before drawing a single line." 
            },
            { 
              title: "Concept Design & Spatial Architecture", 
              description: "We shape the booth, experience, and visitor journey around buyer intent and psychological conversion triggers." 
            },
            { 
              title: "Fabrication & Pre-Show Logistics", 
              description: "Production, shipping, storage, compliance, and scheduling are managed by our global team before pressure builds." 
            },
            { 
              title: "On-Ground Execution & Lead Capture", 
              description: "Booth operations, staff alignment, and precision qualification systems run in real time to capture every opportunity." 
            },
            { 
              title: "Post-Event Analytics & Pipeline Handoff", 
              description: "Your sales team receives clean data, lead quality insights, and next-step recommendations to ensure ROI." 
            }
          ]}
        />

        <FAQAccordion 
          title="Frequently Asked Questions"
          items={[
            { 
              question: "What types of global events do you support?", 
              answer: "We support trade shows, industry conferences, proprietary events, executive roundtables, booth rentals, custom builds, and event-led lead generation programs." 
            },
            { 
              question: "How early should we engage your team?", 
              answer: "For large international events, 12 to 20 weeks is ideal. For rental or modular formats, shorter timelines may be possible depending on location and inventory." 
            },
            { 
              question: "Can you handle booth design and lead generation together?", 
              answer: "Yes. That is where our model works best: the physical environment, team flow, lead capture, and post-event routing are designed as one cohesive system." 
            }
          ]}
        />

        <CTABanner 
          title="Ready to Own the Floor at Your Next Global Event?"
          subtitle="Your next event can be more than a presence. It can become a conversion environment engineered for executive visibility."
          ctaText="Book a Free Consultation"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
