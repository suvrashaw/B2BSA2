import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  EBR_HERO,
  EBR_WHY,
  EBR_DELIVERABLES,
  EBR_STATS,
  EBR_CASE_STUDIES,
  EBR_TESTIMONIALS,
  EBR_FAQ,
  EBR_CONTACT,
} from "@/content/services/detail/event-booth-rental";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/event-booth-rental"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/event-booth-rental"
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
