import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  PAID_ADS_HERO,
  PAID_ADS_WHY,
  PAID_ADS_DELIVERABLES,
  PAID_ADS_PROOF_BAR,
  PAID_ADS_STRATEGIES,
  PAID_ADS_CASE_STUDIES,
  PAID_ADS_FAQ,
} from "@/content/services/detail/paid-advertising";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/performance-marketing/paid-advertising"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/performance-marketing/paid-advertising"
      hero={PAID_ADS_HERO}
      proofBar={PAID_ADS_PROOF_BAR}
      why={PAID_ADS_WHY}
      deliverables={PAID_ADS_DELIVERABLES}
      pricing={PAID_ADS_STRATEGIES}
      caseStudies={PAID_ADS_CASE_STUDIES}
      faq={PAID_ADS_FAQ}
      relatedServices={[
        { title: "SEO Services", href: "/services/performance-marketing/seo-services" },
        { title: "LinkedIn Ads for B2B", href: "/services/performance-marketing/linkedin-ads" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
