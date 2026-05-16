"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib";

interface ProofBarProps {
  stats: string[];
  className?: string;
}

export function ProofBar({ stats, className }: ProofBarProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className={cn("bg-brand-gray/5 border-y border-gray-100 py-6", className)}>
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {stats.map((stat, index) => {
            // Split by " | " or just take the whole string if no divider
            const parts = stat.split("|").map((s) => s.trim());

            return (
              <div
                key={index}
                className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
              >
                {parts.map((part, pIndex) => {
                  const [value, ...labelParts] = part.split(" ");
                  const label = labelParts.join(" ");

                  return (
                    <motion.div
                      key={`${index}-${pIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * parts.length + pIndex) * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                        {value}
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase md:text-xs">
                        {label}
                      </span>
                      {pIndex < parts.length - 1 && (
                        <div className="ml-8 hidden h-8 w-px bg-brand-blue/20 md:block" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
