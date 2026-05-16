import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  SEO_CASE_STUDIES,
  SEO_DELIVERABLES,
  SEO_FAQ,
  SEO_HERO,
  SEO_PAGE,
  SEO_PROCESS,
  SEO_PROOF_BAR,
  SEO_WHY,
} from "@/content/services/detail/seo-services";
import { PERF_PAGE } from "@/content/services/performance-marketing";

export const metadata: Metadata = getMarketingPageMetadata(SEO_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={SEO_CASE_STUDIES}
      ctaBanner={{
        ctaHref: "/contact",
        ctaLabel: "Get a Free SEO Audit",
        description: "Will they find you — or your competitor?",
        title: "Your buyers are searching.",
      }}
      deliverables={SEO_DELIVERABLES}
      faq={SEO_FAQ}
      hero={SEO_HERO}
      page={SEO_PAGE}
      parentPage={PERF_PAGE}
      process={SEO_PROCESS}
      proofBar={SEO_PROOF_BAR}
      relatedServices={[
        { href: "/services/paid-advertising", title: "Paid Advertising" },
        { href: "/services/linkedin-ads", title: "LinkedIn Ads for B2B" },
        { href: "/services/performance-marketing", title: "Performance Marketing" },
      ]}
      why={SEO_WHY}
    />
  );
}

export default Page;
