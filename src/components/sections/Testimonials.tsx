"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { HOME_TESTIMONIALS_CONTENT, type TestimonialsContent } from "@/content/home";

export interface TestimonialsProps {
  content?: TestimonialsContent;
  eyebrow?: TestimonialsContent["eyebrow"];
  heading?: TestimonialsContent["heading"];
  testimonials?: TestimonialsContent["testimonials"];
  autoplayInterval?: TestimonialsContent["autoplayInterval"];
  initialIndex?: TestimonialsContent["initialIndex"];
}

function useCoverflowCarousel(total: number, initialIndex: number, autoplayInterval: number) {
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
  const { activeIndex, getRelativePosition, handleNext, handlePrev, setActiveIndex } =
    useCoverflowCarousel(testimonials.length, initialIndex, autoplayInterval);

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E6091]/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-12 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full border border-[#1E6091]/20 bg-[#1E6091]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#1E6091]"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading mb-6 text-left text-4xl font-bold text-gray-900 lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div
          className="relative flex h-[450px] w-full items-center justify-center sm:h-[400px]"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((testimonial, index) => {
            const pos = getRelativePosition(index);
            const isCenter = pos === 0;
            const absPos = Math.abs(pos);
            const isVisible = absPos <= 2;

            // Apple Coverflow Animation Variables
            const sideRotateY = pos > 0 ? -25 : 25;
            const rotateY = isCenter ? 0 : sideRotateY;
            const sideX = pos > 0 ? `${65 * absPos}%` : `-${65 * absPos}%`;
            const x = isCenter ? 0 : sideX;
            const z = isCenter ? 100 : -100 * absPos;
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
                className={`shadow-[0_12px_40px_rgba(0,0,0,0.08)](0,0,0,0.4)] absolute w-full max-w-[320px] cursor-pointer rounded-[20px] border border-gray-100 bg-white p-8 will-change-transform sm:max-w-[400px] sm:p-10 ${
                  isVisible ? "" : "pointer-events-none"
                }`}
              >
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#1E6091]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-lg leading-tight font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <div className="mt-1 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#1E6091] text-[#1E6091]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="relative z-10 text-[15px] leading-relaxed text-gray-600">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-sm font-semibold text-[#1E6091]">
                      {testimonial.designation}
                    </p>
                    <p className="text-xs font-medium text-gray-500">{testimonial.company}</p>
                  </div>

                  {/* Subtle interaction overlay for side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 rounded-[20px] bg-white/5 transition-colors duration-300 hover:bg-transparent" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Pagination & Navigation */}
        <div className="relative z-50 mt-16 flex items-center justify-center gap-12">
          <button
            onClick={handlePrev}
            className="hover:border-[#1E6091]:bg-[#4BC0D9]:text-[#1a1c1e] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:bg-[#1E6091] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  activeIndex === idx ? "w-10 bg-[#1E6091]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="hover:border-[#1E6091]:bg-[#4BC0D9]:text-[#1a1c1e] flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 shadow-sm transition-all duration-300 hover:bg-[#1E6091] hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
