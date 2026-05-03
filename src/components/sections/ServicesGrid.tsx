"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Layout, Users, Zap, Calendar, Wrench } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ICONS = {
  globe: Globe,
  layout: Layout,
  users: Users,
  zap: Zap,
  calendar: Calendar,
  wrench: Wrench
};

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: keyof typeof ICONS;
}

interface ServicesGridProps {
  title: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
  dark?: boolean;
}

export function ServicesGrid({ title, subtitle, services, className, dark = false }: ServicesGridProps) {
  return (
    <section className={cn(
      "py-24",
      dark ? "bg-brand-charcoal text-white" : "bg-brand-white text-brand-charcoal",
      className
    )}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mb-16">
          {subtitle && (
            <div className="text-brand-blue dark:text-brand-cyan text-sm font-bold tracking-widest uppercase mb-4">
              {subtitle}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon ? ICONS[service.icon] : Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href} className="block h-full p-8 rounded-3xl bg-brand-gray/5 dark:bg-white/5 border border-brand-charcoal/5 dark:border-white/5 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-brand-blue dark:text-brand-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="opacity-70 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-brand-blue dark:text-brand-cyan font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
