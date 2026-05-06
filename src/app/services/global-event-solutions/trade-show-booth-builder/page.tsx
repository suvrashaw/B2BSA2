import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  TSBB_HERO, TSBB_WHY, TSBB_DELIVERABLES, TSBB_STATS,
  TSBB_CASE_STUDIES, TSBB_TESTIMONIALS, TSBB_FAQ, TSBB_CONTACT,
} from "@/content/services/detail/trade-show-booth-builder";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/trade-show-booth-builder");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/trade-show-booth-builder"
      hero={TSBB_HERO}
      why={TSBB_WHY}
      deliverables={TSBB_DELIVERABLES}
      stats={TSBB_STATS}
      caseStudies={TSBB_CASE_STUDIES}
      testimonials={TSBB_TESTIMONIALS}
      faq={TSBB_FAQ}
      contact={TSBB_CONTACT}
    />
  );
}
