"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { HOME_WHY_CHOOSE_US_CONTENT, type WhyChooseUsContent } from "@/content/home";

export interface WhyChooseUsProps {
  content?: WhyChooseUsContent;
  eyebrow?: WhyChooseUsContent["eyebrow"];
  heading?: WhyChooseUsContent["heading"];
  reasons?: WhyChooseUsContent["reasons"];
  showImagePanel?: boolean;
}

export function WhyChooseUs({
  content = HOME_WHY_CHOOSE_US_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  reasons = content.reasons,
  showImagePanel = true,
}: WhyChooseUsProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const resolvedActiveIndex = Math.min(activeIndex, Math.max(reasons.length - 1, 0));
  const activeReason = reasons[resolvedActiveIndex];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reasons.length === 0) return;

    // Determine which item is active based on scroll progress
    const index = Math.min(reasons.length - 1, Math.max(0, Math.floor(latest * reasons.length)));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-brand-gray">
      {/* 
        The container needs to be tall enough to allow scrolling.
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 w-full h-screen bg-brand-gray z-0" />
      </div>

      <div
        className={`container mx-auto px-8 flex flex-col ${showImagePanel ? "md:flex-row" : "items-center"} relative z-10`}
      >
        {/* Left Side: Sticky Content */}
        <div
          className={`w-full ${showImagePanel ? "md:w-1/2 md:pr-20" : "md:w-3/4 max-w-4xl text-center items-center"} md:sticky md:top-0 h-auto md:h-screen flex flex-col justify-center items-start py-20 md:py-0`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-charcoal/5 border border-brand-charcoal/10 text-brand-charcoal text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2
            className={`font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal mb-8 leading-tight w-full ${showImagePanel ? "text-left" : "text-center"}`}
          >
            {heading}
          </h2>

          <div className="relative h-[150px] w-full flex justify-center">
            {activeReason && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={resolvedActiveIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue" />
                    <h3 className="font-heading text-3xl font-bold text-brand-charcoal">
                      {activeReason.title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                    {activeReason.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Right Side: Scrolling Images */}
        {showImagePanel && (
          <div className="w-full md:w-1/2 flex flex-col pb-[20vh]">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="h-[80vh] md:h-screen w-full flex items-center justify-center p-8"
              >
                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image src={reason.image} alt={reason.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Mobile text fallback since sticky scroll might be weird on mobile */}
                  <div className="absolute bottom-8 left-8 right-8 md:hidden">
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-200">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
