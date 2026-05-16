"use client";

import type { ReactNode } from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { CaseStudyCardData } from "@/types/case-studies";

import { Button } from "@/components/ui/Button";
import { CaseStudyShowcaseCard } from "@/components/ui/CaseStudyShowcaseCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  type CaseStudiesContent,
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudyItem as HomeCaseStudyItem,
} from "@/content/home";

export type CaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

const FALLBACK_CASE_STUDY_ICONS = ["Target", "Sparkles", "Building2"];

export interface CaseStudiesProps {
  caseStudies?: CaseStudyItem[];
  content?: CaseStudiesContent;
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  eyebrow?: CaseStudiesContent["eyebrow"];
  getStudyHref?: (study: CaseStudyItem) => string;
  heading?: ReactNode;
  items?: CaseStudyItem[];
  viewAllHref?: string;
  viewAllLabel?: CaseStudiesContent["viewAllLabel"];
}

export function CaseStudies({
  caseStudies,
  content = HOME_CASE_STUDIES_CONTENT,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  getStudyHref = (study) => study.href ?? viewAllHref,
  heading = content.heading,
  items,
  viewAllHref = "/case-studies",
  viewAllLabel = content.viewAllLabel,
}: CaseStudiesProps = {}) {
  const resolvedCaseStudies = (items ?? caseStudies ?? content.items).map((study, index) => ({
    ...study,
    icon: study.icon ?? FALLBACK_CASE_STUDY_ICONS[index % FALLBACK_CASE_STUDY_ICONS.length],
    id: study.id ?? createCaseStudyId(study, index),
  }));

  const cards: CaseStudyCardData[] = resolvedCaseStudies.map((study) => ({
    client: study.client,
    href: getStudyHref(study),
    icon: study.icon,
    id: study.id,
    image: study.image,
    inactiveLabel: study.client,
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
    title: study.title,
  }));
  const [activeId, setActiveId] = useState<string>(resolvedCaseStudies[0]?.id ?? "");
  const activeCaseStudyId = cards.some((study) => study.id === activeId)
    ? activeId
    : (cards[0]?.id ?? "");

  return (
    <section className="relative bg-brand-gray py-20" id="work">
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
                active={isActive}
                ctaLabel={ctaLabel}
                item={study}
                key={study.id}
                onActivate={() => setActiveId(study.id)}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href={viewAllHref}>
            <Button className="hidden md:inline-flex" variant="tertiary">
              {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function createCaseStudyId(study: CaseStudyItem, index: number) {
  return `${study.client}-${study.title}-${index}`
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
}
