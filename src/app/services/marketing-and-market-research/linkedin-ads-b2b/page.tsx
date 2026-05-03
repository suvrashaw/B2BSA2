import { Metadata } from "next";
import { LinkedInAdsContent } from "@/components/services/LinkedInAdsContent";

export const metadata: Metadata = {
  title: "LinkedIn Ads for B2B Lead Generation | B2B Sales Arrow",
  description: "Expert LinkedIn Ads management for enterprise B2B brands. Sponsored content, Lead Gen Forms, InMail, and ABM campaigns that generate qualified pipeline.",
};

export default function Page() {
  return <LinkedInAdsContent />;
}
