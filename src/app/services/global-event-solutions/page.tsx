import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/content/ServiceHubPage";
import { getPageMetadata } from "@/content/pages";
import {
  GES_HERO, GES_SERVICES, GES_STATS, GES_WHY, GES_CASE_STUDIES,
  GES_TESTIMONIALS, GES_EVENTS, GES_FAQ, GES_CONTACT,
} from "@/content/page-sections/services/global-event-solutions";

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions");

export default function Page() {
  return (
    <ServiceHubPage
      hero={GES_HERO}
      services={GES_SERVICES}
      stats={GES_STATS}
      why={GES_WHY}
      caseStudies={GES_CASE_STUDIES}
      testimonials={GES_TESTIMONIALS}
      events={GES_EVENTS}
      faq={GES_FAQ}
      contact={GES_CONTACT}
    />
  );
}
