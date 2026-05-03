"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Share2, Bookmark, Clock, User } from "lucide-react";
import Link from "next/link";

interface BlogPostContentProps {
  id: string;
}

export function BlogPostContent({ id }: BlogPostContentProps) {
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
  const post = {
    title: "How to Own the Floor at GITEX Global 2024",
    category: "Event Strategy",
    author: "Strategy Team",
    date: "May 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    content: `
      <h2>The Enterprise Challenge at Major Trade Shows</h2>
      <p>GITEX Global is one of the world's most competitive exhibition environments. For enterprise brands, the challenge is not just appearing, but commanding attention in a sea of multi-million dollar booths. A presence that fails to convert foot traffic into qualified pipeline is a failed investment.</p>
      
      <h3>1. Architecting for Traffic Flow</h3>
      <p>Most booths are designed as static displays. The most successful enterprise presences are designed as 'conversion environments.' This means creating clear zones for initial discovery, deep-dive demos, and private executive conversations.</p>
      
      <h3>2. The Lead Capture Gap</h3>
      <p>Badge scanning is only the first step. Without real-time qualification and CRM-ready context, leads grow cold within 48 hours. We recommend using integrated lead capture apps that allow your staff to score intent and note specific pain points immediately.</p>
      
      <blockquote>"The difference between an attendee and a prospect is the quality of the conversation you engineer within your space."</blockquote>
      
      <h3>3. Immersive Technology</h3>
      <p>Using LED walls and AR/VR is not about 'wow factor' alone. It's about education. Use technology to show what your product does in the real world, especially when the hardware is too large to bring to the floor.</p>
    `
  };

  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-32 pb-24">
        
        {/* Article Hero */}
        <article>
           <header className="container mx-auto px-8 mb-16 max-w-4xl">
              <Link href="/resources/blog" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-widest mb-12 hover:gap-4 transition-all">
                 <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="text-brand-blue text-xs font-black uppercase tracking-[0.2em] mb-6">{post.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                 {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-gray-400 font-medium border-y border-gray-100 py-6">
                 <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {post.author}
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {post.readTime}
                 </div>
                 <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                 </div>
              </div>
           </header>

           <div className="container mx-auto px-8 mb-16 max-w-6xl">
              <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
           </div>

           <div className="container mx-auto px-8 max-w-4xl">
              <div className="grid lg:grid-cols-[1fr_200px] gap-16">
                 {/* Main Content */}
                 <div 
                   className="prose prose-lg prose-slate max-w-none 
                   prose-headings:font-heading prose-headings:font-bold 
                   prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                   prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-8
                   prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-heading prose-blockquote:text-brand-charcoal
                   "
                   dangerouslySetInnerHTML={{ __html: post.content }}
                 />

                 {/* Sidebar / Tools */}
                 <aside className="hidden lg:block">
                    <div className="sticky top-40 space-y-12">
                       <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-300 mb-6">Tools</h4>
                          <div className="flex flex-col gap-4">
                             <button className="flex items-center gap-3 text-sm font-bold hover:text-brand-blue transition-colors">
                                <Share2 className="w-4 h-4" /> Share
                             </button>
                             <button className="flex items-center gap-3 text-sm font-bold hover:text-brand-blue transition-colors">
                                <Bookmark className="w-4 h-4" /> Save
                             </button>
                          </div>
                       </div>
                    </div>
                 </aside>
              </div>
           </div>
        </article>

        {/* CTA Section */}
        <section className="mt-24 py-24 bg-brand-charcoal text-white rounded-[4rem] mx-4 md:mx-8">
           <div className="container mx-auto px-8 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Need a Strategy for Your Next Event?</h2>
              <p className="text-gray-400 text-lg mb-12">Let our growth architects build a custom event strategy that delivers measurable results.</p>
              <Link href="/contact-us" className="px-12 py-5 bg-brand-cyan text-brand-charcoal font-bold rounded-full hover:bg-white transition-all shadow-xl">
                 Book a Strategy Call
              </Link>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
