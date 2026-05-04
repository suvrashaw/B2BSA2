import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  EVP_HERO, EVP_WHY, EVP_DELIVERABLES, EVP_STATS,
  EVP_CASE_STUDIES, EVP_TESTIMONIALS, EVP_FAQ, EVP_CONTACT,
} from "@/content/page-sections/services/detail/event-video-production";

export const metadata: Metadata = {
  title: "Event Video Production | B2B Sales Arrow",
  description: "Professional event video production that turns your trade show and conference footage into high-converting B2B content assets. Same-day highlight reels available.",
};

export default function Page() {
  return (
    <ServiceDetailPage
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
