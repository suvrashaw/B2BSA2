import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  VES_HERO, VES_WHY, VES_DELIVERABLES, VES_STATS,
  VES_CASE_STUDIES, VES_TESTIMONIALS, VES_FAQ, VES_CONTACT,
} from "@/content/page-sections/services/detail/video-editing-services";

export const metadata: Metadata = {
  title: "Video Editing Services | B2B Sales Arrow",
  description: "Professional B2B video editing with 48-hour turnaround. We transform raw footage into platform-optimised, brand-consistent content that converts enterprise buyers.",
};

export default function Page() {
  return (
    <ServiceDetailPage
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
