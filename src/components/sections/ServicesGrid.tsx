"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Layout,
  Users,
  Zap,
  Calendar,
  Wrench,
  Target,
  Shield,
  BarChart,
  Search,
  Box,
} from "lucide-react";
import { LucideProps } from "lucide-react";

import { cn } from "@/lib";

const ICONS: Record<string, React.ElementType<LucideProps>> = {
  globe: Globe,
  layout: Layout,
  users: Users,
  zap: Zap,
  calendar: Calendar,
  wrench: Wrench,
  target: Target,
  shield: Shield,
  "bar-chart": BarChart,
  search: Search,
  box: Box,
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

export function ServicesGrid({ title, subtitle, services, className }: ServicesGridProps) {
  return (
    <section className={cn("py-24 bg-brand-white ", className)}>
      <div className="container mx-auto px-8">
        <div className="mb-16 max-w-4xl">
          {subtitle && (
            <div className="mb-4 text-sm font-bold tracking-widest text-brand-blue uppercase">
              {subtitle}
            </div>
          )}
          <h2 className="font-heading text-3xl leading-tight font-bold md:text-5xl">{title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon && ICONS[service.icon] ? ICONS[service.icon] : Zap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="block flex h-full flex-col justify-between rounded-3xl border border-brand-charcoal/5 bg-brand-gray/5 p-8 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/10"
                >
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h3 className="mb-4 font-heading text-2xl font-bold transition-colors group-hover:text-brand-blue">
                      {service.title}
                    </h3>
                    <p className="mb-8 leading-relaxed opacity-70">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-brand-blue uppercase transition-all group-hover:gap-4">
                    Explore Service <ArrowRight className="h-4 w-4" />
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
