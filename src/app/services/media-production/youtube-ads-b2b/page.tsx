import { Metadata } from "next";
import { YouTubeAdsB2BContent } from "@/components/services/YouTubeAdsB2BContent";

export const metadata: Metadata = {
  title: "YouTube Ads for B2B | B2B Sales Arrow",
  description: "Leverage intent-driven YouTube advertising to reach enterprise decision-makers. Cinematic production meets Google's search-intent targeting.",
};

export default function Page() {
  return <YouTubeAdsB2BContent />;
}
