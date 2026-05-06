"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib";

interface Step {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ProcessTimeline({ steps, title, subtitle, className }: ProcessTimelineProps) {
  return (
    <section className={cn("py-24 bg-brand-gray/10 ", className)}>
      <div className="container mx-auto px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-20">
            {subtitle && (
              <div className="text-brand-blue  text-sm font-bold tracking-widest uppercase mb-4">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal  font-heading leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-cyan/50 to-transparent hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(75,192,217,0.8)] z-10" />

                {/* Content */}
                <div className="w-full md:w-1/2 pl-8 md:px-12">
                  <div className={cn(
                    "p-8 rounded-2xl bg-white [#212529] shadow-xl border border-gray-100  hover:border-brand-blue/30 transition-all duration-300",
                    index % 2 === 0 ? "text-left md:text-right" : "text-left"
                  )}>
                    <div className="text-brand-blue  font-bold text-lg mb-2">
                      Phase 0{index + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-charcoal  mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600  leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
