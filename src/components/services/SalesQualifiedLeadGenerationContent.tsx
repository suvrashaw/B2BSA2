"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function SalesQualifiedLeadGenerationContent() {
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
          title="Sales Qualified Lead Generation — We Fill Your Pipeline With Decision-Makers, Not Data"
          subtitle="Marketing Qualified Leads don't close deals. We deliver verified, sales-ready enterprise prospects — aligned to your ICP, scored, and routed directly to your sales team."
          badge="SQL Factory"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">What a SQL Looks Like</h2>
            <div className="max-w-3xl mx-auto p-10 rounded-[3rem] bg-brand-charcoal text-white shadow-2xl">
               <ul className="space-y-6">
                  {[
                    "Verified Direct Email & Mobile Number",
                    "Confirmed Decision-Making Authority",
                    "Explicit Pain Point Identified",
                    "Company Revenue & Headcount Match",
                    "Recent Technology Install-Base Check",
                    "Engagement History & Intent Context"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg">
                       <div className="w-6 h-6 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-brand-charcoal rounded-full" />
                       </div>
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </section>

        <TextSection 
          title="Why Most Lead Generation Programs Fail Sales Teams"
          subtitle="The Quality Gap"
          content="Generic lists and MQLs that never convert are the biggest drain on sales productivity. Most agencies stop at the 'form fill' or the 'click.' We go further — using our internal research team to qualify every prospect against BANT (Budget, Authority, Need, Timeline) or CHAMP frameworks before they ever reach your SDRs.\n\nWe solve the misalignment between marketing and sales by treating every lead as a potential revenue asset. Our SQL generation system is built for the high-stakes world of enterprise B2B, where quality and context are the only metrics that matter."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our Multi-Channel SQL Generation Approach"
          items={[
            { title: "LinkedIn Outbound & Ads", description: "Targeting executive audiences where they are most professionally active." },
            { title: "Event-Driven Capture", description: "Converting physical handshakes into high-fidelity digital records." },
            { title: "Cold Email & Direct Outreach", description: "Precision messaging that bypasses gatekeepers to reach decision-makers." }
          ]}
        />

        <CTABanner 
          title="Your Sales Team Deserves Leads That Are Ready to Buy"
          subtitle="Stop fighting with bad data. Start empowering your sales team with the opportunities they need to win."
          ctaText="Build Your SQL Program"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
