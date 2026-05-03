import { Metadata } from "next";
import { IndustryEventsContent } from "@/components/services/IndustryEventsContent";

export const metadata: Metadata = {
  title: "Industry Events Strategy & Execution | B2B Sales Arrow",
  description: "Plan, design, and execute high-ROI participation at B2B industry events - from corporate event management to on-ground execution across global markets.",
};

export default function Page() {
  return <IndustryEventsContent />;
}