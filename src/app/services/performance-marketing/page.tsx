import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/content/ServiceHubPage";
import {
  PERF_HERO, PERF_SERVICES, PERF_STATS, PERF_WHY, PERF_CASE_STUDIES,
  PERF_TESTIMONIALS, PERF_BLOGS, PERF_FAQ, PERF_CONTACT,
} from "@/content/page-sections/services/performance-marketing";

export const metadata: Metadata = {
  title: "Performance Marketing | B2B Sales Arrow",
  description: "SEO, paid advertising, and LinkedIn campaigns engineered for enterprise B2B pipeline generation.",
};

export default function Page() {
  return (
    <ServiceHubPage
      hero={PERF_HERO}
      services={PERF_SERVICES}
      stats={PERF_STATS}
      why={PERF_WHY}
      caseStudies={PERF_CASE_STUDIES}
      testimonials={PERF_TESTIMONIALS}
      blogs={PERF_BLOGS}
      faq={PERF_FAQ}
      contact={PERF_CONTACT}
    />
  );
}
