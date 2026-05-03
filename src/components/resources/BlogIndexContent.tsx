"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Event Strategy", "Media Production", "Lead Gen", "Market Research"];

const POSTS = [
  { id: 1, category: "Event Strategy", title: "How to Own the Floor at GITEX Global 2024", date: "May 10, 2024", readTime: "8 min read", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Lead Gen", title: "The Death of Cold Calling: Why Data Precision is the New Cold Outreach", date: "May 5, 2024", readTime: "6 min read", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Media Production", title: "Cinematic B2B: Why Your Corporate Video Needs Hollywood Standards", date: "April 28, 2024", readTime: "12 min read", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Market Research", title: "Mapping the TAM: How to Find Your Next Billion Dollar Market", date: "April 15, 2024", readTime: "10 min read", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Event Strategy", title: "Booth Design Psychology: How to Stop the 'Wrong' People", date: "April 10, 2024", readTime: "5 min read", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Lead Gen", title: "ABM vs Performance Marketing: Which One Wins in 2024?", date: "April 2, 2024", readTime: "9 min read", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" }
];

export function BlogIndexContent() {
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

  const filteredPosts = activeCategory === "All" 
    ? POSTS 
    : POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          
          <div className="max-w-3xl mb-16">
             <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-6">Resources</div>
             <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">B2B Growth Insights</h1>
             <p className="text-xl text-gray-500 leading-relaxed">
               Expert analysis on event strategy, media production, and high-precision lead generation for global enterprise teams.
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

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <AnimatePresence mode="popLayout">
               {filteredPosts.map((post) => (
                 <motion.div
                   key={post.id}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.4 }}
                   className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
                 >
                    <div className="aspect-video w-full overflow-hidden relative">
                       <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-blue">{post.category}</div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow justify-between">
                       <div>
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                             <span>{post.date}</span>
                             <span className="w-1 h-1 rounded-full bg-gray-300" />
                             <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold font-heading mb-6 group-hover:text-brand-blue transition-colors">
                             {post.title}
                          </h3>
                       </div>
                       <Link href={`/resources/blog/${post.id}`} className="flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
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
