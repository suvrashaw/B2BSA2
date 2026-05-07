
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  IE_HERO,
  IE_WHY,
  IE_DELIVERABLES,
  IE_STATS,
  IE_CASE_STUDIES,
  IE_TESTIMONIALS,
  IE_FAQ,
  IE_CONTACT,
} from "@/content/services/detail/industry-events";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/industry-events"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/industry-events"
      hero={IE_HERO}
      why={IE_WHY}
      deliverables={IE_DELIVERABLES}
      stats={IE_STATS}
      caseStudies={IE_CASE_STUDIES}
      testimonials={IE_TESTIMONIALS}
      faq={IE_FAQ}
      contact={IE_CONTACT}
    />
  );
}
