"use client";

import type { ReactNode } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export interface ServiceHeroProps {
  description: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  title: ReactNode | string;
  videoUrl?: string;
}

export function ServiceHero({
  description,
  primaryCta,
  secondaryCta,
  title,
  videoUrl = "/videos/hero-gtc-2026.mp4",
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Split title into lines if it's a string for the staggered reveal
  const titleLines = typeof title === "string" ? title.split("\n") : [title];

  return (
    <section
      className="relative flex min-h-svh items-end overflow-hidden bg-brand-charcoal pt-32 pb-20"
      ref={containerRef}
    >
      {/* 1. Background Visuals (OG Blue Style) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          className="hero-bg-video absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
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
        <motion.div className="max-w-4xl" style={{ y }}>
          {/* Staggered Title Reveal */}
          <h1
            className="mb-8 font-heading text-4xl leading-[1.02] font-black lg:text-7xl xl:text-8xl"
            style={{
              color: "rgba(255, 255, 255, 0.98)",
              textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
            }}
          >
            {titleLines.map((line, index) => (
              <span className="block overflow-hidden" key={index}>
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  className="block"
                  initial={{ opacity: 0, y: "110%" }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed font-semibold lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            style={{ color: "rgba(255, 255, 255, 0.86)" }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {description}
          </motion.p>

          {/* Glossy CTAs */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {primaryCta && (
              <Link
                className="hero-primary-cta group relative flex min-h-[58px] items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                href={primaryCta.href}
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
                className="hero-secondary-cta flex min-h-[58px] items-center justify-center rounded-full px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
                href={secondaryCta.href}
                style={{
                  backdropFilter: "blur(18px) saturate(150%)",
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.1) 100%)`,
                  border: "1px solid rgba(255, 255, 255, 0.28)",
                  boxShadow:
                    "0 18px 38px rgba(8, 12, 18, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.28)",
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
