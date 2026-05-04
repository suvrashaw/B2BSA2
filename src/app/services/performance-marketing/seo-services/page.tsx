import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  SEO_HERO, SEO_WHY, SEO_DELIVERABLES, SEO_STATS,
  SEO_CASE_STUDIES, SEO_TESTIMONIALS, SEO_FAQ, SEO_CONTACT,
} from "@/content/page-sections/services/detail/seo-services";

export const metadata: Metadata = {
  title: "SEO Services | B2B Sales Arrow",
  description: "Data-driven B2B SEO that builds sustainable organic search authority and drives compounding pipeline growth. Avg 3.2× organic traffic increase for enterprise clients.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={SEO_HERO}
      why={SEO_WHY}
      deliverables={SEO_DELIVERABLES}
      stats={SEO_STATS}
      caseStudies={SEO_CASE_STUDIES}
      testimonials={SEO_TESTIMONIALS}
      faq={SEO_FAQ}
      contact={SEO_CONTACT}
    />
  );
}
