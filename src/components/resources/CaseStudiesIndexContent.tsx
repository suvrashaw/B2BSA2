"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Event Solutions", "Media Production", "Lead Gen", "Market Research"];

const CASES = [
  { id: 1, category: "Event Solutions", client: "Fortune 500 Tech", title: "GITEX Global: Scaling a 360-Degree Presence Across 400sqm", metric: "$120M Pipeline Influenced", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Lead Gen", client: "Global SaaS Leader", title: "Human-Verified Lead Gen: 340% Increase in SQL Volume", metric: "340% Lead Lift", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Media Production", client: "Financial Services Giant", title: "Corporate Video Series: Building Authority in the APAC Region", metric: "2M+ Views", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Market Research", client: "Enterprise Infrastructure", title: "TAM Mapping: Identifying $500M in Untapped APAC Opportunity", metric: "$500M Opp Found", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Event Solutions", client: "Cloud Authority", title: "CES Las Vegas: 100% On-Ground Management and Zero-Downtime Live Stream", metric: "Zero Failure Launch", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" }
];

export function CaseStudiesIndexContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const filteredCases = activeCategory === "All" 
    ? CASES 
    : CASES.filter(c => c.category === activeCategory);

  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          
          <div className="max-w-3xl mb-16">
             <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-6">Success Stories</div>
             <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">Proven Results for Global Enterprise Brands</h1>
             <p className="text-xl text-gray-500 leading-relaxed">
               Explore how our unified growth architecture helps the world's most innovative companies scale their event, media, and marketing impact.
             </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
             {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                   activeCategory === cat 
                   ? "bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20" 
                   : "bg-white text-gray-500 border-gray-200 hover:border-brand-blue/30"
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Case Grid */}
          <div className="grid md:grid-cols-2 gap-12">
             <AnimatePresence mode="popLayout">
               {filteredCases.map((c) => (
                 <motion.div
                   key={c.id}
                   layout
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.5 }}
                   className="group relative flex flex-col bg-brand-charcoal rounded-[3rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/20 transition-all h-full"
                 >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                       <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
                    </div>
                    
                    <div className="p-10 md:p-14 relative -mt-32 z-10 flex flex-col justify-between flex-grow">
                       <div>
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                             <Trophy className="w-3 h-3" /> {c.metric}
                          </div>
                          <div className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-3">{c.client}</div>
                          <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-8 group-hover:text-brand-cyan transition-colors">
                             {c.title}
                          </h3>
                       </div>
                       <Link href={`/resources/case-studies/${c.id}`} className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-brand-charcoal font-bold rounded-full transition-all duration-300 w-fit">
                          View Case Study <ArrowRight className="w-5 h-5" />
                       </Link>
                    </div>
                 </motion.div>
               ))}
             </AnimatePresence>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
