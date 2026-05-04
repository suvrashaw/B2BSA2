import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  MPB_HERO, MPB_WHY, MPB_DELIVERABLES, MPB_STATS,
  MPB_CASE_STUDIES, MPB_TESTIMONIALS, MPB_FAQ, MPB_CONTACT,
} from "@/content/page-sections/services/detail/modular-portable-booths";

export const metadata: Metadata = getPageMetadata("/services/booth-design-production/modular-portable-booths");

export default function Page() {
  return (
    <ServiceDetailPage
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
