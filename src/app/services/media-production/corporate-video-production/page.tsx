import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CORPORATE_VIDEO_CASE_STUDIES,
  CORPORATE_VIDEO_DELIVERABLES,
  CORPORATE_VIDEO_FAQ,
  CORPORATE_VIDEO_HERO,
  CORPORATE_VIDEO_PAGE,
  CORPORATE_VIDEO_PROOF_BAR,
  CORPORATE_VIDEO_WHY,
} from "@/content/services/detail/corporate-video-production";
import { MEDIA_PAGE } from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(CORPORATE_VIDEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CORPORATE_VIDEO_CASE_STUDIES}
      ctaBanner={{
        ctaHref: "/contact",
        ctaLabel: "Start Your Corporate Video Project",
        description: "With the production quality enterprise buyers expect.",
        title: "When your offering is complex, corporate video makes it clear.",
      }}
      deliverables={CORPORATE_VIDEO_DELIVERABLES}
      faq={CORPORATE_VIDEO_FAQ}
      hero={CORPORATE_VIDEO_HERO}
      page={CORPORATE_VIDEO_PAGE}
      parentPage={MEDIA_PAGE}
      proofBar={CORPORATE_VIDEO_PROOF_BAR}
      relatedServices={[
        {
          href: "/services/media-production/event-video-production",
          title: "Event Video Production",
        },
        {
          href: "/services/media-production/video-editing-services",
          title: "Video Editing Services",
        },
        {
          href: "/services/media-production/live-streaming-services",
          title: "Live Streaming Services",
        },
      ]}
      why={CORPORATE_VIDEO_WHY}
    />
  );
}

export default Page;
