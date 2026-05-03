"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  feature: string;
  standard: string;
  b2bsa: string;
  isPositive?: boolean;
}

interface ComparisonTableProps {
  title: string;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({ title, rows, className }: ComparisonTableProps) {
  return (
    <section className={cn("py-24 bg-brand-white", className)}>
      <div className="container mx-auto px-8 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">{title}</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-charcoal/10">
                <th className="py-6 px-4 text-left text-brand-charcoal/50 uppercase tracking-widest text-xs font-bold">Feature</th>
                <th className="py-6 px-4 text-center text-brand-charcoal/50 uppercase tracking-widest text-xs font-bold bg-brand-gray/30">Standard Vendors</th>
                <th className="py-6 px-4 text-center text-brand-blue uppercase tracking-widest text-sm font-black bg-brand-blue/5">B2B Sales Arrow</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-brand-charcoal/5 hover:bg-brand-gray/5 transition-colors"
                >
                  <td className="py-8 px-4 font-bold text-brand-charcoal">{row.feature}</td>
                  <td className="py-8 px-4 text-center text-gray-500 bg-brand-gray/10">
                    <div className="flex flex-col items-center gap-2">
                       <X className="w-5 h-5 text-red-400" />
                       <span className="text-sm">{row.standard}</span>
                    </div>
                  </td>
                  <td className="py-8 px-4 text-center text-brand-blue font-bold bg-brand-blue/5">
                    <div className="flex flex-col items-center gap-2">
                       <Check className="w-6 h-6 text-brand-cyan" />
                       <span className="text-sm">{row.b2bsa}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
