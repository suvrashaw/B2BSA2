"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  HOME_HERO_CONTENT,
  type HomeHeroContent,
} from "./home-section-content";

export interface HeroProps {
  content?: HomeHeroContent;
  eyebrow?: HomeHeroContent["eyebrow"];
  title?: HomeHeroContent["title"];
  description?: HomeHeroContent["description"];
  image?: HomeHeroContent["image"];
  primaryCtaLabel?: HomeHeroContent["primaryCtaLabel"];
  secondaryCtaLabel?: HomeHeroContent["secondaryCtaLabel"];
  stat?: HomeHeroContent["stat"];
  timing?: HomeHeroContent["timing"];
}

export function Hero({
  content = HOME_HERO_CONTENT,
  eyebrow = content.eyebrow,
  title = content.title,
  description = content.description,
  image = content.image,
  primaryCtaLabel = content.primaryCtaLabel,
  secondaryCtaLabel = content.secondaryCtaLabel,
  stat = content.stat,
  timing = content.timing,
}: HeroProps = {}) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const StatIcon = stat.icon;

  // Animation Phases: "dropping" (bouncing ball) -> "expanding" (morph to image) -> "done" (text reveals)
  const [phase, setPhase] = useState<"dropping" | "expanding" | "done">("dropping");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("expanding"), timing.expandDelay); // Wait for bounces
    const timer2 = setTimeout(() => setPhase("done"), timing.doneDelay); // Wait for morph
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [timing.doneDelay, timing.expandDelay]);

  return (
    <>
      {/* GLOBAL PRELOADER OVERLAY */}
      <AnimatePresence>
        {phase === "dropping" && (
          <motion.div
            className="fixed inset-0 z-[100] bg-brand-charcoal flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              layoutId="hero-image"
              initial={{ y: "-100vh", rotate: -180 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                y: {
                  type: "spring",
                  stiffness: 150,
                  damping: 6, // Low damping creates the bounce
                  mass: 1.2,
                },
                rotate: { duration: 2, ease: "easeOut" }
              }}
              className="w-48 h-48 rounded-full overflow-hidden shadow-[0_0_80px_rgba(30,96,145,0.8)] border-4 border-brand-charcoal"
            >
              <Image
                src={image.src}
                alt={image.loaderAlt}
                fill
                className="object-cover scale-150"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-gray dark:bg-[#1a1c1e]">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-cyan/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: phase === "done" ? 1 : 0, y: phase === "done" ? 0 : 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: phase === "done" ? 1 : 0, scale: phase === "done" ? 1 : 0.9 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue dark:text-brand-cyan text-sm font-semibold tracking-wide"
            >
              {eyebrow}
            </motion.div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal dark:text-white mb-6">
              {title}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 rounded bg-brand-blue text-white font-medium hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)] transition-all duration-300 flex items-center gap-2 group">
                {primaryCtaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded border border-gray-300 dark:border-gray-700 text-brand-charcoal dark:text-white font-medium hover:border-brand-blue hover:text-brand-blue dark:hover:text-brand-cyan transition-colors duration-300">
                {secondaryCtaLabel}
              </button>
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full hidden lg:block">
            {phase !== "dropping" && (
              <motion.div
                layoutId="hero-image"
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: y1, opacity }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                
                {/* Floating stat card - Reveals after morph */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: phase === "done" ? 1 : 0, x: phase === "done" ? 0 : 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-8 left-[-40px] bg-white dark:bg-[#212529] p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                      <StatIcon className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading text-brand-charcoal dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
