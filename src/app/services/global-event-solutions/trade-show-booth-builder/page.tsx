import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_WHY,
  BOOTH_BUILDER_DELIVERABLES,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_STANDARDS,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_FAQ,
} from "@/content/services/detail/trade-show-booth-builder";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/trade-show-booth-builder"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/trade-show-booth-builder"
      hero={BOOTH_BUILDER_HERO}
      proofBar={BOOTH_BUILDER_PROOF_BAR}
      why={BOOTH_BUILDER_WHY}
      deliverables={BOOTH_BUILDER_DELIVERABLES}
      pricing={BOOTH_BUILDER_STANDARDS}
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      faq={BOOTH_BUILDER_FAQ}
      relatedServices={[
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        {
          title: "Event Booth Rental",
          href: "/services/global-event-solutions/event-booth-rental",
        },
        {
          title: "Modular and Portable Booths",
          href: "/services/global-event-solutions/modular-portable-booths",
        },
      ]}
    />
  );
}
