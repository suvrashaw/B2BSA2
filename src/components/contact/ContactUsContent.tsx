"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function ContactUsContent() {
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
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Text & Info */}
            <div className="max-w-xl">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
               >
                 <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-6">Contact Us</div>
                 <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
                   Ready to Build Your Growth Engine?
                 </h1>
                 <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                   Whether you're planning a global trade show, need high-fidelity video content, or want to build a precision lead generation system — our team is ready to architect your next success.
                 </p>
               </motion.div>

               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <Mail className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Us</div>
                        <div className="text-lg font-bold">info@b2bsalesarrow.com</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <Phone className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Call Us</div>
                        <div className="text-lg font-bold">+1 (555) 000-0000</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Visit Us</div>
                        <div className="text-lg font-bold">New York | London | Dubai | Bangalore</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
            >
               <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-brand-gray/5 border border-transparent focus:border-brand-blue focus:bg-white rounded-2xl outline-none transition-all" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest ml-1">Work Email</label>
                        <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-brand-gray/5 border border-transparent focus:border-brand-blue focus:bg-white rounded-2xl outline-none transition-all" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest ml-1">Company</label>
                     <input type="text" placeholder="Enterprise Inc." className="w-full px-6 py-4 bg-brand-gray/5 border border-transparent focus:border-brand-blue focus:bg-white rounded-2xl outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest ml-1">Interested In</label>
                     <select className="w-full px-6 py-4 bg-brand-gray/5 border border-transparent focus:border-brand-blue focus:bg-white rounded-2xl outline-none transition-all appearance-none cursor-pointer">
                        <option>Global Event Solutions</option>
                        <option>Media Production</option>
                        <option>Marketing & Research</option>
                        <option>Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                     <textarea rows={4} placeholder="How can we help?" className="w-full px-6 py-4 bg-brand-gray/5 border border-transparent focus:border-brand-blue focus:bg-white rounded-2xl outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-brand-blue text-white font-bold rounded-2xl hover:bg-brand-cyan hover:text-brand-charcoal transition-all shadow-xl flex items-center justify-center gap-3 group">
                     Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
