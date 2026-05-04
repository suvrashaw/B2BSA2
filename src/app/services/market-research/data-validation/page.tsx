import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  DV_HERO, DV_WHY, DV_DELIVERABLES, DV_STATS,
  DV_CASE_STUDIES, DV_TESTIMONIALS, DV_FAQ, DV_CONTACT,
} from "@/content/page-sections/services/detail/data-validation";

export const metadata: Metadata = {
  title: "Data Validation | B2B Sales Arrow",
  description: "Verify, clean, and trust every record in your B2B database. Email validation, phone verification, and deduplication delivering 98% post-validation deliverability.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={DV_HERO}
      why={DV_WHY}
      deliverables={DV_DELIVERABLES}
      stats={DV_STATS}
      caseStudies={DV_CASE_STUDIES}
      testimonials={DV_TESTIMONIALS}
      faq={DV_FAQ}
      contact={DV_CONTACT}
    />
  );
}
