import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_WHY,
  BOOTH_RENTAL_DELIVERABLES,
  BOOTH_RENTAL_PROOF_BAR,
  BOOTH_RENTAL_FORMATS,
  BOOTH_RENTAL_CASE_STUDIES,
  BOOTH_RENTAL_FAQ,
} from "@/content/services/detail/event-booth-rental";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata(
  "/services/global-event-solutions/event-booth-rental"
);

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/global-event-solutions/event-booth-rental"
      hero={BOOTH_RENTAL_HERO}
      proofBar={BOOTH_RENTAL_PROOF_BAR}
      why={BOOTH_RENTAL_WHY}
      deliverables={BOOTH_RENTAL_DELIVERABLES}
      pricing={BOOTH_RENTAL_FORMATS}
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      faq={BOOTH_RENTAL_FAQ}
      relatedServices={[
        {
          title: "Trade Show Booth Design",
          href: "/services/global-event-solutions/trade-show-booth-design",
        },
        {
          title: "Trade Show Booth Builder",
          href: "/services/global-event-solutions/trade-show-booth-builder",
        },
        {
          title: "Modular and Portable Booths",
          href: "/services/global-event-solutions/modular-portable-booths",
        },
      ]}
    />
  );
}
