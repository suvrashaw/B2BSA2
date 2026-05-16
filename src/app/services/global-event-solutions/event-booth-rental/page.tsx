import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_WHY,
  BOOTH_RENTAL_PROOF_BAR,
  BOOTH_RENTAL_FORMATS,
  BOOTH_RENTAL_PROCESS,
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
      pricing={BOOTH_RENTAL_FORMATS}
      process={BOOTH_RENTAL_PROCESS}
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      faq={BOOTH_RENTAL_FAQ}
      ctaBanner={{
        title: "Fast does not have to feel temporary.",
        description:
          "A properly configured trade show rental booth represents your brand credibly — at a fraction of the custom build timeline.",
        ctaLabel: "Check Rental Availability",
        ctaHref: "/contact",
      }}
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
