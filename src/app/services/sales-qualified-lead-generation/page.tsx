import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/content/ServiceHubPage";
import {
  SQL_HERO, SQL_SERVICES, SQL_STATS, SQL_WHY, SQL_CASE_STUDIES,
  SQL_TESTIMONIALS, SQL_BLOGS, SQL_FAQ, SQL_CONTACT,
} from "@/content/page-sections/services/sales-qualified-lead-generation";

export const metadata: Metadata = {
  title: "Sales Qualified Lead Generation | B2B Sales Arrow",
  description: "Precision B2B lead generation delivering sales-qualified leads directly into your CRM. 15,000+ enterprise leads delivered.",
};

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
