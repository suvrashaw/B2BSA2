import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  SEO_HERO,
  SEO_WHY,
  SEO_DELIVERABLES,
  SEO_PROOF_BAR,
  SEO_ROADMAP,
  SEO_CASE_STUDIES,
  SEO_FAQ,
} from "@/content/services/detail/seo-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/seo-services");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/performance-marketing/seo-services"
      hero={SEO_HERO}
      proofBar={SEO_PROOF_BAR}
      why={SEO_WHY}
      deliverables={SEO_DELIVERABLES}
      pricing={SEO_ROADMAP}
      caseStudies={SEO_CASE_STUDIES}
      faq={SEO_FAQ}
      relatedServices={[
        { title: "Paid Advertising", href: "/services/performance-marketing/paid-advertising" },
        { title: "LinkedIn Ads for B2B", href: "/services/performance-marketing/linkedin-ads" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
