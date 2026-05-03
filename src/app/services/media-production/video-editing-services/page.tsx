import { Metadata } from "next";
import { VideoEditingServicesContent } from "@/components/services/VideoEditingServicesContent";

export const metadata: Metadata = {
  title: "Professional Video Editing Services for B2B | B2B Sales Arrow",
  description: "B2B video editing services, corporate video post-production, and social media video editing for enterprise marketing and event teams.",
};

export default function Page() {
  return <VideoEditingServicesContent />;
}