"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Header } from "@/components/layout/Header";
import { EditorialHero } from "@/components/about/editorial-hero";
import { WobbleCard } from "@/components/about/wobble-card";
import { AnimatedH3 } from "@/components/about/animated-h3";
import { ArrowRight } from "lucide-react";

import { WhisperText } from "@/components/about/whisper-text";
import { GlobalPresence } from "@/components/about/global-presence";
import { Timeline } from "@/components/about/timeline";
import { TeamGrid } from "@/components/about/team-grid";
import { ClientsMarquee } from "@/components/about/clients-marquee";
import { Culture } from "@/components/about/culture";
import { CTASection } from "@/components/about/cta-section";
import { CinematicFooter } from "@/components/layout/CinematicFooter";
import Link from "next/link";

export default function AboutPage() {
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
      
      {/* 1. Header (Includes the Editorial Hero Intro) */}
      <Header />
      <main>
        <EditorialHero />

        {/* Section Blend Gradient: Hero to White */}
        <div className="h-32 bg-gradient-to-b from-background to-brand-white transition-colors duration-500" />

        {/* 2. What Makes Us Different */}
        <section className="py-12 bg-brand-white relative transition-colors duration-500">
          <div className="container mx-auto px-8">
            
            <div className="mb-16 flex flex-col items-start text-left">
              <div
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-semibold tracking-wide uppercase"
              >
                Different
              </div>
              <WhisperText 
                text="A value-based organization guided by ten core Values."
                highlights={["Values"]}
                highlightColor="red"
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight mb-8 max-w-4xl transition-colors duration-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-brand-blue border-none shadow-2xl shadow-brand-blue/30 min-h-[500px] lg:min-h-[300px]">
                <div className="max-w-md">
                  <h3 className="text-left text-balance text-2xl md:text-3xl font-heading tracking-tight text-white font-bold">
                    Global Event Solutions
                  </h3>
                  <p className="mt-4 text-left text-base leading-relaxed text-white/80 font-medium">
                    Excellence in In-person, Virtual, and Hybrid Corporate Events. We craft unforgettable experiences that drive engagement and business value worldwide.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
                  width={500}
                  height={500}
                  alt="Events"
                  className="absolute -right-4 lg:-right-[10%] grayscale opacity-60 filter -bottom-10 object-cover rounded-2xl aspect-square w-3/4 max-w-sm" 
                />
              </WobbleCard>
              
              {/* Card 2 */}
              <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-brand-cyan border-none shadow-2xl shadow-brand-cyan/30">
                <h3 className="max-w-80 text-left text-balance text-2xl md:text-3xl font-heading tracking-tight text-brand-charcoal font-bold transition-colors duration-500">
                  Human Powered Market Intelligence
                </h3>
                <p className="mt-4 max-w-[26rem] text-left text-base leading-relaxed text-brand-charcoal/80 font-medium transition-colors duration-500">
                  Custom contact discovery and precise, human-verified market research to power your global campaigns.
                </p>
              </WobbleCard>
              
              {/* Card 3 */}
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 border-none shadow-2xl shadow-black/40 min-h-[500px] lg:min-h-[400px]">
                <div className="max-w-lg">
                  <h3 className="max-w-sm md:max-w-lg text-left text-balance text-2xl md:text-3xl font-heading tracking-tight text-white font-bold">
                    Sales-Qualified Lead Generation
                  </h3>
                  <p className="mt-6 max-w-[30rem] text-left text-lg leading-relaxed text-white/80 font-medium">
                    Based in New York and Bangalore, B2B Sales Arrow is a globally trusted Marketing Technology company renowned for its excellence in generating highly qualified sales pipelines.
                  </p>
                  
                  <button className="mt-12 group flex items-center gap-4 text-xs tracking-widest uppercase">
                    <span className="relative overflow-hidden pb-1">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-brand-cyan">Explore Services</span>
                      <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full text-white">Explore Services</span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-brand-cyan" />
                  </button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                  width={600}
                  height={600}
                  alt="Lead Gen"
                  className="absolute -right-10 md:-right-[5%] lg:right-[5%] -bottom-20 object-cover rounded-2xl grayscale opacity-40 w-[600px] aspect-video" 
                />
              </WobbleCard>
            </div>
            
          </div>
          
          {/* Section Blend Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-white to-transparent transition-colors duration-500" />
        </section>

        {/* 3. Our Global Presence */}
        <GlobalPresence />

        {/* Section Blend Gradient: White to Gray */}
        <div className="h-32 bg-gradient-to-b from-brand-white to-brand-gray transition-colors duration-500" />

        {/* 4. Timeline */}
        <Timeline />

        {/* Section Blend Gradient: Gray to White */}
        <div className="h-32 bg-gradient-to-b from-brand-gray to-brand-white transition-colors duration-500" />

        {/* 5. Team */}
        <TeamGrid />

        {/* Section Blend Gradient: White to White */}
        <div className="h-32 bg-brand-white transition-colors duration-500" />

        {/* 6. Clients */}
        <ClientsMarquee />

        {/* Section Blend Gradient: White to Gray */}
        <div className="h-32 bg-gradient-to-b from-brand-white to-brand-gray transition-colors duration-500" />

        {/* 7. Culture */}
        <Culture />

        {/* Section Blend Gradient: Gray to Background (Dark) */}
        <div className="h-32 bg-gradient-to-b from-brand-gray to-background transition-colors duration-500" />

        {/* 8. CTA */}
        <CTASection />
      </main>

      <CinematicFooter />
    </div>
  );
}

