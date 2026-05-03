"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface USPItem {
  title: string;
  description: string;
}

interface USPSectionProps {
  title: string;
  items: USPItem[];
  className?: string;
  dark?: boolean;
}

export function USPSection({ title, items, className, dark = false }: USPSectionProps) {
  return (
    <section className={cn(
      "py-24",
      dark ? "bg-brand-charcoal text-white" : "bg-brand-white text-brand-charcoal",
      className
    )}>
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="opacity-70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
              alt="Why B2B Sales Arrow" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
