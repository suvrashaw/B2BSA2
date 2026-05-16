import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  PAID_ADS_HERO,
  PAID_ADS_WHY,
  PAID_ADS_DELIVERABLES,
  PAID_ADS_PROOF_BAR,
  PAID_ADS_PROCESS,
  PAID_ADS_CASE_STUDIES,
  PAID_ADS_FAQ,
} from "@/content/services/detail/paid-advertising";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/paid-advertising");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/paid-advertising"
      hero={PAID_ADS_HERO}
      proofBar={PAID_ADS_PROOF_BAR}
      why={PAID_ADS_WHY}
      deliverables={PAID_ADS_DELIVERABLES}
      process={PAID_ADS_PROCESS}
      caseStudies={PAID_ADS_CASE_STUDIES}
      faq={PAID_ADS_FAQ}
      ctaBanner={{
        title:
          "A paid media audit reveals wasted spend, low-intent keywords, poor conversion paths, and attribution blind spots.",
        description: "Fixing these is faster than increasing budget.",
        ctaLabel: "Request a Paid Media Audit",
        ctaHref: "/contact",
      }}
      relatedServices={[
        { title: "SEO Services", href: "/services/seo-services" },
        { title: "LinkedIn Ads for B2B", href: "/services/linkedin-ads" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
