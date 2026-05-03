"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    designation: "Chief Marketing Officer",
    company: "Nexus Technologies",
    rating: 5,
    quote: "B2B Sales Arrow transformed our exhibition presence. Their architectural approach to booth design and lead capture systems increased our qualified pipeline by 340% at GITEX.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "VP of Global Sales",
    company: "Aura Systems",
    rating: 5,
    quote: "The strategic media production and targeted lead generation strategies deployed by the team were instrumental in helping us penetrate the European market 6 months ahead of schedule.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    designation: "Director of Brand Activation",
    company: "Vortex Labs",
    rating: 5,
    quote: "Unlike typical agencies, they understand the deep nuances of enterprise B2B sales cycles. Every piece of collateral and physical asset they produced was highly conversion-focused.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "David Alaba",
    designation: "Head of Growth",
    company: "Synapse Networks",
    rating: 5,
    quote: "Their data-driven insights and innovative web designs created an entirely new paradigm for how we engage our enterprise prospects. A flawless execution.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    designation: "VP Marketing",
    company: "Elevate Logistics",
    rating: 5,
    quote: "A flawless execution from strategy to deployment. The ROI on the campaigns they structured for us broke all our previous quarter records.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2); // Start centered

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Helper to determine position in a circular array
  const getRelativePosition = (index: number) => {
    const diff = index - activeIndex;
    const total = TESTIMONIALS.length;
    // Normalize difference to handle wrapping (-2, -1, 0, 1, 2)
    let normalizedDiff = diff % total;
    if (normalizedDiff > Math.floor(total / 2)) normalizedDiff -= total;
    if (normalizedDiff < -Math.floor(total / 2)) normalizedDiff += total;
    return normalizedDiff;
  };

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
            CLIENT SUCCESS
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Industry <br />
            <span className="text-[#1E6091] dark:text-[#4BC0D9]">Visionaries</span>
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div 
          className="relative h-[450px] sm:h-[400px] flex justify-center items-center w-full"
          style={{ perspective: "1000px" }}
        >
          {TESTIMONIALS.map((testimonial, index) => {
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
            {TESTIMONIALS.map((_, idx) => (
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
