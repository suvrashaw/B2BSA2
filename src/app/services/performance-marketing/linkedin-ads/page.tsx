import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  LINKEDIN_ADS_HERO,
  LINKEDIN_ADS_WHY,
  LINKEDIN_ADS_DELIVERABLES,
  LINKEDIN_ADS_PROOF_BAR,
  LINKEDIN_ADS_FORMATS,
  LINKEDIN_ADS_CASE_STUDIES,
  LINKEDIN_ADS_FAQ,
} from "@/content/services/detail/linkedin-ads-b2b";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/linkedin-ads");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/performance-marketing/linkedin-ads"
      hero={LINKEDIN_ADS_HERO}
      proofBar={LINKEDIN_ADS_PROOF_BAR}
      why={LINKEDIN_ADS_WHY}
      deliverables={LINKEDIN_ADS_DELIVERABLES}
      pricing={LINKEDIN_ADS_FORMATS}
      caseStudies={LINKEDIN_ADS_CASE_STUDIES}
      faq={LINKEDIN_ADS_FAQ}
      relatedServices={[
        { title: "SEO Services", href: "/services/performance-marketing/seo-services" },
        { title: "Paid Advertising", href: "/services/performance-marketing/paid-advertising" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
