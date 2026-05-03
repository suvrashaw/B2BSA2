"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { StatsBar } from "@/components/sections/StatsBar";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function EventLeadGenerationContent() {
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
          title="Trade Show Lead Generation Systems That Fill Your Enterprise Pipeline"
          subtitle="Most companies attend events. We engineer them — with precision lead capture systems, real-time qualification, and CRM-ready handoffs that your sales team will love."
          badge="Conversion Engineered"
        />

        <StatsBar 
          stats={[
            { label: "Leads Generated", value: "15,000+" },
            { label: "Pipeline Influenced", value: "$1.2B" },
            { label: "Lead Lift", value: "340%" },
            { label: "CRM Sync", value: "Instant" }
          ]}
          dark
        />

        <TextSection 
          title="The Problem With Most Event Lead Strategies"
          subtitle="The Reality Gap"
          content="Badge scans without context are not pipeline. The real problem is the gap between a booth conversation and a sales-ready follow-up. Most leads are lost in the 48 hours after an event because they lack scoring, notes, or immediate routing.\n\nOur exhibitor lead capture service closes that gap with qualification logic, real-time scoring, and post-event nurture design. We turn foot traffic into data-rich opportunities that move the revenue needle."
          className="bg-brand-white"
        />

        <section className="py-24 bg-brand-gray/5">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Trade Show Lead Capture System</h2>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="p-10 rounded-3xl bg-white shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-brand-blue">Phase 1: Pre-Event Mapping</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Before the event, we map your ICP, define qualification criteria, create outreach lists, and support pre-event meeting generation.</p>
                  <ul className="space-y-3 text-sm font-medium text-gray-500">
                     <li className="flex items-center gap-2">• ICP Definition & Targeting</li>
                     <li className="flex items-center gap-2">• Meeting Pre-Scheduling</li>
                     <li className="flex items-center gap-2">• Custom Lead Scoring Logic</li>
                  </ul>
               </div>
               <div className="p-10 rounded-3xl bg-white shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 text-brand-blue">Phase 2: On-Ground Execution</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Our teams capture intent signals, qualify against BANT or CHAMP criteria, and note the context sales teams need to continue the conversation.</p>
                  <ul className="space-y-3 text-sm font-medium text-gray-500">
                     <li className="flex items-center gap-2">• Real-Time NFC/QR Capture</li>
                     <li className="flex items-center gap-2">• Human-Verified Qualification</li>
                     <li className="flex items-center gap-2">• Instant CRM Routing</li>
                  </ul>
               </div>
            </div>
          </div>
        </section>

        <USPSection 
          title="CRM-Ready Lead Capture and Reporting"
          items={[
            { title: "Direct Stack Integration", description: "We support CRM-ready workflows for Salesforce, HubSpot, Marketo, and custom systems." },
            { title: "Rich Prospect Profiles", description: "Lead records include contact data, company profile, discussion notes, and buying stage." },
            { title: "Next-Step Recommendations", description: "Every lead is delivered with a recommended follow-up action based on real-time conversation data." }
          ]}
        />

        <FAQAccordion 
          title="Event Lead Gen FAQs"
          items={[
            { question: "Do you only capture leads at the booth?", answer: "No. We support pre-event targeting, on-site capture, and post-event conversion strategies." },
            { question: "Can you integrate with our CRM?", answer: "Yes. We can prepare CRM-ready exports or support direct integration depending on your technical stack." },
            { question: "What makes a lead 'qualified'?", answer: "Qualification depends on your ICP, company fit, buying role, need, and urgency—all captured by our on-site team." }
          ]}
        />

        <CTABanner 
          title="Stop Leaving Leads on the Show Floor"
          subtitle="The show floor is expensive. Make sure every serious conversation has a clean, automated path into your pipeline."
          ctaText="Build Your Lead System"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
