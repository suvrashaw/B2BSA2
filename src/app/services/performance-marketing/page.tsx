import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  PERF_HERO,
  PERF_SERVICES,
  PERF_WHY,
  PERF_PROCESS,
  PERF_PROOF_BAR,
  PERF_CASE_STUDIES,
  PERF_FAQ,
} from "@/content/services/performance-marketing";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/performance-marketing");

export default function Page() {
  return (
    <ServiceHub
      canonicalPath="/services/performance-marketing"
      hero={PERF_HERO}
      proofBar={PERF_PROOF_BAR}
      services={PERF_SERVICES}
      why={PERF_WHY}
      process={PERF_PROCESS}
      caseStudies={PERF_CASE_STUDIES}
      faq={PERF_FAQ}
    />
  );
}
