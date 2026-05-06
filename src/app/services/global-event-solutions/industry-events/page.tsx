import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  IE_HERO, IE_WHY, IE_DELIVERABLES, IE_STATS,
  IE_CASE_STUDIES, IE_TESTIMONIALS, IE_FAQ, IE_CONTACT,
} from "@/content/page-sections/services/detail/industry-events";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/industry-events");

export default function Page() {
  return (
    <ServiceDetailPage
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
