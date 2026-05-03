"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
}

interface StatsBarProps {
  stats: StatItem[];
  className?: string;
  dark?: boolean;
}

export function StatsBar({ stats, className, dark = false }: StatsBarProps) {
  return (
    <div className={cn(
      "w-full py-12 border-y",
      dark 
        ? "bg-brand-charcoal border-white/10 text-white" 
        : "bg-brand-white border-brand-charcoal/10 text-brand-charcoal",
      className
    )}>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold font-heading mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-cyan">
                {stat.value}
              </div>
              <div className={cn(
                "text-xs md:text-sm font-semibold tracking-widest uppercase opacity-70",
                dark ? "text-gray-400" : "text-gray-500"
              )}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
