"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import {
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudiesContent,
  type CaseStudyItem,
} from "@/content/home";

export interface CaseStudiesProps {
  content?: CaseStudiesContent;
  eyebrow?: CaseStudiesContent["eyebrow"];
  heading?: CaseStudiesContent["heading"];
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  viewAllLabel?: CaseStudiesContent["viewAllLabel"];
  caseStudies?: CaseStudyItem[];
}

export function CaseStudies({
  content = HOME_CASE_STUDIES_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  ctaLabel = content.ctaLabel,
  viewAllLabel = content.viewAllLabel,
  caseStudies = content.items,
}: CaseStudiesProps = {}) {
  const [activeId, setActiveId] = useState<string>(caseStudies[0]?.id ?? "");
  const activeCaseStudyId = caseStudies.some((study) => study.id === activeId)
    ? activeId
    : (caseStudies[0]?.id ?? "");

  return (
    <section id="work" className="bg-brand-gray relative py-20">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue/10 border-brand-blue/20 text-brand-blue mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl leading-tight font-bold  lg:text-5xl">{heading}</h2>
        </div>

        <div className="flex h-[600px] w-full flex-col gap-4 lg:flex-row">
          {caseStudies.map((study) => {
            const isActive = activeCaseStudyId === study.id;

            return (
              <motion.div
                key={study.id}
                layout
                transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                onHoverStart={() => setActiveId(study.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl ${
                  isActive ? "lg:max-w-none lg:flex-[3]" : "lg:max-w-[120px] lg:flex-[1]"
                }`}
                style={{
                  height: isActive ? "100%" : "auto",
                  minHeight: "100px",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ${
                      isActive ? "scale-105" : "scale-100 grayscale hover:grayscale-0"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? "from-brand-charcoal/90 via-brand-charcoal/40 bg-gradient-to-t to-transparent"
                        : "bg-brand-charcoal/60 group-hover:bg-brand-charcoal/40"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-colors duration-300 ${
                        isActive ? "bg-brand-blue/90" : "group-hover:bg-brand-cyan/80 bg-white/10"
                      }`}
                    >
                      <Icon name={study.icon} className="h-5 w-5 text-white" />
                    </div>

                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col"
                        >
                          <span className="bg-brand-blue mb-3 w-max rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                            {study.client}
                          </span>
                          <h3 className="font-heading mb-4 line-clamp-2 text-2xl font-bold text-white">
                            {study.title}
                          </h3>
                          <div className="flex gap-12">
                            <div className="max-w-[180px]">
                              <h4 className="mb-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-70">
                                Challenge
                              </h4>
                              <p className="line-clamp-2 text-xs text-gray-200">
                                {study.challenge}
                              </p>
                            </div>
                            <div className="max-w-[240px]">
                              <h4 className="mb-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-70">
                                Solution
                              </h4>
                              <p className="line-clamp-2 text-xs text-gray-200">{study.solution}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Vertical text for inactive state */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-8 left-0 flex hidden w-full justify-center lg:top-1/2 lg:bottom-auto lg:block lg:-translate-y-1/2 lg:-rotate-90"
                      >
                        <span className="font-heading font-semibold tracking-wider whitespace-nowrap text-white">
                          {study.client}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="absolute right-8 bottom-8"
                      >
                        <Link href={`/case-studies/${study.id}`}>
                          <Button variant="primary" className="shadow-lg">
                            {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Floating Metric for Active State */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="absolute top-8 right-8 flex flex-col items-center rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md"
                      >
                        <span className="font-heading text-brand-blue text-2xl font-bold">
                          {study.metric}
                        </span>
                        <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                          {study.metricLabel}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button variant="tertiary" className="hidden md:inline-flex">
              {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
