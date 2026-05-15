import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  DATA_VALIDATION_HERO,
  DATA_VALIDATION_WHY,
  DATA_VALIDATION_DELIVERABLES,
  DATA_VALIDATION_PROOF_BAR,
  DATA_VALIDATION_WORKFLOW,
  DATA_VALIDATION_CASE_STUDIES,
  DATA_VALIDATION_FAQ,
} from "@/content/services/detail/data-validation";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/market-research/data-validation");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/market-research/data-validation"
      hero={DATA_VALIDATION_HERO}
      proofBar={DATA_VALIDATION_PROOF_BAR}
      why={DATA_VALIDATION_WHY}
      deliverables={DATA_VALIDATION_DELIVERABLES}
      pricing={DATA_VALIDATION_WORKFLOW}
      caseStudies={DATA_VALIDATION_CASE_STUDIES}
      faq={DATA_VALIDATION_FAQ}
      relatedServices={[
        {
          title: "Human-Powered Market Intelligence",
          href: "/services/market-research/human-powered-market-intelligence",
        },
        { title: "Data Augmentation", href: "/services/market-research/data-augmentation" },
        { title: "Market Research", href: "/services/market-research" },
      ]}
    />
  );
}
