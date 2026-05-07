import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  MEDIA_HERO,
  MEDIA_SERVICES,
  MEDIA_STATS,
  MEDIA_WHY,
  MEDIA_CASE_STUDIES,
  MEDIA_TESTIMONIALS,
  MEDIA_BLOGS,
  MEDIA_FAQ,
  MEDIA_CONTACT,
} from "@/content/services/media-production";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/media-production");

export default function Page() {
  return (
    <ServiceHub
      hero={MEDIA_HERO}
      services={MEDIA_SERVICES}
      stats={MEDIA_STATS}
      why={MEDIA_WHY}
      caseStudies={MEDIA_CASE_STUDIES}
      testimonials={MEDIA_TESTIMONIALS}
      blogs={MEDIA_BLOGS}
      showMediaShowreel
      faq={MEDIA_FAQ}
      contact={MEDIA_CONTACT}
    />
  );
}
