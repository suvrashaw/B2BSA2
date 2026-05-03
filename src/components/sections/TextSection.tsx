"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextSectionProps {
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  columns?: 1 | 2;
  className?: string;
  dark?: boolean;
}

export function TextSection({ title, subtitle, content, columns = 1, className }: TextSectionProps) {
  return (
    <section className={cn(
      "py-24 bg-brand-white text-brand-charcoal",
      className
    )}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-4"
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-12"
          >
            {title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(
              "prose prose-lg max-w-none",
              columns === 2 ? "md:columns-2 md:gap-12" : ""
            )}
          >
            {typeof content === 'string' ? (
              <div className="text-gray-600 leading-relaxed space-y-6">
                {content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : content}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
