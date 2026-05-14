import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  MPB_HERO,
  MPB_WHY,
  MPB_DELIVERABLES,
  MPB_STATS,
  MPB_CASE_STUDIES,
  MPB_TESTIMONIALS,
  MPB_FAQ,
  MPB_CONTACT,
} from "@/content/services/detail/modular-portable-booths";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/modular-portable-booths"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/modular-portable-booths"
      hero={MPB_HERO}
      why={MPB_WHY}
      deliverables={MPB_DELIVERABLES}
      stats={MPB_STATS}
      caseStudies={MPB_CASE_STUDIES}
      testimonials={MPB_TESTIMONIALS}
      faq={MPB_FAQ}
      contact={MPB_CONTACT}
    />
  );
}
