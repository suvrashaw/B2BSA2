import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  MARKET_INTEL_HERO,
  MARKET_INTEL_WHY,
  MARKET_INTEL_DELIVERABLES,
  MARKET_INTEL_PROOF_BAR,
  MARKET_INTEL_TIERS,
  MARKET_INTEL_CASE_STUDIES,
  MARKET_INTEL_FAQ,
} from "@/content/services/detail/human-powered-market-intelligence";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/market-research/human-powered-market-intelligence"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/market-research/human-powered-market-intelligence"
      hero={MARKET_INTEL_HERO}
      proofBar={MARKET_INTEL_PROOF_BAR}
      why={MARKET_INTEL_WHY}
      deliverables={MARKET_INTEL_DELIVERABLES}
      pricing={MARKET_INTEL_TIERS}
      caseStudies={MARKET_INTEL_CASE_STUDIES}
      faq={MARKET_INTEL_FAQ}
      relatedServices={[
        { title: "Data Validation", href: "/services/market-research/data-validation" },
        { title: "Data Augmentation", href: "/services/market-research/data-augmentation" },
        { title: "Market Research", href: "/services/market-research" },
      ]}
    />
  );
}
