import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/content/ServiceHubPage";
import { getPageMetadata } from "@/content/pages";
import {
  SQL_HERO, SQL_SERVICES, SQL_STATS, SQL_WHY, SQL_CASE_STUDIES,
  SQL_TESTIMONIALS, SQL_BLOGS, SQL_FAQ, SQL_CONTACT,
} from "@/content/page-sections/services/sales-qualified-lead-generation";

export const metadata: Metadata = getPageMetadata("/services/sales-qualified-lead-generation");

export default function Page() {
  return (
    <ServiceHubPage
      hero={SQL_HERO}
      services={SQL_SERVICES}
      stats={SQL_STATS}
      why={SQL_WHY}
      caseStudies={SQL_CASE_STUDIES}
      testimonials={SQL_TESTIMONIALS}
      blogs={SQL_BLOGS}
      faq={SQL_FAQ}
      contact={SQL_CONTACT}
    />
  );
}
