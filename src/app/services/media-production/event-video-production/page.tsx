import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  EVP_HERO,
  EVP_WHY,
  EVP_DELIVERABLES,
  EVP_STATS,
  EVP_CASE_STUDIES,
  EVP_TESTIMONIALS,
  EVP_FAQ,
  EVP_CONTACT,
} from "@/content/services/detail/event-video-production";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/event-video-production"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/event-video-production"
      hero={EVP_HERO}
      why={EVP_WHY}
      deliverables={EVP_DELIVERABLES}
      stats={EVP_STATS}
      caseStudies={EVP_CASE_STUDIES}
      testimonials={EVP_TESTIMONIALS}
      faq={EVP_FAQ}
      contact={EVP_CONTACT}
    />
  );
}
