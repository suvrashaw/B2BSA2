import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/layout/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  LIADS_HERO, LIADS_WHY, LIADS_DELIVERABLES, LIADS_STATS,
  LIADS_CASE_STUDIES, LIADS_TESTIMONIALS, LIADS_FAQ, LIADS_CONTACT,
} from "@/content/services/detail/linkedin-ads-b2b";

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/linkedin-ads-b2b");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/performance-marketing/linkedin-ads-b2b"
      hero={LIADS_HERO}
      why={LIADS_WHY}
      deliverables={LIADS_DELIVERABLES}
      stats={LIADS_STATS}
      caseStudies={LIADS_CASE_STUDIES}
      testimonials={LIADS_TESTIMONIALS}
      faq={LIADS_FAQ}
      contact={LIADS_CONTACT}
    />
  );
}
