"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function DataAugmentationContent() {
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
          title="B2B Data Augmentation Services — Transform Incomplete Data Into Sales Intelligence"
          subtitle="Your CRM is only as valuable as the data inside it. Our augmentation services enrich incomplete contact and account records with verified information your teams can actually use."
          badge="Data Intelligence"
        />

        <TextSection 
          title="Data Fields We Enrich and Augment"
          subtitle="Precision Data"
          content="We enrich contact-level fields such as job title, direct email, LinkedIn URL, phone, department, and seniority; account-level fields such as revenue, employee count, industry, tech stack, and growth signals; and custom fields required by your sales process."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="How Our Data Augmentation Works"
          items={[
            { title: "Gap Analysis", description: "You share your CRM export or target list. We run a gap analysis to map required enrichment fields." },
            { title: "Human Verification", description: "Unlike automated tools that miss context, our team manually verifies critical data points to ensure 100% accuracy." },
            { title: "Clean Delivery", description: "We remove duplicates and deliver a clean, CRM-ready file that empowers your outreach motion." }
          ]}
        />

        <CTABanner 
          title="Your CRM Is Leaking Revenue. Let’s Fix That."
          subtitle="Better data improves segmentation, personalization, and sales productivity. Start with a sample list and see the difference."
          ctaText="Request a Data Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
