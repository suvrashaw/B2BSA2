import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  DATA_AUGMENTATION_CASE_STUDIES,
  DATA_AUGMENTATION_DELIVERABLES,
  DATA_AUGMENTATION_FAQ,
  DATA_AUGMENTATION_HERO,
  DATA_AUGMENTATION_LAYERS,
  DATA_AUGMENTATION_PAGE,
  DATA_AUGMENTATION_PROOF_BAR,
  DATA_AUGMENTATION_WHY,
} from "@/content/services/detail/data-augmentation";
import { RESEARCH_PAGE } from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(DATA_AUGMENTATION_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={DATA_AUGMENTATION_CASE_STUDIES}
      deliverables={DATA_AUGMENTATION_DELIVERABLES}
      faq={DATA_AUGMENTATION_FAQ}
      hero={DATA_AUGMENTATION_HERO}
      page={DATA_AUGMENTATION_PAGE}
      parentPage={RESEARCH_PAGE}
      pricing={DATA_AUGMENTATION_LAYERS}
      proofBar={DATA_AUGMENTATION_PROOF_BAR}
      relatedServices={[
        {
          href: "/services/market-intelligence",
          title: "Human-Powered Market Intelligence",
        },
        { href: "/services/data-validation", title: "Data Validation" },
        { href: "/services/market-research", title: "Market Research" },
      ]}
      why={DATA_AUGMENTATION_WHY}
    />
  );
}

export default Page;
