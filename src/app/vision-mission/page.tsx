import { Metadata } from "next";
import { VisionMissionContent } from "@/components/about/VisionMissionContent";

export const metadata: Metadata = {
  title: "Vision, Mission & Core Values | B2B Sales Arrow",
  description: "Guided by accountability and precision, our mission is to transform B2B brand connections through innovative and immersive experiences.",
};

export default function VisionMissionPage() {
  return <VisionMissionContent />;
}