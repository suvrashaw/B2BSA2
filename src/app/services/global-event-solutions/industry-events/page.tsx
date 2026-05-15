import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  INDUSTRY_EVENTS_HERO,
  INDUSTRY_EVENTS_WHY,
  INDUSTRY_EVENTS_DELIVERABLES,
  INDUSTRY_EVENTS_PROOF_BAR,
  INDUSTRY_EVENTS_PRIORITY,
  INDUSTRY_EVENTS_CASE_STUDIES,
  INDUSTRY_EVENTS_FAQ,
} from "@/content/services/detail/industry-events";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/industry-events"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/industry-events"
      hero={INDUSTRY_EVENTS_HERO}
      proofBar={INDUSTRY_EVENTS_PROOF_BAR}
      why={INDUSTRY_EVENTS_WHY}
      deliverables={INDUSTRY_EVENTS_DELIVERABLES}
      pricing={INDUSTRY_EVENTS_PRIORITY}
      caseStudies={INDUSTRY_EVENTS_CASE_STUDIES}
      faq={INDUSTRY_EVENTS_FAQ}
      relatedServices={[
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        {
          title: "Event Lead Generation",
          href: "/services/global-event-solutions/event-lead-generation",
        },
        { title: "Custom Events", href: "/services/global-event-solutions/custom-events" },
      ]}
    />
  );
}
