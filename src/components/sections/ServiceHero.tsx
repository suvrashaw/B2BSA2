"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export interface ServiceHeroProps {
  title: string | ReactNode;
  description: string;
  badge?: string;
  videoUrl?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function ServiceHero({
  title,
  description,
  badge = "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-loop-render-31514-large.mp4",
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Split title into lines if it's a string for the staggered reveal
  const titleLines = typeof title === "string" ? title.split("\n") : [title];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-charcoal"
    >
      {/* 1. Background Video with Drift Animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg-video absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* 2. Cinematic Veil Gradient */}
      <div className="hero-veil absolute inset-0 z-10" />

      {/* 3. Content Area */}
      <div className="container mx-auto px-8 relative z-20">
        <motion.div style={{ y }} className="max-w-4xl">
          {/* Badge/Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            {badge}
          </motion.div>

          {/* Staggered Title Reveal */}
          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-white mb-8">
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <span
                  className="text-reveal-line block"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            {description}
          </motion.p>

          {/* Glossy CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="hero-primary-cta group flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold transition-all duration-300 hover:scale-105"
              >
                {primaryCta.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="hero-secondary-cta px-10 py-5 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
