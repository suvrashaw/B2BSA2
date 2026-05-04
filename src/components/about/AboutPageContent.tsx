"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { EditorialHero } from "@/components/about/editorial-hero";
import { WhisperText } from "@/components/about/whisper-text";
import { GlobalPresence } from "@/components/about/global-presence";
import { TeamGrid } from "@/components/about/team-grid";
import { ClientsMarquee } from "@/components/about/clients-marquee";
import { CinematicFooter } from "@/components/layout/CinematicFooter";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { StatsBar } from "@/components/sections/StatsBar";
import { TextSection } from "@/components/sections/TextSection";
import { USPSection } from "@/components/sections/USPSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { ABOUT_TEAM, ABOUT_PRESENCE } from "@/content/page-sections/about-us";

export function AboutPageContent() {
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
    <div className="bg-brand-white text-brand-charcoal min-h-screen selection:bg-brand-cyan selection:text-white transition-colors duration-500">
      <Header />
      <main>
        {/* 1. HERO SECTION */}
        <EditorialHero />
        
        {/* 2. MISSION & VISION */}
        <section className="py-24 bg-brand-white relative overflow-hidden">
          <div className="container mx-auto px-8 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-8">
                Our Mission
              </div>
              <blockquote className="text-3xl md:text-5xl font-heading font-bold text-brand-charcoal leading-tight italic">
                &quot;Our mission is to transform how B2B brands connect with their audiences through innovative, immersive experiences that drive measurable business results.&quot;
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-8">
                Our Vision
              </div>
              <p className="text-2xl md:text-3xl font-heading font-medium text-gray-600 leading-relaxed max-w-3xl mx-auto">
                To be the global authority in architecting conversion environments where strategy, design, and technology converge to create unprecedented enterprise value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. BY THE NUMBERS */}
        <StatsBar 
          stats={[
            { label: "Events Executed", value: "250+" },
            { label: "Pipeline Influenced", value: "$1.2B" },
            { label: "Countries Served", value: "40+" },
            { label: "Client Retention", value: "98%" }
          ]}
        />

        {/* 3. ORIGIN STORY */}
        <TextSection 
          title="How B2B Sales Arrow Was Built"
          subtitle="Our Origin"
          content="B2B Sales Arrow was created to solve a clear gap: enterprise brands were investing heavily in events and campaigns, but the work was fragmented, hard to measure, and disconnected from sales outcomes. We saw Fortune 500 companies struggling with generic booths that failed to capture leads and marketing programs that lacked accountability.\n\nWe built a model where event solutions, corporate video production, performance marketing, and B2B market research capabilities work together. By combining these four critical pillars under one roof, we eliminate the 'vendor fragmentation' that drains enterprise budgets. Today, we are recognized as a globally trusted Marketing Technology partner, dedicated to turning every brand interaction into a measurable revenue asset."
          className="bg-brand-gray/10"
        />

        {/* 3.5 FOUNDER INSPIRATION */}
        <section className="py-24 bg-brand-white relative">
           <div className="container mx-auto px-8 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                      alt="Philanthropy Inspiration" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                 </motion.div>
                 <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                 >
                    <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-6">Our Inspiration</div>
                    <h3 className="text-2xl md:text-4xl font-bold font-heading mb-6 italic text-brand-charcoal">&quot;Kindled by Compassion&quot;</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                       In 2004, inspired by philanthropic efforts in arid Rajasthan, our founder embarked on a journey rooted in the belief that business should be a force for positive change. Witnessing the impact of large-scale social contribution shaped our dedication to excellence and high-integrity partnerships.
                    </p>
                    <div className="h-px w-24 bg-brand-blue" />
                 </motion.div>
              </div>
           </div>
        </section>

        {/* 6. VALUES */}
        <section className="py-24 bg-brand-white relative transition-colors duration-500">
          <div className="container mx-auto px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase">
                Core Values
              </div>
              <WhisperText 
                text="Guided by accountability, precision, and global execution."
                highlights={["accountability", "precision"]}
                highlightColor="blue"
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight mb-8 max-w-4xl transition-colors duration-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Accountability Over Activity", 
                  desc: "We do not measure success by how busy a campaign looks. We measure it by the outcomes it creates — qualified conversations, stronger market presence, cleaner data, better content, measurable pipeline, and business impact your team can actually see." 
                },
                { 
                  title: "Precision Over Volume", 
                  desc: "More is not always better. More leads, more campaigns, more content, or more events only matter when they reach the right audience with the right message. We focus on quality, relevance, and conversion instead of chasing empty activity." 
                },
                { 
                  title: "Partnership Over Vendor Relationships", 
                  desc: "Enterprise growth work needs more than execution. It needs context, trust, and shared accountability. We work as a strategic partner — understanding your objectives, challenging weak assumptions, and staying connected to the commercial outcome." 
                },
                { 
                  title: "Global Thinking, Local Execution", 
                  desc: "B2B markets are global, but execution is local. We combine international strategy with regional understanding, local market behavior, venue realities, cultural context, and on-ground delivery across key markets." 
                }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-2xl bg-brand-gray/5 border border-brand-charcoal/5 hover:border-brand-blue/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-brand-charcoal">{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OUR SOLUTION (USP) */}
        <USPSection 
          title="The B2B Sales Arrow Advantage"
          items={[
            { title: "Consolidated Strategy", description: "No more disconnected vendors. We align your events, media, and marketing into one revenue engine." },
            { title: "Human-Powered Intel", description: "While others rely on stale data, our 50+ researchers verify every contact manually for 100% accuracy." },
            { title: "Cinematic Standards", description: "We bring Hollywood-grade production values to enterprise B2B content." },
            { title: "Global Deployment", description: "Seamless execution across NY, London, Dubai, Singapore, and beyond." }
          ]}
          className="bg-brand-gray/5"
        />

        {/* 8. OUR EXPERTISE */}
        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">Our Pillars of Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Global Event Solutions", desc: "End-to-end booth design, lead gen, and on-ground management." },
                { title: "Media Production", desc: "Corporate films, event coverage, and high-impact video marketing." },
                { title: "Performance Marketing", desc: "Data-driven SEO, Paid Ads, and LinkedIn ABM campaigns." },
                { title: "Market Research", desc: "Human-verified contact discovery and market intelligence." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-brand-blue text-white shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-80 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">0{i+1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. COMPARISON SECTION */}
        <ComparisonTable 
          title="How B2B Sales Arrow Compares"
          rows={[
            { feature: "Service Model", standard: "Fragmented vendors", b2bsa: "Unified growth architecture" },
            { feature: "Data Quality", standard: "Automated/Stale lists", b2bsa: "100% Human-verified intel" },
            { feature: "Video Standards", standard: "Basic event coverage", b2bsa: "Cinematic enterprise-grade" },
            { feature: "Lead Attribution", standard: "Vanity metrics (clicks)", b2bsa: "Pipeline influenced ($)" },
            { feature: "Global Execution", standard: "Local/Limited reach", b2bsa: "Seamless across 40+ countries" }
          ]}
          className="bg-brand-gray/10"
        />

        {/* 5. LEADERSHIP TEAM */}
        <TeamGrid data={ABOUT_TEAM} />

        {/* 10. GLOBAL PRESENCE */}
        <GlobalPresence data={ABOUT_PRESENCE} />

        {/* 11. CLIENTS & PARTNERS */}
        <ClientsMarquee />

        {/* 13. FINAL CTA */}
        <CTABanner 
          title="Ready to Own the Floor at Your Next Global Event?"
          subtitle="Our growth architects are ready to build your event strategy and drive measurable revenue impact."
          ctaText="Request a Strategy Consultation"
          ctaHref="/contact-us"
        />
      </main>
      <CinematicFooter />
    </div>
  );
}
