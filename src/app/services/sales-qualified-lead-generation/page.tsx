import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  SQL_HERO,
  SQL_SERVICES,
  SQL_WHY,
  SQL_PROCESS,
  SQL_PROOF_BAR,
  SQL_CASE_STUDIES,
  SQL_FAQ,
} from "@/content/services/sales-qualified-lead-generation";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/sales-qualified-lead-generation");

export default function Page() {
  return (
    <ServiceHub
      canonicalPath="/services/sales-qualified-lead-generation"
      hero={SQL_HERO}
      proofBar={SQL_PROOF_BAR}
      services={SQL_SERVICES}
      why={SQL_WHY}
      process={SQL_PROCESS}
      caseStudies={SQL_CASE_STUDIES}
      faq={SQL_FAQ}
    />
  );
}
