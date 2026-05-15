"use client";

import { useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { CaseStudyShowcaseCard } from "@/components/ui/CaseStudyShowcaseCard";
import {
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudiesContent,
  type CaseStudyItem,
} from "@/content/home";
import type { CaseStudyCardData } from "@/types/case-studies";

export interface CaseStudiesProps {
  content?: CaseStudiesContent;
  eyebrow?: CaseStudiesContent["eyebrow"];
  heading?: CaseStudiesContent["heading"];
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  viewAllLabel?: CaseStudiesContent["viewAllLabel"];
  caseStudies?: CaseStudyItem[];
  viewAllHref?: string;
  getStudyHref?: (study: CaseStudyItem) => string;
}

export function CaseStudies({
  content = HOME_CASE_STUDIES_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  ctaLabel = content.ctaLabel,
  viewAllLabel = content.viewAllLabel,
  caseStudies = content.items,
  viewAllHref = "/case-studies",
  getStudyHref = () => "/case-studies",
}: CaseStudiesProps = {}) {
  const cards: CaseStudyCardData[] = caseStudies.map((study) => ({
    id: study.id,
    client: study.client,
    title: study.title,
    image: study.image,
    icon: study.icon,
    metric: study.metric,
    metricLabel: study.metricLabel,
    primarySummary: {
      label: "Challenge",
      text: study.challenge,
    },
    secondarySummary: {
      label: "Solution",
      text: study.solution,
    },
    href: getStudyHref(study),
    inactiveLabel: study.client,
  }));
  const [activeId, setActiveId] = useState<string>(caseStudies[0]?.id ?? "");
  const activeCaseStudyId = cards.some((study) => study.id === activeId)
    ? activeId
    : (cards[0]?.id ?? "");

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
          {cards.map((study) => {
            const isActive = activeCaseStudyId === study.id;

            return (
              <CaseStudyShowcaseCard
                key={study.id}
                item={study}
                active={isActive}
                ctaLabel={ctaLabel}
                onActivate={() => setActiveId(study.id)}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href={viewAllHref}>
            <Button variant="tertiary" className="hidden md:inline-flex">
              {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
