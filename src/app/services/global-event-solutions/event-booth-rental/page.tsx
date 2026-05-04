import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  EBR_HERO, EBR_WHY, EBR_DELIVERABLES, EBR_STATS,
  EBR_CASE_STUDIES, EBR_TESTIMONIALS, EBR_FAQ, EBR_CONTACT,
} from "@/content/page-sections/services/detail/event-booth-rental";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/event-booth-rental");

export default function Page() {
  return (
    <ServiceDetailPage
      hero={EBR_HERO}
      why={EBR_WHY}
      deliverables={EBR_DELIVERABLES}
      stats={EBR_STATS}
      caseStudies={EBR_CASE_STUDIES}
      testimonials={EBR_TESTIMONIALS}
      faq={EBR_FAQ}
      contact={EBR_CONTACT}
    />
  );
}
