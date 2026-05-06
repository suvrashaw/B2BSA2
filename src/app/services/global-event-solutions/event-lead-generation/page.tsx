import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/layout/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  ELG_HERO, ELG_WHY, ELG_DELIVERABLES, ELG_STATS,
  ELG_CASE_STUDIES, ELG_TESTIMONIALS, ELG_FAQ, ELG_CONTACT,
} from "@/content/services/detail/event-lead-generation";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/event-lead-generation");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/global-event-solutions/event-lead-generation"
      hero={ELG_HERO}
      why={ELG_WHY}
      deliverables={ELG_DELIVERABLES}
      stats={ELG_STATS}
      caseStudies={ELG_CASE_STUDIES}
      testimonials={ELG_TESTIMONIALS}
      faq={ELG_FAQ}
      contact={ELG_CONTACT}
    />
  );
}
