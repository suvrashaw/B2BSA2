import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  SEO_HERO,
  SEO_WHY,
  SEO_DELIVERABLES,
  SEO_PROOF_BAR,
  SEO_PROCESS,
  SEO_CASE_STUDIES,
  SEO_FAQ,
} from "@/content/services/detail/seo-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/seo-services");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/seo-services"
      hero={SEO_HERO}
      proofBar={SEO_PROOF_BAR}
      why={SEO_WHY}
      deliverables={SEO_DELIVERABLES}
      process={SEO_PROCESS}
      caseStudies={SEO_CASE_STUDIES}
      faq={SEO_FAQ}
      ctaBanner={{
        title: "Your buyers are searching.",
        description: "Will they find you — or your competitor?",
        ctaLabel: "Get a Free SEO Audit",
        ctaHref: "/contact",
      }}
      relatedServices={[
        { title: "Paid Advertising", href: "/services/paid-advertising" },
        { title: "LinkedIn Ads for B2B", href: "/services/linkedin-ads" },
        { title: "Performance Marketing", href: "/services/performance-marketing" },
      ]}
    />
  );
}
