import { Metadata } from "next";
import { PerformanceMarketingContent } from "@/components/services/PerformanceMarketingContent";

export const metadata: Metadata = {
  title: "B2B Performance Marketing Services | B2B Sales Arrow",
  description: "B2B performance marketing services for enterprise brands - PPC, LinkedIn ads, ABM targeting, and conversion-focused multi-channel campaigns.",
};

export default function Page() {
  return <PerformanceMarketingContent />;
}
