import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  LINKEDIN_ADS_HERO,
  LINKEDIN_ADS_WHY,
  LINKEDIN_ADS_DELIVERABLES,
  LINKEDIN_ADS_PROOF_BAR,
  LINKEDIN_ADS_CASE_STUDIES,
  LINKEDIN_ADS_FAQ,
} from "@/content/services/detail/linkedin-ads-b2b";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/linkedin-ads");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/linkedin-ads"
      hero={LINKEDIN_ADS_HERO}
      proofBar={LINKEDIN_ADS_PROOF_BAR}
      why={LINKEDIN_ADS_WHY}
      deliverables={LINKEDIN_ADS_DELIVERABLES}
      caseStudies={LINKEDIN_ADS_CASE_STUDIES}
      faq={LINKEDIN_ADS_FAQ}
      ctaBanner={{
        title: "Your next enterprise customer is on LinkedIn right now.",
        description: "Show them the right message at the right moment.",
        ctaLabel: "Get a Free LinkedIn Ads Audit",
        ctaHref: "/contact",
      }}
      relatedServices={[
        { title: "SEO Services", href: "/services/seo-services" },
        { title: "Paid Advertising", href: "/services/paid-advertising" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
