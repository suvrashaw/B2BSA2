import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_WHY,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_PRICING,
  BOOTH_DESIGN_PRICING_GUIDANCE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_FAQ,
} from "@/content/services/detail/trade-show-booth-design";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/trade-show-booth-design"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/trade-show-booth-design"
      hero={BOOTH_DESIGN_HERO}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      why={BOOTH_DESIGN_WHY}
      deliverables={BOOTH_DESIGN_DELIVERABLES}
      pricing={BOOTH_DESIGN_PRICING}
      pricingGuidance={BOOTH_DESIGN_PRICING_GUIDANCE}
      process={BOOTH_DESIGN_PROCESS}
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      faq={BOOTH_DESIGN_FAQ}
      relatedServices={[
        {
          title: "Event Lead Generation",
          href: "/services/global-event-solutions/event-lead-generation",
        },
        { title: "Custom Events", href: "/services/global-event-solutions/custom-events" },
        {
          title: "Event Booth Rental",
          href: "/services/global-event-solutions/event-booth-rental",
        },
      ]}
    />
  );
}
