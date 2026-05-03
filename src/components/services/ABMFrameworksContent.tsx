"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";

export function ABMFrameworksContent() {
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
          title="Account-Based Marketing Frameworks That Secure High-Value Deals"
          subtitle="Stop casting wide nets. Our ABM frameworks help you identify, engage, and convert your most valuable enterprise accounts through high-precision multi-channel coordination."
          badge="Strategic ABM"
        />

        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our ABM Execution Models</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "1-to-1 ABM", desc: "Hyper-personalized strategy for your top 10 global accounts with high deal value." },
                { title: "1-to-Few ABM", desc: "Clustered account strategies for specific industries or technology segments." },
                { title: "1-to-Many ABM", desc: "Scalable account-based targeting for high-volume enterprise outreach." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-brand-blue">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TextSection 
          title="Why ABM Is the Gold Standard for Enterprise B2B"
          subtitle="Strategic Advantage"
          content="Enterprise sales involve multiple decision-makers and months of evaluation. General marketing fails to address the specific pain points of a high-value account committee. ABM aligns marketing and sales to treat every target account as its own market.\n\nBy combining our human-verified research with personalized content, LinkedIn targeting, and custom event experiences, we create a 'surround sound' effect for your prospects. They see your brand where they work, where they research, and where they network."
          className="bg-brand-gray/5"
        />

        <USPSection 
          title="Our ABM Implementation Framework"
          items={[
            { title: "Account Selection & Scoring", description: "Using data to identify the accounts with the highest propensity to buy." },
            { title: "Committee Mapping", description: "Identifying the influencers, gatekeepers, and decision-makers within every account." },
            { title: "Multi-Channel Orchestration", description: "Coordinating ads, content, email, and events into one seamless brand experience." }
          ]}
        />

        <CTABanner 
          title="Identify Your Top-Tier Accounts"
          subtitle="Your next big deal is already in your market. We help you find the right accounts and build the path to a closed-won outcome."
          ctaText="Start Your ABM Strategy"
          ctaHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
