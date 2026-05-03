"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle2, Trophy, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

interface CaseStudyContentProps {
  id: string;
}

export function CaseStudyContent({ id }: CaseStudyContentProps) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Mock data fetching based on ID
  const caseData = {
    title: "GITEX Global: Scaling a 360-Degree Presence Across 400sqm",
    client: "Nexus Technologies (Fortune 500)",
    category: "Event Solutions",
    metrics: [
      { label: "Pipeline Influenced", value: "$120M", icon: Trophy },
      { label: "Qualified Leads", value: "850+", icon: Target },
      { label: "MQL to SQL Lift", value: "340%", icon: TrendingUp }
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    challenge: "Nexus Technologies needed to command the floor at GITEX Global but was struggling with a fragmented vendor strategy. They had a booth builder, a lead gen agency, and a video crew — but none were aligned on the commercial goal of generating pipeline.",
    solution: "B2B Sales Arrow implemented a 'Unified Growth Architecture.' We handled everything from the 400sqm booth engineering to the real-time lead qualification system and cinematic on-site content capture. Every element was designed to funnel attendees into private executive meeting zones.",
    results: [
      "Total dominance of the exhibition hall floor.",
      "850+ human-verified leads delivered within 24 hours.",
      "12 months of high-impact video assets for global sales teams.",
      "$120M in influenced pipeline tracked via CRM integration."
    ]
  };

  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-32 pb-24">
        
        <header className="container mx-auto px-8 mb-16 max-w-6xl">
           <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-widest mb-12 hover:gap-4 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
           </Link>
           <div className="grid lg:grid-cols-2 gap-16 items-end">
              <div>
                 <div className="text-brand-blue text-xs font-black uppercase tracking-[0.2em] mb-6">{caseData.category}</div>
                 <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                    {caseData.title}
                 </h1>
                 <p className="text-xl text-gray-500 font-bold">{caseData.client}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                 {caseData.metrics.map((m, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-brand-blue text-white text-center shadow-xl">
                      <m.icon className="w-6 h-6 mx-auto mb-4 text-brand-cyan" />
                      <div className="text-xl md:text-2xl font-black mb-1">{m.value}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest opacity-70">{m.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </header>

        <div className="container mx-auto px-8 mb-24 max-w-6xl">
           <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={caseData.image} alt={caseData.title} className="w-full h-full object-cover" />
           </div>
        </div>

        <div className="container mx-auto px-8 max-w-5xl">
           <div className="grid lg:grid-cols-[1fr_300px] gap-24">
              <div className="space-y-16">
                 <section>
                    <h2 className="text-3xl font-bold font-heading mb-6">The Challenge</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{caseData.challenge}</p>
                 </section>

                 <section>
                    <h2 className="text-3xl font-bold font-heading mb-6 text-brand-blue">The B2B Sales Arrow Solution</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{caseData.solution}</p>
                 </section>

                 <section className="p-10 md:p-16 bg-brand-gray/5 rounded-[3rem] border border-brand-charcoal/5">
                    <h2 className="text-3xl font-bold font-heading mb-10">Commercial Impact</h2>
                    <ul className="space-y-6">
                       {caseData.results.map((r, i) => (
                         <li key={i} className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                            <span className="text-lg font-bold text-brand-charcoal/80">{r}</span>
                         </li>
                       ))}
                    </ul>
                 </section>
              </div>

              <aside>
                 <div className="sticky top-40 p-8 rounded-3xl bg-brand-charcoal text-white space-y-12">
                    <div>
                       <h4 className="text-xs font-black uppercase tracking-widest text-brand-cyan mb-6">Deliverables</h4>
                       <ul className="space-y-4 text-sm font-medium text-gray-400">
                          <li>• 400sqm Booth Design</li>
                          <li>• Lead Capture Tech Stack</li>
                          <li>• On-Site Video Crew</li>
                          <li>• CRM Integration</li>
                          <li>• Executive Host Support</li>
                       </ul>
                    </div>
                    <Link href="/contact-us" className="block w-full py-4 bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-charcoal text-center font-bold rounded-2xl transition-all">
                       Get Similar Results
                    </Link>
                 </div>
              </aside>
           </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
