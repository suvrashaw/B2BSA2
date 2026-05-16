"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { CaseStudyCardData } from "@/types/case-studies";

import { cn } from "@/lib";

import { Button } from "./Button";
import Icon from "./Icon";

interface CaseStudyShowcaseCardProps {
  active: boolean;
  className?: string;
  ctaLabel: string;
  item: CaseStudyCardData;
  onActivate?: () => void;
}

export function CaseStudyShowcaseCard({
  active,
  className,
  ctaLabel,
  item,
  onActivate,
}: CaseStudyShowcaseCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl",
        active ? "lg:max-w-none lg:flex-[3]" : "lg:max-w-[120px] lg:flex-[1]",
        className
      )}
      layout
      onClick={onActivate}
      onFocusCapture={onActivate}
      onHoverStart={onActivate}
      style={{
        height: active ? "100%" : "auto",
        minHeight: "100px",
      }}
      transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          alt={item.title}
          className={cn(
            "object-cover transition-transform duration-1000",
            active ? "scale-105" : "scale-100 grayscale hover:grayscale-0"
          )}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          src={item.image}
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
            <Icon className="h-5 w-5 text-white" name={item.icon} />
          </div>

          <AnimatePresence mode="popLayout">
            {active ? (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex min-w-0 flex-1 flex-col"
                exit={{ opacity: 0, x: -20 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="w-max rounded-full bg-brand-blue px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    {item.client}
                  </span>
                  {item.badge ? (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mb-4 line-clamp-2 font-heading text-2xl font-bold text-white">
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
              animate={{ opacity: 1 }}
              className="absolute bottom-8 left-0 hidden w-full justify-center lg:top-1/2 lg:bottom-auto lg:block lg:-translate-y-1/2 lg:-rotate-90"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-8 bottom-8"
              exit={{ opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Link href={item.href}>
                <Button className="shadow-lg" variant="primary">
                  {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 flex flex-col items-center rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur-md"
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span className="font-heading text-2xl font-bold text-brand-blue">{item.metric}</span>
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
