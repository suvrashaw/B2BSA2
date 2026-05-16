"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { CaseStudyShowcaseCard } from "@/components/ui/CaseStudyShowcaseCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudiesContent,
  type CaseStudyItem as HomeCaseStudyItem,
} from "@/content/home";
import type { CaseStudyCardData } from "@/types/case-studies";

export type CaseStudyItem = Omit<HomeCaseStudyItem, "id" | "icon"> & {
  href?: string;
  id?: string;
  icon?: string;
};

const FALLBACK_CASE_STUDY_ICONS = ["Target", "Sparkles", "Building2"];

function createCaseStudyId(study: CaseStudyItem, index: number) {
  return `${study.client}-${study.title}-${index}`
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
}

export interface CaseStudiesProps {
  content?: CaseStudiesContent;
  eyebrow?: CaseStudiesContent["eyebrow"];
  heading?: ReactNode;
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  items?: CaseStudyItem[];
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
  items,
  viewAllLabel = content.viewAllLabel,
  caseStudies,
  viewAllHref = "/case-studies",
  getStudyHref = (study) => study.href ?? viewAllHref,
}: CaseStudiesProps = {}) {
  const resolvedCaseStudies = (items ?? caseStudies ?? content.items).map((study, index) => ({
    ...study,
    id: study.id ?? createCaseStudyId(study, index),
    icon: study.icon ?? FALLBACK_CASE_STUDY_ICONS[index % FALLBACK_CASE_STUDY_ICONS.length],
  }));

  const cards: CaseStudyCardData[] = resolvedCaseStudies.map((study) => ({
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
  const [activeId, setActiveId] = useState<string>(resolvedCaseStudies[0]?.id ?? "");
  const activeCaseStudyId = cards.some((study) => study.id === activeId)
    ? activeId
    : (cards[0]?.id ?? "");

  return (
    <section id="work" className="relative bg-brand-gray py-20">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          <Eyebrow variant="blue">{eyebrow}</Eyebrow>
          <Heading as="h2">{heading}</Heading>
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
