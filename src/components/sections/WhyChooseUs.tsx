"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    id: "proven",
    title: "Proven Execution",
    description: "Decades of combined experience delivering high-stakes enterprise projects without fail.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "global",
    title: "Global Reach",
    description: "Established networks and infrastructure across 40+ countries to scale your operations instantly.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "strategic",
    title: "Strategic Creativity",
    description: "We don't just make it look good. We engineer design systems that drive measurable conversion.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "tech",
    title: "Technology-Led Delivery",
    description: "Leveraging cutting-edge tools and data architectures to ensure precision and performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which item is active based on scroll progress
    const index = Math.min(
      REASONS.length - 1,
      Math.max(0, Math.floor(latest * REASONS.length))
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-brand-charcoal text-white">
      {/* 
        The container needs to be tall enough to allow scrolling.
      */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="sticky top-0 w-full h-screen bg-brand-charcoal z-0" />
      </div>

      <div className="container mx-auto px-8 flex flex-col md:flex-row relative z-10">
        
        {/* Left Side: Sticky Content */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center items-start text-left py-20 md:py-0 md:pr-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-sm font-semibold tracking-wide"
          >
            THE B2B DIFFERENCE
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight w-full text-left">
            Why Enterprise Leaders <br />
            <span className="text-brand-cyan">Choose Us</span>
          </h2>
          
          <div className="relative h-[150px] w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
                  <h3 className="font-heading text-3xl font-bold text-white">{REASONS[activeIndex].title}</h3>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                  {REASONS[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Scrolling Images */}
        <div className="w-full md:w-1/2 flex flex-col pb-[20vh]">
          {REASONS.map((reason, index) => (
            <div
              key={reason.id}
              className="h-[80vh] md:h-screen w-full flex items-center justify-center p-8"
            >
              <div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Mobile text fallback since sticky scroll might be weird on mobile */}
                <div className="absolute bottom-8 left-8 right-8 md:hidden">
                   <h3 className="font-heading text-2xl font-bold text-white mb-2">{reason.title}</h3>
                   <p className="text-sm text-gray-300">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
