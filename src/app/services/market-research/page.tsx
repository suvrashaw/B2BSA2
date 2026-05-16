import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  RESEARCH_HERO,
  RESEARCH_PROOF_BAR,
  RESEARCH_SERVICES,
  RESEARCH_WHY,
  RESEARCH_PROCESS,
  RESEARCH_CASE_STUDIES,
  RESEARCH_FAQ,
} from "@/content/services/market-research";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/market-research");

export default function Page() {
  return (
    <ServiceHub
      canonicalPath="/services/market-research"
      hero={RESEARCH_HERO}
      proofBar={RESEARCH_PROOF_BAR}
      services={RESEARCH_SERVICES}
      why={RESEARCH_WHY}
      process={RESEARCH_PROCESS}
      caseStudies={RESEARCH_CASE_STUDIES}
      faq={RESEARCH_FAQ}
    />
  );
}
