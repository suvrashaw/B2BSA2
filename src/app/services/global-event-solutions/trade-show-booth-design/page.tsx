import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  TSBD_HERO, TSBD_WHY, TSBD_DELIVERABLES, TSBD_STATS,
  TSBD_CASE_STUDIES, TSBD_TESTIMONIALS, TSBD_FAQ, TSBD_CONTACT,
} from "@/content/page-sections/services/detail/trade-show-booth-design";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/trade-show-booth-design");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/global-event-solutions/trade-show-booth-design"
      hero={TSBD_HERO}
      why={TSBD_WHY}
      deliverables={TSBD_DELIVERABLES}
      stats={TSBD_STATS}
      caseStudies={TSBD_CASE_STUDIES}
      testimonials={TSBD_TESTIMONIALS}
      faq={TSBD_FAQ}
      contact={TSBD_CONTACT}
    />
  );
}
