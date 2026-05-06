"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";

export interface HeroProps {
  showPreloader?: boolean;
  title?: string | ReactNode;
  subtitle?: string;
  description?: string;
  badge?: string;
  eyebrow?: string;
  image?:
    | string
    | {
        src: string;
        alt?: string;
        loaderAlt?: string;
      };
  primaryCtaLabel?: string | null;
  secondaryCtaLabel?: string | null;
  stat?: {
    value: string;
    label: string;
    icon?: string;
  } | null;
}

export function Hero({
  title = "Global B2B Event, Booth & Lead Generation Experts",
  subtitle = "End-to-End Solutions That Drive Pipeline and Revenue",
  description,
  badge = "GLOBAL CAPABILITY. STRATEGIC GROWTH.",
  eyebrow,
  image = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  primaryCtaLabel = "Explore Our Work",
  secondaryCtaLabel = "Our Services",
  stat = {
    value: "40+",
    label: "Countries Served",
    icon: "Globe",
  },
}: HeroProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const imageSrc = typeof image === "string" ? image : image.src;
  const imageAlt =
    typeof image === "string"
      ? "Corporate Event Strategy"
      : (image.alt ?? "Corporate Event Strategy");
  const resolvedSubtitle = description ?? subtitle;
  const resolvedBadge = eyebrow ?? badge;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gray/20 pointer-events-none" />

      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide uppercase">
            {resolvedBadge}
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal mb-6">
            {title}
          </h1>

          <p className="text-xl text-brand-charcoal/70 mb-10 max-w-lg leading-relaxed">
            {resolvedSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryCtaLabel ? (
              <button className="px-8 py-4 rounded bg-brand-blue text-white font-medium hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)] transition-all duration-300 flex items-center gap-2 group">
                {primaryCtaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : null}
            {secondaryCtaLabel ? (
              <button className="px-8 py-4 rounded border border-gray-200 text-brand-charcoal font-medium hover:border-brand-blue hover:text-brand-blue transition-colors duration-300">
                {secondaryCtaLabel}
              </button>
            ) : null}
          </div>
        </motion.div>

        <div className="relative h-[600px] w-full hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-brand-blue/5" />

            {/* Floating stat card */}
            {stat ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-12 left-[-40px] bg-white p-8 rounded-xl shadow-2xl border border-gray-100 backdrop-blur-md"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading text-brand-charcoal">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
