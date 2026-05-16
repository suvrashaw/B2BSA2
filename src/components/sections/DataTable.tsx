"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib";

interface DataTableRow {
  [key: string]: string;
}

interface DataTableProps {
  title?: string;
  description?: string;
  headers: string[];
  rows: DataTableRow[];
  className?: string;
}

export function DataTable({ title, description, headers, rows, className }: DataTableProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-8">
        {(title || description) && (
          <div className="mb-12 max-w-3xl">
            {title && (
              <h2 className="mb-4 font-heading text-3xl font-bold text-brand-gray md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg leading-relaxed text-brand-gray/70">{description}</p>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-100/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-brand-gray/5">
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-8 py-6 text-xs font-bold tracking-widest text-gray-500 uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-brand-gray/2">
                    {headers.map((header, colIndex) => (
                      <td
                        key={colIndex}
                        className={cn(
                          "px-8 py-6 text-brand-gray text-base",
                          colIndex === 0 ? "font-bold" : "font-medium"
                        )}
                      >
                        {row[header.toLowerCase()] || row[header] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
