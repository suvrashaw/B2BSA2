"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function LinkedInAdsContent() {
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
          title="LinkedIn Ads for B2B — The Highest-Intent Enterprise Pipeline Channel"
          subtitle="LinkedIn is where enterprise buyers make decisions. We engineer LinkedIn ad campaigns that target your exact ICP — by title, company, industry, and seniority — and convert them into qualified pipeline."
          badge="B2B Specialist"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">LinkedIn Ad Formats We Specialize In</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Sponsored Content", desc: "Native ads in the feed including Single Image, Carousel, and Video Ads." },
                { title: "LinkedIn Lead Gen Forms", desc: "High-conversion forms that auto-fill with profile data for zero friction." },
                { title: "Sponsored InMail", desc: "Direct, personalized messages to the inboxes of your most valuable prospects." },
                { title: "Dynamic Ads", desc: "Personalized sidebar ads that scale across your target account list." },
                { title: "Document Ads", desc: "Promote whitepapers and case studies directly for lead capture." },
                { title: "Event Ads", desc: "Drive registrations and attendance for your webinars and live events." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue transition-all group">
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Why LinkedIn Is the #1 Paid Channel for Enterprise B2B"
          subtitle="The Advantage"
          content="4 out of 5 LinkedIn members drive business decisions. While CPL may be higher than other platforms, the Lead Quality is unmatched. We help you target specific named accounts, upload account lists (ABM), and tailor messaging to each account tier.\n\nOur LinkedIn ads management process includes ICP definition, audience build, ad creative development, campaign monitoring, and optimization. We ensure your brand stays top-of-mind with the people who actually sign the contracts."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="LinkedIn Ads + Account-Based Marketing (ABM)"
          items={[
            { title: "Targeted Account Lists", description: "Reaching the exact list of companies your sales team is chasing." },
            { title: "Seniority-Level Filters", description: "Ensuring your budget is spent on decision-makers (Director+) not just anyone." },
            { title: "Pipeline Attribution", description: "Measuring how LinkedIn interactions contribute to your won deals." }
          ]}
        />

        <CTABanner 
          title="Your Next Enterprise Customer Is on LinkedIn Right Now"
          subtitle="Don't waste your budget on generic platforms. Put your message in front of the people who matter most."
          ctaText="Request a LinkedIn Ads Audit"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
