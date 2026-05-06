import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  HPMI_HERO, HPMI_WHY, HPMI_DELIVERABLES, HPMI_STATS,
  HPMI_CASE_STUDIES, HPMI_TESTIMONIALS, HPMI_FAQ, HPMI_CONTACT,
} from "@/content/page-sections/services/detail/human-powered-market-intelligence";

export const metadata: Metadata = getPageMetadata("/services/market-research/human-powered-market-intelligence");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/market-research/human-powered-market-intelligence"
      hero={HPMI_HERO}
      why={HPMI_WHY}
      deliverables={HPMI_DELIVERABLES}
      stats={HPMI_STATS}
      caseStudies={HPMI_CASE_STUDIES}
      testimonials={HPMI_TESTIMONIALS}
      faq={HPMI_FAQ}
      contact={HPMI_CONTACT}
    />
  );
}
