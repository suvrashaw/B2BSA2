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
  videoUrl = "/videos/hero-gtc-2026.mp4",
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

  const animatedWord = prefersReducedMotion ? (motionPhrases[0]?.text ?? "") : displayedText;

  // Split title into lines if it's a string for the staggered reveal
  const titleLines = typeof title === "string" ? title.split("\n") : [title];

  return (
    <section
      ref={containerRef}
      className="bg-brand-charcoal relative flex min-h-[100svh] items-end overflow-hidden pt-32 pb-20"
    >
      {/* 1. Background Visuals (OG Blue Style) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Cinematic Blue Veil (From OG HeroSection) */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(33, 52, 67, 0.5) 0%, rgba(30, 96, 145, 0.9) 90.865%)",
          }}
        />
      </div>

      {/* 2. Content Area */}
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
                className="font-heading text-[clamp(48px,10vw,140px)] leading-[0.88] font-black tracking-tighter text-white italic"
                style={{
                  color: activePhrase?.color ?? "#ffffff",
                  textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
                }}
              >
                {animatedWord}
              </span>
              <span
                className="mb-2 h-[clamp(30px,6vw,80px)] w-1 animate-pulse rounded-full bg-current"
                style={{ color: activePhrase?.color ?? "#ffffff" }}
              />
            </div>
          </div>

          {/* Staggered Title Reveal */}
          <h1
            className="font-heading mb-8 text-4xl leading-[1.02] font-black lg:text-7xl xl:text-8xl"
            style={{
              color: "rgba(255, 255, 255, 0.98)",
              textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
            }}
          >
            {titleLines.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "110%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4 + index * 0.15,
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
            className="mb-12 max-w-2xl text-lg leading-relaxed font-semibold lg:text-xl"
            style={{ color: "rgba(255, 255, 255, 0.86)" }}
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
                className="hero-primary-cta group relative flex min-h-[58px] items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, rgba(116, 219, 243, 0.96) 0%, rgba(52, 144, 181, 0.98) 38%, rgba(30, 96, 145, 1) 100%)`,
                  border: "1px solid rgba(201, 244, 255, 0.68)",
                  boxShadow:
                    "0 22px 44px rgba(8, 26, 41, 0.28), 0 8px 18px rgba(52, 144, 181, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.34)",
                }}
              >
                {primaryCta.label}
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="hero-secondary-cta flex min-h-[58px] items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.1) 100%)`,
                  border: "1px solid rgba(255, 255, 255, 0.28)",
                  boxShadow:
                    "0 18px 38px rgba(8, 12, 18, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.28)",
                  backdropFilter: "blur(18px) saturate(150%)",
                  WebkitBackdropFilter: "blur(18px) saturate(150%)",
                }}
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
          0% {
            transform: scale(1.03) translate3d(-1.5%, 0, 0);
          }
          50% {
            transform: scale(1.08) translate3d(1%, -1.2%, 0);
          }
          100% {
            transform: scale(1.05) translate3d(0.5%, 1%, 0);
          }
        }
      `}</style>
    </section>
  );
}
