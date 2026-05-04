import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/content/ServiceDetailPage";
import {
  TSBD_HERO, TSBD_WHY, TSBD_DELIVERABLES, TSBD_STATS,
  TSBD_CASE_STUDIES, TSBD_TESTIMONIALS, TSBD_FAQ, TSBD_CONTACT,
} from "@/content/page-sections/services/detail/trade-show-booth-design";

export const metadata: Metadata = {
  title: "Trade Show Booth Design | B2B Sales Arrow",
  description: "Award-winning trade show booth design that dominates exhibition floors and converts footfall into qualified pipeline. 500+ booths delivered across 40+ countries.",
};

export default function Page() {
  return (
    <ServiceDetailPage
      hero={TSBD_HERO}
      why={TSBD_WHY}
      deliverables={TSBD_DELIVERABLES}
      stats={TSBD_STATS}
      caseStudies={TSBD_CASE_STUDIES}
      testimonials={TSBD_TESTIMONIALS}
      faq={TSBD_FAQ}
      contact={TSBD_CONTACT}
    />
  );
}
