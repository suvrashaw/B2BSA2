import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  DV_HERO, DV_WHY, DV_DELIVERABLES, DV_STATS,
  DV_CASE_STUDIES, DV_TESTIMONIALS, DV_FAQ, DV_CONTACT,
} from "@/content/page-sections/services/detail/data-validation";

export const metadata: Metadata = getPageMetadata("/services/market-research/data-validation");

export default function Page() {
  return (
    <ServiceDetailPage
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
