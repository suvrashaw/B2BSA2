import type { Metadata } from "next";
import { ServiceHubPage } from "@/components/layout/ServiceHubPage";
import { getPageMetadata } from "@/content/pages";
import {
  PERF_HERO, PERF_SERVICES, PERF_STATS, PERF_WHY, PERF_CASE_STUDIES,
  PERF_TESTIMONIALS, PERF_BLOGS, PERF_FAQ, PERF_CONTACT,
} from "@/content/services/performance-marketing";

export const metadata: Metadata = getPageMetadata("/services/performance-marketing");

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
