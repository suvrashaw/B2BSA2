import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  EVENT_VIDEO_HERO,
  EVENT_VIDEO_WHY,
  EVENT_VIDEO_DELIVERABLES,
  EVENT_VIDEO_PROOF_BAR,
  EVENT_VIDEO_TIERS,
  EVENT_VIDEO_CASE_STUDIES,
  EVENT_VIDEO_FAQ,
} from "@/content/services/detail/event-video-production";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/event-video-production"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/event-video-production"
      hero={EVENT_VIDEO_HERO}
      proofBar={EVENT_VIDEO_PROOF_BAR}
      why={EVENT_VIDEO_WHY}
      deliverables={EVENT_VIDEO_DELIVERABLES}
      pricing={EVENT_VIDEO_TIERS}
      caseStudies={EVENT_VIDEO_CASE_STUDIES}
      faq={EVENT_VIDEO_FAQ}
      relatedServices={[
        {
          title: "Corporate Video Production",
          href: "/services/media-production/corporate-video-production",
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
