"use client";

import type { ReactNode } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
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
  motionPhrases?: { id: string; text: string; color: string }[];
}

export function Hero({
  title = "Global B2B Event, Booth & Lead Generation Experts",
  subtitle = "End-to-End Solutions That Drive Pipeline and Revenue",
  description,
  badge,
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
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-24">
      {/* Background Gradients */}
      <div className="bg-brand-gray/20 pointer-events-none absolute top-0 right-0 h-full w-1/2" />

      <div className="relative z-10 container mx-auto grid items-center gap-12 px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {resolvedBadge && (
            <div className="bg-brand-blue/10 border-brand-blue/20 text-brand-blue mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">
              {resolvedBadge}
            </div>
          )}

          <h1 className="font-heading mb-6 text-5xl leading-[1.1] font-bold  lg:text-7xl">
            {title}
          </h1>

          <p className="/70 mb-10 max-w-lg text-xl leading-relaxed">
            {resolvedSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryCtaLabel ? (
              <button className="bg-brand-blue hover:bg-brand-blue/90 group flex items-center gap-2 rounded px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)]">
                {primaryCtaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : null}
            {secondaryCtaLabel ? (
              <button className="hover:border-brand-blue hover:text-brand-blue rounded border border-gray-200  px-8 py-4 font-medium transition-colors duration-300">
                {secondaryCtaLabel}
              </button>
            ) : null}
          </div>
        </motion.div>

        <div className="relative hidden h-[600px] w-full lg:block">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
            className="absolute inset-0 overflow-hidden rounded-2xl border-8 border-white shadow-2xl"
          >
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
            <div className="bg-brand-blue/5 absolute inset-0" />

            {/* Floating stat card */}
            {stat ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-12 left-[-40px] rounded-xl border border-gray-100 bg-white p-8 shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-brand-blue/10 flex h-14 w-14 items-center justify-center rounded-full">
                    <Globe className="text-brand-blue h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold ">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold tracking-widest text-gray-400 uppercase">
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
