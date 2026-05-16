import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  VIDEO_EDITING_HERO,
  VIDEO_EDITING_DELIVERABLES,
  VIDEO_EDITING_PROOF_BAR,
  VIDEO_EDITING_TIMELINE,
  VIDEO_EDITING_CASE_STUDIES,
  VIDEO_EDITING_FAQ,
} from "@/content/services/detail/video-editing-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/media-production/video-editing-services"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/media-production/video-editing-services"
      hero={VIDEO_EDITING_HERO}
      proofBar={VIDEO_EDITING_PROOF_BAR}
      deliverables={VIDEO_EDITING_DELIVERABLES}
      pricing={VIDEO_EDITING_TIMELINE}
      caseStudies={VIDEO_EDITING_CASE_STUDIES}
      faq={VIDEO_EDITING_FAQ}
      ctaBanner={{
        title: "You already have the raw material.",
        description: "We shape it into content people watch, understand, and act on.",
        ctaLabel: "Upload Your Project Brief",
        ctaHref: "/contact",
      }}
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
          title: "Live Streaming Services",
          href: "/services/media-production/live-streaming-services",
        },
      ]}
    />
  );
}
