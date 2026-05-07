
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  CE_HERO,
  CE_WHY,
  CE_DELIVERABLES,
  CE_STATS,
  CE_CASE_STUDIES,
  CE_TESTIMONIALS,
  CE_FAQ,
  CE_CONTACT,
} from "@/content/services/detail/custom-events";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/custom-events");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/custom-events"
      hero={CE_HERO}
      why={CE_WHY}
      deliverables={CE_DELIVERABLES}
      stats={CE_STATS}
      caseStudies={CE_CASE_STUDIES}
      testimonials={CE_TESTIMONIALS}
      faq={CE_FAQ}
      contact={CE_CONTACT}
    />
  );
}
