import { Metadata } from "next";
import { MarketingResearchContent } from "@/components/services/MarketingResearchContent";

export const metadata: Metadata = {
  title: "B2B Marketing & High-Precision Market Research | B2B Sales Arrow",
  description: "B2B marketing and B2B market research services for enterprise brands - performance marketing, ABM, SEO, and human-verified contact discovery.",
};

export default function Page() {
  return <MarketingResearchContent />;
}
