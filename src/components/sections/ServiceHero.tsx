"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTypewriterText, type TypewriterPhrase } from "@/hooks/useTypewriterText";

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
  motionPhrases?: TypewriterPhrase[];
}

const DEFAULT_PHRASES: TypewriterPhrase[] = [
  { id: "connections", text: "Connections", color: "#f4fbff" },
  { id: "insights", text: "Insights", color: "#a8e7f8" },
  { id: "outreach", text: "Outreach", color: "#d2f5ff" },
  { id: "pipeline", text: "Pipeline", color: "#7fd8f2" },
  { id: "revenue", text: "Revenue", color: "#dff8ff" },
];

export function ServiceHero({
  title,
  description,
  badge = "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-loop-render-31514-large.mp4",
  primaryCta,
  secondaryCta,
  motionPhrases = DEFAULT_PHRASES,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const { activePhrase, displayedText, prefersReducedMotion } = useTypewriterText(motionPhrases, {
    typeSpeedMs: 52,
    deleteSpeedMs: 26,
    wordHoldMs: 1320,
    nextWordDelayMs: 220,
  });

  const animatedWord = prefersReducedMotion ? motionPhrases[0]?.text ?? "" : displayedText;

  // Split title into lines if it's a string for the staggered reveal
  const titleLines = typeof title === "string" ? title.split("\n") : [title];

  return (
    <section
      ref={containerRef}
      className="bg-brand-charcoal relative flex min-h-[100svh] items-end overflow-hidden pt-32 pb-20"
    >
      {/* 1. Background Video with Drift Animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg-video absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* 2. Cinematic Veil Gradient (V2 Style) */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-linear-to-r from-brand-charcoal/92 via-brand-charcoal/72 to-brand-charcoal/34 opacity-90" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/88 via-brand-charcoal/10 to-brand-charcoal/28" />
      </div>

      {/* 3. Mist Effect (V2 Style) */}
      <div
        className="pointer-events-none absolute inset-auto -right-[10%] -bottom-[18%] left-[34%] z-15 h-[52%] blur-[36px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(52, 144, 181, 0.34) 0%, rgba(52, 144, 181, 0.08) 42%, rgba(52, 144, 181, 0) 72%)"
        }}
      />

      {/* 4. Content Area */}
      <div className="relative z-20 container mx-auto px-8">
        <motion.div style={{ y }} className="max-w-4xl">
          {/* Typewriter Section (V2 Kicker) */}
          <div className="mb-6 flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="text-xs font-semibold tracking-[0.42em] text-white/70 uppercase lg:text-sm"
            >
              Turn Events Into
            </motion.p>

            <div className="flex min-h-[clamp(60px,10vw,140px)] items-end gap-3" aria-live="polite">
              <span
                className="font-heading text-[clamp(48px,10vw,140px)] leading-[0.88] font-black italic tracking-tighter text-white"
                style={{
                  color: activePhrase?.color ?? '#ffffff',
                  textShadow: '0 18px 50px rgba(4, 9, 15, 0.24)'
                }}
              >
                {animatedWord}
              </span>
              <span
                className="mb-2 h-[clamp(30px,6vw,80px)] w-1 rounded-full bg-current animate-pulse"
                style={{ color: activePhrase?.color ?? '#ffffff' }}
              />
            </div>
          </div>

          {/* Staggered Title Reveal */}
          <h1 className="font-heading mb-8 text-4xl leading-[1.02] font-black text-white lg:text-7xl xl:text-8xl">
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "110%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4 + (index * 0.15)
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed font-semibold text-white/80 lg:text-xl"
          >
            {description}
          </motion.p>

          {/* Glossy CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="hero-primary-cta group flex items-center gap-3 rounded-full px-10 py-5 font-bold text-white transition-all duration-300 hover:scale-105"
              >
                {primaryCta.label}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="hero-secondary-cta rounded-full px-10 py-5 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-bg-video {
          animation: hero-media-drift 22s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes hero-media-drift {
          0% { transform: scale(1.03) translate3d(-1.5%, 0, 0); }
          50% { transform: scale(1.08) translate3d(1%, -1.2%, 0); }
          100% { transform: scale(1.05) translate3d(0.5%, 1%, 0); }
        }
      `}</style>
    </section>
  );
}
