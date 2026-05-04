import type { Metadata } from "next";

import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  TSBB_HERO, TSBB_WHY, TSBB_DELIVERABLES, TSBB_STATS,
  TSBB_CASE_STUDIES, TSBB_TESTIMONIALS, TSBB_FAQ, TSBB_CONTACT,
} from "@/content/page-sections/services/detail/trade-show-booth-builder";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/trade-show-booth-builder");

export default function Page() {
  return (
    <ServiceDetailPage
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
