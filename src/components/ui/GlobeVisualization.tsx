"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

const COUNTRIES = ["New York", "London", "Dubai", "Singapore", "Sydney", "Toronto"];

export function GlobalPresence() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % COUNTRIES.length);
    }, 3000); // 3 seconds per highlight

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 w-full overflow-hidden py-12">
      <div className="container mx-auto px-8">
        <h3 className="text-brand-cyan mb-8 text-center text-xs font-bold tracking-[0.3em] uppercase">
          Global Enterprise Reach
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
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
                <span className="font-heading text-2xl tracking-wide text-white md:text-3xl">
                  {country}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeCountryGlow"
                    className="bg-brand-blue absolute -bottom-2 left-1/2 h-[2px] w-1/2 -translate-x-1/2 blur-[2px]"
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
