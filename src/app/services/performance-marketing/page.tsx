import { Metadata } from "next";
import { PerformanceMarketingContent } from "@/components/services/PerformanceMarketingContent";

export const metadata: Metadata = {
  title: "B2B Performance Marketing & Paid Media | B2B Sales Arrow",
  description: "Scale your B2B enterprise with data-driven performance marketing. We manage LinkedIn ads, Google Ads, and account-based marketing frameworks for high-ROI growth.",
};

export default function Page() {
  return <PerformanceMarketingContent />;
}