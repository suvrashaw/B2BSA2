import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  LIVE_STREAMING_HERO,
  LIVE_STREAMING_WHY,
  LIVE_STREAMING_DELIVERABLES,
  LIVE_STREAMING_PROOF_BAR,
  LIVE_STREAMING_CAPABILITIES,
  LIVE_STREAMING_CASE_STUDIES,
  LIVE_STREAMING_FAQ,
} from "@/content/services/detail/live-streaming-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/live-streaming-services"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/live-streaming-services"
      hero={LIVE_STREAMING_HERO}
      proofBar={LIVE_STREAMING_PROOF_BAR}
      why={LIVE_STREAMING_WHY}
      deliverables={LIVE_STREAMING_DELIVERABLES}
      pricing={LIVE_STREAMING_CAPABILITIES}
      caseStudies={LIVE_STREAMING_CASE_STUDIES}
      faq={LIVE_STREAMING_FAQ}
      relatedServices={[
        {
          title: "Event Video Production",
          href: "/services/media-production/event-video-production",
        },
        {
          title: "Corporate Video Production",
          href: "/services/media-production/corporate-video-production",
        },
        {
          title: "Video Editing Services",
          href: "/services/media-production/video-editing-services",
        },
      ]}
    />
  );
}
