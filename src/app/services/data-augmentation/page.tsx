import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_WHY,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_PROOF_BAR,
  DATA_AUGMENTATION_LAYERS,
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_FAQ,
} from "@/content/services/detail/data-augmentation";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/data-augmentation");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/data-augmentation"
      hero={DATA_AUGMENTATION_HERO}
      proofBar={DATA_AUGMENTATION_PROOF_BAR}
      why={DATA_AUGMENTATION_WHY}
      deliverables={DATA_AUGMENTATION_DELIVERABLES}
      pricing={DATA_AUGMENTATION_LAYERS}
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      faq={DATA_AUGMENTATION_FAQ}
      relatedServices={[
        {
          title: "Human-Powered Market Intelligence",
          href: "/services/market-intelligence",
        },
        { title: "Data Validation", href: "/services/data-validation" },
        { title: "Market Research", href: "/services/market-research" },
      ]}
    />
  );
}
