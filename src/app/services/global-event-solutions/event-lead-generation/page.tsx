import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  ELG_HERO,
  ELG_WHY,
  ELG_DELIVERABLES,
  ELG_PROOF_BAR,
  ELG_PRICING,
  ELG_PROCESS,
  ELG_CASE_STUDIES,
  ELG_FAQ,
} from "@/content/services/detail/event-lead-generation";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/event-lead-generation"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/event-lead-generation"
      hero={ELG_HERO}
      proofBar={ELG_PROOF_BAR}
      why={ELG_WHY}
      deliverables={ELG_DELIVERABLES}
      pricing={ELG_PRICING}
      process={ELG_PROCESS}
      caseStudies={ELG_CASE_STUDIES}
      faq={ELG_FAQ}
      relatedServices={[
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        { title: "Industry Events", href: "/services/global-event-solutions/industry-events" },
        {
          title: "Event Booth Rental",
          href: "/services/global-event-solutions/event-booth-rental",
        },
      ]}
    />
  );
}
