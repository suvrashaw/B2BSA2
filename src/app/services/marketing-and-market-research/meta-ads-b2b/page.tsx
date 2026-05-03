import { Metadata } from "next";
import { MetaAdsB2BContent } from "@/components/services/MetaAdsB2BContent";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ads for B2B | B2B Sales Arrow",
  description: "Reach enterprise decision-makers on the platforms they use most. High-frequency retargeting and CRM-sync for Meta ads.",
};

export default function Page() {
  return <MetaAdsB2BContent />;
}
