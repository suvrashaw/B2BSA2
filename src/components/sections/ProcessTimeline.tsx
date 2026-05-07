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
          <div className="mx-auto mb-20 max-w-3xl text-center">
            {subtitle && (
              <div className="text-brand-blue  mb-4 text-sm font-bold tracking-widest uppercase">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="font-heading text-3xl leading-tight   font-bold md:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="from-brand-blue/50 via-brand-cyan/50 absolute top-0 bottom-0 left-0 hidden w-px bg-gradient-to-b to-transparent md:left-1/2 md:block" />

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
                <div className="bg-brand-cyan absolute top-0 left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(75,192,217,0.8)] md:top-1/2 md:left-1/2 md:-translate-y-1/2" />

                {/* Content */}
                <div className="w-full pl-8 md:w-1/2 md:px-12">
                  <div
                    className={cn(
                      "p-8 rounded-2xl bg-white [#212529] shadow-xl border border-gray-100  hover:border-brand-blue/30 transition-all duration-300",
                      index % 2 === 0 ? "text-left md:text-right" : "text-left"
                    )}
                  >
                    <div className="text-brand-blue  mb-2 text-lg font-bold">
                      Phase 0{index + 1}
                    </div>
                    <h3 className="mb-4 text-xl font-bold   md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm  leading-relaxed text-gray-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden w-full md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
