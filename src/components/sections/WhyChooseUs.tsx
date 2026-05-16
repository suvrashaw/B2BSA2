"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
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
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 z-0 h-screen w-full bg-brand-gray" />
      </div>

      <div
        className={`container mx-auto flex flex-col px-8 ${showImagePanel ? "md:flex-row" : "items-center"} relative z-10`}
      >
        {/* Left Side: Sticky Content */}
        <div
          className={`w-full ${showImagePanel ? "md:w-1/2 md:pr-20" : "max-w-4xl items-center text-center md:w-3/4"} flex h-auto flex-col items-start justify-center py-20 md:sticky md:top-0 md:h-screen md:py-0`}
        >
          <Eyebrow variant="neutral">{eyebrow}</Eyebrow>
          <Heading as="h2" className="mb-8 w-full text-left">
            {heading}
          </Heading>

          <div className="relative flex h-[150px] w-full justify-center">
            {activeReason && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={resolvedActiveIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-start justify-center text-left"
                >
                  <div className="mb-4 flex items-center gap-3 text-left">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-blue" />
                    <Heading as="h3">{activeReason.title}</Heading>
                  </div>
                  <p className="max-w-md text-xl leading-relaxed text-gray-600">
                    {activeReason.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Right Side: Scrolling Images */}
        {showImagePanel && (
          <div className="flex w-full flex-col pb-[20vh] md:w-1/2">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="flex h-[80vh] w-full items-center justify-center p-8 md:h-screen"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-2xl md:aspect-square">
                  <Image src={reason.image} alt={reason.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Mobile text fallback since sticky scroll might be weird on mobile */}
                  <div className="absolute right-8 bottom-8 left-8 md:hidden">
                    <Heading as="h3" className="mb-2 text-white">
                      {reason.title}
                    </Heading>
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
