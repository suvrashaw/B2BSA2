import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  GES_HERO,
  GES_SERVICES,
  GES_WHY,
  GES_PROCESS,
  GES_PROOF_BAR,
  GES_CASE_STUDIES,
  GES_FAQ,
} from "@/content/services/global-event-solutions";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions");

export default function Page() {
  return (
    <ServiceHub
      canonicalPath="/services/global-event-solutions"
      hero={GES_HERO}
      proofBar={GES_PROOF_BAR}
      services={GES_SERVICES}
      why={GES_WHY}
      process={GES_PROCESS}
      caseStudies={GES_CASE_STUDIES}
      faq={GES_FAQ}
    />
  );
}
