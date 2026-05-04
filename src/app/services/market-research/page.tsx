import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/content/ServiceHubPage";
import {
  MR_HERO, MR_SERVICES, MR_STATS, MR_WHY, MR_CASE_STUDIES,
  MR_TESTIMONIALS, MR_BLOGS, MR_FAQ, MR_CONTACT,
} from "@/content/page-sections/services/market-research";

export const metadata: Metadata = {
  title: "Market Research | B2B Sales Arrow",
  description: "Human-powered market intelligence, data augmentation, and validation for enterprise B2B brands.",
};

export default function Page() {
  return (
    <ServiceHubPage
      hero={MR_HERO}
      services={MR_SERVICES}
      stats={MR_STATS}
      why={MR_WHY}
      caseStudies={MR_CASE_STUDIES}
      testimonials={MR_TESTIMONIALS}
      blogs={MR_BLOGS}
      faq={MR_FAQ}
      contact={MR_CONTACT}
    />
  );
}
