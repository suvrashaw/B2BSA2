import type { Metadata } from "next";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  DV_HERO, DV_WHY, DV_DELIVERABLES, DV_STATS,
  DV_CASE_STUDIES, DV_TESTIMONIALS, DV_FAQ, DV_CONTACT,
} from "@/content/services/detail/data-validation";

export const metadata: Metadata = getPageMetadata("/services/market-research/data-validation");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/market-research/data-validation"
      hero={DV_HERO}
      why={DV_WHY}
      deliverables={DV_DELIVERABLES}
      stats={DV_STATS}
      caseStudies={DV_CASE_STUDIES}
      testimonials={DV_TESTIMONIALS}
      faq={DV_FAQ}
      contact={DV_CONTACT}
    />
  );
}
