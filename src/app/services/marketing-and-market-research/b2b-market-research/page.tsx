import { Metadata } from "next";
import { B2BMarketResearchContent } from "@/components/services/B2BMarketResearchContent";

export const metadata: Metadata = {
  title: "B2B Market Research & Competitive Intelligence | B2B Sales Arrow",
  description: "B2B market research services for enterprise brands - competitor mapping, TAM analysis, ICP development, and intent signal discovery.",
};

export default function Page() {
  return <B2BMarketResearchContent />;
}
