import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  PAID_HERO,
  PAID_WHY,
  PAID_DELIVERABLES,
  PAID_STATS,
  PAID_CASE_STUDIES,
  PAID_TESTIMONIALS,
  PAID_FAQ,
  PAID_CONTACT,
} from "@/content/services/detail/paid-advertising";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/paid-advertising");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/paid-advertising"
      hero={PAID_HERO}
      why={PAID_WHY}
      deliverables={PAID_DELIVERABLES}
      stats={PAID_STATS}
      caseStudies={PAID_CASE_STUDIES}
      testimonials={PAID_TESTIMONIALS}
      faq={PAID_FAQ}
      contact={PAID_CONTACT}
    />
  );
}
