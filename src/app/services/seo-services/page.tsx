import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getPageMetadata } from "@/content/pages";
import {
  SEO_HERO,
  SEO_WHY,
  SEO_DELIVERABLES,
  SEO_STATS,
  SEO_CASE_STUDIES,
  SEO_TESTIMONIALS,
  SEO_FAQ,
  SEO_CONTACT,
} from "@/content/services/detail/seo-services";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/seo-services");

export default function Page() {
  return (
    <ServiceDetail
      canonicalPath="/services/seo-services"
      hero={SEO_HERO}
      why={SEO_WHY}
      deliverables={SEO_DELIVERABLES}
      stats={SEO_STATS}
      caseStudies={SEO_CASE_STUDIES}
      testimonials={SEO_TESTIMONIALS}
      faq={SEO_FAQ}
      contact={SEO_CONTACT}
    />
  );
}
