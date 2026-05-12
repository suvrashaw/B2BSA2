"use client";

import { useRef } from "react";

import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib";

export interface CinematicHeroProps {
  title?: string[];
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function CinematicHero({
  title = ["Turn Every Event", "Into a Revenue Opportunity"],
  description = "By combining event excellence, data-driven insights, and targeted outreach, we help you engage high-value prospects and convert meaningful connections into long-term business opportunities.",
  videoUrl = "/videos/hero-gtc-2026.mp4",
  posterUrl = "/images/hero_bg.png",
  primaryCta = { label: "Get a Quote", href: "#contact" },
  secondaryCta = { label: "View Case Studies", href: "#case-studies" },
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#04090f] pt-32 pb-20"
    >
      {/* 1. Background Visuals (OG Blue Style) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          className="absolute inset-0 h-full w-full object-cover"
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
          {/* Staggered Title Reveal */}
          <h1
            className="font-heading mb-8 text-[clamp(42px,8vw,92px)] leading-[1.02] font-black tracking-tight"
            style={{
              color: "rgba(255, 255, 255, 0.98)",
              textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
            }}
          >
            {title.map((line, index) => (
              <span key={index} className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "110%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + index * 0.15,
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
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 max-w-2xl text-lg leading-relaxed font-semibold lg:text-xl"
            style={{ color: "rgba(255, 255, 255, 0.86)" }}
          >
            {description}
          </motion.p>

          {/* Action CTAs (Exact V2 Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href={primaryCta.href}
              className={cn(
                "group relative flex items-center justify-center min-h-[58px] px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
              )}
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

            <Link
              href={secondaryCta.href}
              className={cn(
                "flex items-center justify-center min-h-[58px] px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
              )}
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
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        section {
          background-image: radial-gradient(
            circle at 50% -20%,
            rgba(52, 144, 181, 0.15),
            transparent 70%
          );
        }
      `}</style>
    </section>
  );
}
