import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  LSS_HERO,
  LSS_WHY,
  LSS_DELIVERABLES,
  LSS_STATS,
  LSS_CASE_STUDIES,
  LSS_TESTIMONIALS,
  LSS_FAQ,
  LSS_CONTACT,
} from "@/content/services/detail/live-streaming-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/live-streaming-services"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/live-streaming-services"
      hero={LSS_HERO}
      why={LSS_WHY}
      deliverables={LSS_DELIVERABLES}
      stats={LSS_STATS}
      caseStudies={LSS_CASE_STUDIES}
      testimonials={LSS_TESTIMONIALS}
      faq={LSS_FAQ}
      contact={LSS_CONTACT}
    />
  );
}
