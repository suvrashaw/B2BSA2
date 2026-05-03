"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ThankYouContent() {
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
    <div className="bg-brand-white text-brand-charcoal min-h-screen flex flex-col transition-colors duration-500">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-32 pb-24">
        <div className="container mx-auto px-8 max-w-4xl text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="mb-12 flex justify-center"
           >
              <div className="w-24 h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                 <CheckCircle2 className="w-12 h-12 text-brand-blue" />
              </div>
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-4xl md:text-6xl font-bold font-heading mb-6"
           >
              Message Received.
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
           >
              Our growth architects are reviewing your brief. You can expect a response from an enterprise strategy expert within 24 business hours.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col md:flex-row items-center justify-center gap-6"
           >
              <Link href="/resources/blog" className="px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-cyan hover:text-brand-charcoal transition-all shadow-xl">
                 Read Our Latest Insights
              </Link>
              <Link href="/" className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                 Return to Home <ArrowRight className="w-4 h-4" />
              </Link>
           </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
