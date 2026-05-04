import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  DA_HERO, DA_WHY, DA_DELIVERABLES, DA_STATS,
  DA_CASE_STUDIES, DA_TESTIMONIALS, DA_FAQ, DA_CONTACT,
} from "@/content/page-sections/services/detail/data-augmentation";

export const metadata: Metadata = {
  title: "Data Augmentation | B2B Sales Arrow",
  description: "Enrich your B2B data with verified firmographic, technographic, and contact intelligence. 94% accuracy rate. Turn incomplete CRM records into revenue-ready datasets.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={DA_HERO}
      why={DA_WHY}
      deliverables={DA_DELIVERABLES}
      stats={DA_STATS}
      caseStudies={DA_CASE_STUDIES}
      testimonials={DA_TESTIMONIALS}
      faq={DA_FAQ}
      contact={DA_CONTACT}
    />
  );
}
