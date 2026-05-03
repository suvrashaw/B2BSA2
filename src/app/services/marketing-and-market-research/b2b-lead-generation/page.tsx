import { Metadata } from "next";
import { B2BLeadGenerationContent } from "@/components/services/B2BLeadGenerationContent";

export const metadata: Metadata = {
  title: "B2B Lead Generation Services for Enterprise | B2B Sales Arrow",
  description: "B2B lead generation services and lead generation for B2B companies - multi-channel outreach, inbound optimization, and high-intent prospect discovery.",
};

export default function Page() {
  return <B2BLeadGenerationContent />;
}
