"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function DataValidationContent() {
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
          title="B2B Data Validation Services — Clean Data Your Sales Team Can Actually Trust"
          subtitle="Invalid emails, stale contacts, and duplicate records quietly drain revenue. Our validation services clean and verify your database so your team can reach the right people with confidence."
          badge="Data Integrity"
        />

        <TextSection 
          title="What Our Data Validation Services Cover"
          subtitle="Comprehensive Cleaning"
          content="We validate email addresses, phone numbers, company domains, job titles, roles, and contact status. Our data cleansing service removes the noise that slows your team down and ensures your campaign deliverability stays high."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Data Validation Process"
          items={[
            { title: "Intake & Audit", description: "We ingest your current data and run automated format and syntax checks to identify immediate errors." },
            { title: "Human Verification", description: "Critical records are manually verified by our researchers to resolve ambiguities that software misses." },
            { title: "Quality Scoring", description: "We provide detailed reporting and clean data delivery, often paired with augmentation for a complete health program." }
          ]}
        />

        <CTABanner 
          title="Do Not Prospect With Broken Data"
          subtitle="Before launching another campaign, make sure the list is worth using. Clean data makes every outreach motion more precise."
          ctaText="Validate My List"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
