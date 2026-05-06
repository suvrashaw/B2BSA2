import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import { getPageMetadata } from "@/content/pages";
import {
  VES_HERO, VES_WHY, VES_DELIVERABLES, VES_STATS,
  VES_CASE_STUDIES, VES_TESTIMONIALS, VES_FAQ, VES_CONTACT,
} from "@/content/page-sections/services/detail/video-editing-services";

export const metadata: Metadata = getPageMetadata("/services/media-production/video-editing-services");

export default function Page() {
  return (
    <ServiceDetailPage
      canonicalPath="/services/media-production/video-editing-services"
      hero={VES_HERO}
      why={VES_WHY}
      deliverables={VES_DELIVERABLES}
      stats={VES_STATS}
      caseStudies={VES_CASE_STUDIES}
      testimonials={VES_TESTIMONIALS}
      faq={VES_FAQ}
      contact={VES_CONTACT}
    />
  );
}
