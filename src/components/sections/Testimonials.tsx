"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import {
  HOME_TESTIMONIALS_CONTENT,
  type TestimonialsContent,
} from "./home-section-content";

export interface TestimonialsProps {
  content?: TestimonialsContent;
  eyebrow?: TestimonialsContent["eyebrow"];
  heading?: TestimonialsContent["heading"];
  testimonials?: TestimonialsContent["testimonials"];
  autoplayInterval?: TestimonialsContent["autoplayInterval"];
  initialIndex?: TestimonialsContent["initialIndex"];
}

function useCoverflowCarousel(
  total: number,
  initialIndex: number,
  autoplayInterval: number
) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(initialIndex, Math.max(total - 1, 0))
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (total <= 1 || autoplayInterval <= 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, total]);

  const handleNext = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const resolvedActiveIndex = Math.min(activeIndex, Math.max(total - 1, 0));

  // Helper to determine position in a circular array
  const getRelativePosition = (index: number) => {
    const diff = index - resolvedActiveIndex;
    // Normalize difference to handle wrapping (-2, -1, 0, 1, 2)
    let normalizedDiff = diff % total;
    if (normalizedDiff > Math.floor(total / 2)) normalizedDiff -= total;
    if (normalizedDiff < -Math.floor(total / 2)) normalizedDiff += total;
    return normalizedDiff;
  };

  return {
    activeIndex: resolvedActiveIndex,
    getRelativePosition,
    handleNext,
    handlePrev,
    setActiveIndex,
  };
}

export function Testimonials({
  content = HOME_TESTIMONIALS_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  testimonials = content.testimonials,
  autoplayInterval = content.autoplayInterval,
  initialIndex = content.initialIndex,
}: TestimonialsProps = {}) {
  const {
    activeIndex,
    getRelativePosition,
    handleNext,
    handlePrev,
    setActiveIndex,
  } = useCoverflowCarousel(testimonials.length, initialIndex, autoplayInterval);

  return (
    <section className="py-20 bg-[#F8F9FA] dark:bg-[#1a1c1e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E6091]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-start text-left mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#1E6091]/10 border border-[#1E6091]/20 text-[#1E6091] dark:text-[#4BC0D9] text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {heading}
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div 
          className="relative h-[450px] sm:h-[400px] flex justify-center items-center w-full"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial, index) => {
            const pos = getRelativePosition(index);
            const isCenter = pos === 0;
            const absPos = Math.abs(pos);
            const isVisible = absPos <= 2;

            // Apple Coverflow Animation Variables
            const rotateY = isCenter ? 0 : pos > 0 ? -25 : 25;
            const x = isCenter ? 0 : pos > 0 ? `${65 * absPos}%` : `-${65 * absPos}%`;
            const z = isCenter ? 100 : (-100 * absPos);
            const scale = isCenter ? 1 : 1 - 0.1 * absPos;
            const opacity = isCenter ? 1 : Math.max(0, 0.5 - 0.3 * (absPos - 1));
            const blur = isCenter ? 0 : 3 * absPos;
            const zIndex = 50 - absPos * 10;

            return (
              <motion.div
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  rotateY,
                  x,
                  z,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1], // Custom smooth easing
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center",
                }}
                className={`absolute w-full max-w-[320px] sm:max-w-[400px] bg-white dark:bg-[#212529] rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-800 p-8 sm:p-10 cursor-pointer will-change-transform ${
                  !isVisible ? "pointer-events-none" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between gap-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E6091] dark:border-[#4BC0D9]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white leading-tight">
                        {testimonial.name}
                      </h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#1E6091] dark:fill-[#4BC0D9] text-[#1E6091] dark:text-[#4BC0D9]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed relative z-10">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-sm font-semibold text-[#1E6091] dark:text-[#4BC0D9]">{testimonial.designation}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{testimonial.company}</p>
                  </div>
                  
                  {/* Subtle interaction overlay for side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 rounded-[20px] bg-white/5 dark:bg-black/5 hover:bg-transparent transition-colors duration-300" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Pagination & Navigation */}
        <div className="flex justify-center items-center gap-6 mt-16 relative z-50">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#1E6091] hover:text-white hover:border-[#1E6091] dark:hover:bg-[#4BC0D9] dark:hover:text-[#1a1c1e] transition-all duration-300 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  activeIndex === idx 
                    ? "w-8 bg-[#1E6091] dark:bg-[#4BC0D9]" 
                    : "w-2 bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#1E6091] hover:text-white hover:border-[#1E6091] dark:hover:bg-[#4BC0D9] dark:hover:text-[#1a1c1e] transition-all duration-300 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
