import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/layout/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  CVP_HERO, CVP_WHY, CVP_DELIVERABLES, CVP_STATS,
  CVP_CASE_STUDIES, CVP_TESTIMONIALS, CVP_FAQ, CVP_CONTACT,
} from "@/content/services/detail/corporate-video-production";

export const metadata: Metadata = getPageMetadata("/services/media-production/corporate-video-production");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/media-production/corporate-video-production"
      hero={CVP_HERO}
      why={CVP_WHY}
      deliverables={CVP_DELIVERABLES}
      stats={CVP_STATS}
      caseStudies={CVP_CASE_STUDIES}
      testimonials={CVP_TESTIMONIALS}
      faq={CVP_FAQ}
      contact={CVP_CONTACT}
    />
  );
}
