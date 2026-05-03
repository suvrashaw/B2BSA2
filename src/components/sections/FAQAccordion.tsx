"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQAccordion({ items, title = "Frequently Asked Questions", subtitle, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("py-24 bg-brand-white dark:bg-brand-charcoal", className)}>
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="mb-16">
          {subtitle && (
            <div className="text-brand-blue dark:text-brand-cyan text-sm font-bold tracking-widest uppercase mb-4">
              {subtitle}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal dark:text-white font-heading">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 dark:border-gray-800 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group transition-all"
              >
                <span className="text-lg md:text-xl font-bold text-brand-charcoal dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors pr-8">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <Minus className="w-4 h-4 text-brand-blue" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                      <Plus className="w-4 h-4 text-gray-400 group-hover:text-brand-blue" />
                    </div>
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
