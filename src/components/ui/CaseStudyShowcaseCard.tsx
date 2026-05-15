"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib";
import type { CaseStudyCardData } from "@/types/case-studies";

import { Button } from "./Button";
import Icon from "./Icon";

interface CaseStudyShowcaseCardProps {
  item: CaseStudyCardData;
  active: boolean;
  ctaLabel: string;
  onActivate?: () => void;
  className?: string;
}

export function CaseStudyShowcaseCard({
  item,
  active,
  ctaLabel,
  onActivate,
  className,
}: CaseStudyShowcaseCardProps) {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={onActivate}
      onFocusCapture={onActivate}
      onClick={onActivate}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl",
        active ? "lg:max-w-none lg:flex-[3]" : "lg:max-w-[120px] lg:flex-[1]",
        className
      )}
      style={{
        height: active ? "100%" : "auto",
        minHeight: "100px",
      }}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={cn(
            "object-cover transition-transform duration-1000",
            active ? "scale-105" : "scale-100 grayscale hover:grayscale-0"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            active
              ? "from-brand-charcoal/90 via-brand-charcoal/40 bg-gradient-to-t to-transparent"
              : "bg-brand-charcoal/60 group-hover:bg-brand-charcoal/40"
          )}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300",
              active ? "bg-brand-blue/90" : "group-hover:bg-brand-cyan/80 bg-white/10"
            )}
          >
            <Icon name={item.icon} className="h-5 w-5 text-white" />
          </div>

          <AnimatePresence mode="popLayout">
            {active ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex min-w-0 flex-1 flex-col"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="bg-brand-blue w-max rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    {item.client}
                  </span>
                  {item.badge ? (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-heading mb-4 line-clamp-2 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-4 xl:flex-row xl:gap-10">
                  <div className="max-w-[220px]">
                    <h4 className="mb-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-70">
                      {item.primarySummary.label}
                    </h4>
                    <p className="line-clamp-3 text-xs text-gray-200">{item.primarySummary.text}</p>
                  </div>
                  <div className="max-w-[280px]">
                    <h4 className="mb-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-70">
                      {item.secondarySummary.label}
                    </h4>
                    <p className="line-clamp-3 text-xs text-gray-200">
                      {item.secondarySummary.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {active ? null : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-0 hidden w-full justify-center lg:top-1/2 lg:bottom-auto lg:block lg:-translate-y-1/2 lg:-rotate-90"
            >
              <span className="font-heading font-semibold tracking-wider whitespace-nowrap text-white">
                {item.inactiveLabel ?? item.client}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && item.href ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute right-8 bottom-8"
            >
              <Link href={item.href}>
                <Button variant="primary" className="shadow-lg">
                  {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute top-8 right-8 flex flex-col items-center rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur-md"
            >
              <span className="font-heading text-brand-blue text-2xl font-bold">{item.metric}</span>
              <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                {item.metricLabel}
              </span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
