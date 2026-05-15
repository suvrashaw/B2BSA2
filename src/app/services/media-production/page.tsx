import { ServiceHub } from "@/components/templates/ServiceHub";
import { getPageMetadata } from "@/content/pages";
import {
  MEDIA_HERO,
  MEDIA_SERVICES,
  MEDIA_WHY,
  MEDIA_PROCESS,
  MEDIA_PROOF_BAR,
  MEDIA_CASE_STUDIES,
  MEDIA_FAQ,
} from "@/content/services/media-production";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/services/media-production");

export default function Page() {
  return (
    <ServiceHub
      hero={MEDIA_HERO}
      proofBar={MEDIA_PROOF_BAR}
      services={MEDIA_SERVICES}
      why={MEDIA_WHY}
      process={MEDIA_PROCESS}
      caseStudies={MEDIA_CASE_STUDIES}
      faq={MEDIA_FAQ}
    />
  );
}
