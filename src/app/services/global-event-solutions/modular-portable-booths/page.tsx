import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  MODULAR_BOOTHS_HERO,
  MODULAR_BOOTHS_WHY,
  MODULAR_BOOTHS_DELIVERABLES,
  MODULAR_BOOTHS_PROOF_BAR,
  MODULAR_BOOTHS_FORMATS,
  MODULAR_BOOTHS_CASE_STUDIES,
  MODULAR_BOOTHS_FAQ,
} from "@/content/services/detail/modular-portable-booths";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/modular-portable-booths"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/modular-portable-booths"
      hero={MODULAR_BOOTHS_HERO}
      proofBar={MODULAR_BOOTHS_PROOF_BAR}
      why={MODULAR_BOOTHS_WHY}
      deliverables={MODULAR_BOOTHS_DELIVERABLES}
      pricing={MODULAR_BOOTHS_FORMATS}
      caseStudies={MODULAR_BOOTHS_CASE_STUDIES}
      faq={MODULAR_BOOTHS_FAQ}
      relatedServices={[
        {
          title: "Event Booth Rental",
          href: "/services/global-event-solutions/event-booth-rental",
        },
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        {
          title: "Trade Show Booth Builder",
          href: "/services/global-event-solutions/trade-show-booth-builder",
        },
      ]}
    />
  );
}
