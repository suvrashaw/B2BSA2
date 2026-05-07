"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export function CTABanner({ title, subtitle, ctaText, ctaHref, className }: CTABannerProps) {
  return (
    <section className={cn("py-24 px-8", className)}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-blue shadow-brand-blue/30 relative overflow-hidden rounded-[3rem] p-12 text-center shadow-2xl md:p-24"
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="bg-brand-cyan/20 pointer-events-none absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-heading mb-8 text-3xl leading-tight font-bold text-white md:text-6xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                {subtitle}
              </p>
            )}
            <Link
              href={ctaHref}
              className="text-brand-blue hover:bg-brand-cyan hover: group inline-flex transform items-center gap-3 rounded-full bg-white px-12 py-5 font-bold shadow-xl transition-all duration-300 hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
