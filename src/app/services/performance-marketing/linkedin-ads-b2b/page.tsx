import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  LIADS_HERO, LIADS_WHY, LIADS_DELIVERABLES, LIADS_STATS,
  LIADS_CASE_STUDIES, LIADS_TESTIMONIALS, LIADS_FAQ, LIADS_CONTACT,
} from "@/content/page-sections/services/detail/linkedin-ads-b2b";

export const metadata: Metadata = {
  title: "LinkedIn Ads for B2B | B2B Sales Arrow",
  description: "Expert LinkedIn advertising management that puts your brand in front of C-suite decision-makers. Avg 5× lead quality vs other paid channels for B2B clients.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={LIADS_HERO}
      why={LIADS_WHY}
      deliverables={LIADS_DELIVERABLES}
      stats={LIADS_STATS}
      caseStudies={LIADS_CASE_STUDIES}
      testimonials={LIADS_TESTIMONIALS}
      faq={LIADS_FAQ}
      contact={LIADS_CONTACT}
    />
  );
}
