import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  HPMI_HERO, HPMI_WHY, HPMI_DELIVERABLES, HPMI_STATS,
  HPMI_CASE_STUDIES, HPMI_TESTIMONIALS, HPMI_FAQ, HPMI_CONTACT,
} from "@/content/page-sections/services/detail/human-powered-market-intelligence";

export const metadata: Metadata = {
  title: "Human-Powered Market Intelligence | B2B Sales Arrow",
  description: "Primary market research and competitive intelligence delivered by human analysts. Custom reports, buyer interviews, and market sizing that algorithms can't replicate.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={HPMI_HERO}
      why={HPMI_WHY}
      deliverables={HPMI_DELIVERABLES}
      stats={HPMI_STATS}
      caseStudies={HPMI_CASE_STUDIES}
      testimonials={HPMI_TESTIMONIALS}
      faq={HPMI_FAQ}
      contact={HPMI_CONTACT}
    />
  );
}
