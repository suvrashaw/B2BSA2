import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  LSS_HERO, LSS_WHY, LSS_DELIVERABLES, LSS_STATS,
  LSS_CASE_STUDIES, LSS_TESTIMONIALS, LSS_FAQ, LSS_CONTACT,
} from "@/content/page-sections/services/detail/live-streaming-services";

export const metadata: Metadata = {
  title: "Live Streaming Services | B2B Sales Arrow",
  description: "Broadcast-grade live streaming for B2B events, product launches, and conferences. Reach a global audience with 99.9% uptime and simultaneous multi-platform delivery.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={LSS_HERO}
      why={LSS_WHY}
      deliverables={LSS_DELIVERABLES}
      stats={LSS_STATS}
      caseStudies={LSS_CASE_STUDIES}
      testimonials={LSS_TESTIMONIALS}
      faq={LSS_FAQ}
      contact={LSS_CONTACT}
    />
  );
}
