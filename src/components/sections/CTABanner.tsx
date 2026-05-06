"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
          className="bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/30"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-white font-heading mb-8 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-cyan hover:text-brand-charcoal transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
