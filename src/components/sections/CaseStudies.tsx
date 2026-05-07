"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    <section id="work" className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold  leading-tight">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
          {caseStudies.map((study) => {
            const isActive = activeCaseStudyId === study.id;

            return (
              <motion.div
                key={study.id}
                layout
                transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                onHoverStart={() => setActiveId(study.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${
                  isActive ? "lg:flex-[3] lg:max-w-none" : "lg:flex-[1] lg:max-w-[120px]"
                }`}
                style={{
                  height: isActive ? "100%" : "auto",
                  minHeight: "100px",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
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
                        ? "bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent"
                        : "bg-brand-charcoal/60 group-hover:bg-brand-charcoal/40"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md transition-colors duration-300 ${
                        isActive ? "bg-brand-blue/90" : "bg-white/10 group-hover:bg-brand-cyan/80"
                      }`}
                    >
                      <Icon
                        name={study.icon}
                        className={`w-5 h-5 ${isActive ? "text-white" : "text-white"}`}
                      />
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
                          <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 w-max">
                            {study.client}
                          </span>
                          <h3 className="font-heading font-bold text-2xl text-white mb-4 line-clamp-2">
                            {study.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                                Challenge
                              </h4>
                              <p className="text-gray-200 text-xs line-clamp-2">
                                {study.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider mb-1">
                                Solution
                              </h4>
                              <p className="text-gray-200 text-xs line-clamp-2">{study.solution}</p>
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
                        className="absolute bottom-8 left-0 w-full flex justify-center lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 hidden lg:block"
                      >
                        <span className="text-white font-heading font-semibold tracking-wider whitespace-nowrap">
                          {study.client}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="absolute bottom-8 right-8 px-6 py-3 rounded-full bg-brand-blue text-white font-medium shadow-lg hover:bg-brand-cyan hover: transition-all duration-300 flex items-center gap-2"
                      >
                        {ctaLabel} <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
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
                        className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center"
                      >
                        <span className="font-heading font-bold text-2xl text-brand-blue">
                          {study.metric}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
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
          <button className="hidden md:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all duration-300">
            {viewAllLabel} <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
