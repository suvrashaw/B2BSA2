"use client";

import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib";

const eyebrowVariants = cva(
  "mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide",
  {
    variants: {
      variant: {
        neutral: "border border-brand-charcoal/10 bg-brand-charcoal/5 text-brand-charcoal",
        blue: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        cyan: "border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan",
        primary: "border border-brand-primary/20 bg-brand-primary/10 text-brand-primary",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

interface EyebrowProps extends VariantProps<typeof eyebrowVariants> {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, variant, className }: EyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(eyebrowVariants({ variant }), className)}
    >
      {children}
    </motion.div>
  );
}
