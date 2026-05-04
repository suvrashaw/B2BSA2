import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  CVP_HERO, CVP_WHY, CVP_DELIVERABLES, CVP_STATS,
  CVP_CASE_STUDIES, CVP_TESTIMONIALS, CVP_FAQ, CVP_CONTACT,
} from "@/content/page-sections/services/detail/corporate-video-production";

export const metadata: Metadata = {
  title: "Corporate Video Production | B2B Sales Arrow",
  description: "Cinematic corporate video production — brand films, executive interviews, and product demos that command enterprise trust and accelerate B2B pipeline.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={CVP_HERO}
      why={CVP_WHY}
      deliverables={CVP_DELIVERABLES}
      stats={CVP_STATS}
      caseStudies={CVP_CASE_STUDIES}
      testimonials={CVP_TESTIMONIALS}
      faq={CVP_FAQ}
      contact={CVP_CONTACT}
    />
  );
}
