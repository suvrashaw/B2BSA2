import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_DELIVERABLES,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_WHY,
} from "@/content/services/detail/trade-show-booth-builder";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      ctaBanner={{
        ctaHref: "/contact",
        ctaLabel: "Request a Build Quote",
        description: "",
        title:
          "Build with an exhibition stand builder that understands the floor, the brand, and the pipeline it is designed to fill.",
      }}
      deliverables={BOOTH_BUILDER_DELIVERABLES}
      faq={BOOTH_BUILDER_FAQ}
      hero={BOOTH_BUILDER_HERO}
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      process={BOOTH_BUILDER_PROCESS}
      proofBar={BOOTH_BUILDER_PROOF_BAR}
      relatedServices={[
        {
          href: "/services/global-event-solutions/trade-show-booth-design",
          title: "Trade Show Booth Design",
        },
        {
          href: "/services/global-event-solutions/event-booth-rental",
          title: "Event Booth Rental",
        },
        {
          href: "/services/global-event-solutions/modular-portable-booths",
          title: "Modular and Portable Booths",
        },
      ]}
      why={BOOTH_BUILDER_WHY}
    />
  );
}

export default Page;
