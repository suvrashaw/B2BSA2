"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { WhisperText } from "@/components/about/whisper-text";

const VALUES = [
  { title: "Accountability", desc: "We own the results, not just the process." },
  { title: "Precision", desc: "Every detail matters in enterprise B2B." },
  { title: "Compassion", desc: "Our origin is rooted in giving back." },
  { title: "Innovation", desc: "Always architecting the future of events." },
  { title: "Integrity", desc: "Transparent partnerships with every client." },
  { title: "Excellence", desc: "Near-perfection is our baseline." },
  { title: "Growth", desc: "Dedicated to our clients' revenue impact." },
  { title: "Global mindset", desc: "Scaling across borders seamlessly." },
  { title: "Tenacity", desc: "We solve the hard problems." },
  { title: "Synergy", desc: "One team, one vision, one result." }
];

export function VisionMissionContent() {
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
          title="Vision, Mission & Values"
          subtitle="The moral and strategic compass behind our global growth architecture."
          badge="Foundation"
        />

        {/* Mission Section */}
        <section className="py-24 bg-brand-white relative overflow-hidden">
          <div className="container mx-auto px-8 max-w-4xl text-center">
            <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-8">Our Mission</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 leading-tight">
              To transform how B2B brands connect through <span className="text-brand-blue italic">innovative</span>, immersive experiences that drive <span className="text-brand-cyan underline decoration-brand-blue/30 underline-offset-8">measurable</span> business results.
            </h2>
          </div>
        </section>

        {/* Founder Inspiration */}
        <section className="py-24 bg-brand-gray/10 relative">
           <div className="container mx-auto px-8 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                      alt="Philanthropy Inspiration" 
                      className="w-full h-full object-cover grayscale"
                    />
                 </div>
                 <div>
                    <div className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-6">Our Inspiration</div>
                    <h3 className="text-2xl md:text-4xl font-bold font-heading mb-6 italic text-brand-charcoal">"Kindled by Compassion"</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                       In 2004, inspired by philanthropic efforts in arid Rajasthan, our founder embarked on a journey rooted in the belief that business should be a force for positive change. Witnessing the impact of large-scale social contribution shaped our dedication to excellence and high-integrity partnerships.
                    </p>
                    <div className="h-px w-24 bg-brand-blue" />
                 </div>
              </div>
           </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 bg-brand-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold font-heading">Our Ten Core Values</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic">The principles that ensure we deliver enterprise-grade quality across every market.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {VALUES.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-xl bg-white border border-brand-charcoal/5 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300"
                >
                  <h4 className="text-brand-blue font-bold uppercase tracking-tighter text-sm mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-500 leading-snug">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
