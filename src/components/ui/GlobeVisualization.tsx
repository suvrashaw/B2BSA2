"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COUNTRIES = [
  "New York",
  "London",
  "Dubai",
  "Singapore",
  "Sydney",
  "Toronto",
];

export function GlobalPresence() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % COUNTRIES.length);
    }, 3000); // 3 seconds per highlight

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 border-t border-gray-200 relative z-10 overflow-hidden">
      <div className="container mx-auto px-8">
        <h3 className="text-brand-blue/60 uppercase tracking-[0.3em] text-xs font-bold mb-8 text-center">
          Global Enterprise Reach
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {COUNTRIES.map((country, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={country}
                className="relative cursor-default"
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1.05 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // premium smooth easing
                }}
              >
                <span className="font-heading text-2xl md:text-3xl text-brand-charcoal tracking-wide">
                  {country}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeCountryGlow"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-brand-blue blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
