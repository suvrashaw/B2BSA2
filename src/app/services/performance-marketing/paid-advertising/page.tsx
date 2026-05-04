import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  PAID_HERO, PAID_WHY, PAID_DELIVERABLES, PAID_STATS,
  PAID_CASE_STUDIES, PAID_TESTIMONIALS, PAID_FAQ, PAID_CONTACT,
} from "@/content/page-sections/services/detail/paid-advertising";

export const metadata: Metadata = {
  title: "Paid Advertising | B2B Sales Arrow",
  description: "Precision B2B paid media across Google, LinkedIn, and display — engineered to reach senior decision-makers and achieve 4.2× ROAS for enterprise clients.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={PAID_HERO}
      why={PAID_WHY}
      deliverables={PAID_DELIVERABLES}
      stats={PAID_STATS}
      caseStudies={PAID_CASE_STUDIES}
      testimonials={PAID_TESTIMONIALS}
      faq={PAID_FAQ}
      contact={PAID_CONTACT}
    />
  );
}
