import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_WHY,
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_PROOF_BAR,
  CORPORATE_VIDEO_STRATEGY,
  CORPORATE_VIDEO_CASE_STUDIES,
  CORPORATE_VIDEO_FAQ,
} from "@/content/services/detail/corporate-video-production";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/corporate-video-production"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/corporate-video-production"
      hero={CORPORATE_VIDEO_HERO}
      proofBar={CORPORATE_VIDEO_PROOF_BAR}
      why={CORPORATE_VIDEO_WHY}
      deliverables={CORPORATE_VIDEO_DELIVERABLES}
      pricing={CORPORATE_VIDEO_STRATEGY}
      caseStudies={CORPORATE_VIDEO_CASE_STUDIES}
      faq={CORPORATE_VIDEO_FAQ}
      relatedServices={[
        {
          title: "Event Video Production",
          href: "/services/media-production/event-video-production",
        },
        {
          title: "Video Editing Services",
          href: "/services/media-production/video-editing-services",
        },
        {
          title: "Live Streaming Services",
          href: "/services/media-production/live-streaming-services",
        },
      ]}
    />
  );
}
