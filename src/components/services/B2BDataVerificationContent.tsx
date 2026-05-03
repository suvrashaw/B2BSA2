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

export function B2BDataVerificationContent() {
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
          title="100% Human-Verified B2B Data Verification Services"
          subtitle="Stop wasting your sales team’s time on bounced emails and wrong numbers. We provide manual, high-fidelity data verification that ensures your outreach lands with the right person, every time."
          badge="Zero Bounce"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Data Verification Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Email Syntax & Deliverability",
                "Direct-Dial Phone Verification",
                "Job Title & Role Validation",
                "Company Firmographics",
                "Social Profile Matching",
                "Intent Signal Validation",
                "CRM Data Enrichment",
                "Old Lead List Cleaning"
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
          title="Why Automated Data Is a Sales Risk"
          subtitle="The Quality Risk"
          content="Standard data scrapers have a 20-40% error rate. In B2B outreach, this leads to blacklisted domains, wasted SDR hours, and missed opportunities. Our B2B data verification services use a human-at-the-core approach — our researchers manually check every record against live sources.\n\nWe don't just check if an email exists; we check if the person still holds the title, if the company still has the need, and if the direct dial is active. We deliver 100% accuracy so your sales team can focus on closing, not correcting data."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our 5-Point Verification Framework"
          items={[
            { title: "Source Triangulation", description: "Verifying data across LinkedIn, company websites, and proprietary databases." },
            { title: "Live Ping Validation", description: "Checking email and phone connectivity without triggering spam filters." },
            { title: "Contextual Accuracy", description: "Ensuring the job role matches your specific ICP requirements." }
          ]}
        />

        <CTABanner 
          title="Clean Your Data. Fill Your Pipeline."
          subtitle="The cost of bad data is higher than the cost of verification. Protect your domain reputation and your sales efficiency."
          ctaText="Request a Data Sample"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
