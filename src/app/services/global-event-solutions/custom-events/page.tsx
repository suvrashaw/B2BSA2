import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  CUSTOM_EVENTS_HERO,
  CUSTOM_EVENTS_DELIVERABLES,
  CUSTOM_EVENTS_PROOF_BAR,
  CUSTOM_EVENTS_FORMATS,
  CUSTOM_EVENTS_CASE_STUDIES,
  CUSTOM_EVENTS_FAQ,
} from "@/content/services/detail/custom-events";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/custom-events");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/custom-events"
      hero={CUSTOM_EVENTS_HERO}
      proofBar={CUSTOM_EVENTS_PROOF_BAR}
      deliverables={CUSTOM_EVENTS_DELIVERABLES}
      pricing={CUSTOM_EVENTS_FORMATS}
      caseStudies={CUSTOM_EVENTS_CASE_STUDIES}
      faq={CUSTOM_EVENTS_FAQ}
      ctaBanner={{
        title: "Senior buyers protect their time.",
        description:
          "The event that earns it must justify every element — the invitation, the room, the agenda, and the follow-up.",
        ctaLabel: "Plan Your Custom Event",
        ctaHref: "/contact",
      }}
      relatedServices={[
        { title: "Industry Events", href: "/services/global-event-solutions/industry-events" },
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        {
          title: "Event Lead Generation",
          href: "/services/global-event-solutions/event-lead-generation",
        },
      ]}
    />
  );
}
