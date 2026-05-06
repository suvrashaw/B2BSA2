import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/layout/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  DA_HERO, DA_WHY, DA_DELIVERABLES, DA_STATS,
  DA_CASE_STUDIES, DA_TESTIMONIALS, DA_FAQ, DA_CONTACT,
} from "@/content/services/detail/data-augmentation";

export const metadata: Metadata = getPageMetadata("/services/market-research/data-augmentation");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/market-research/data-augmentation"
      hero={DA_HERO}
      why={DA_WHY}
      deliverables={DA_DELIVERABLES}
      stats={DA_STATS}
      caseStudies={DA_CASE_STUDIES}
      testimonials={DA_TESTIMONIALS}
      faq={DA_FAQ}
      contact={DA_CONTACT}
    />
  );
}
