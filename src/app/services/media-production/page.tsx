import { Metadata } from "next";
import { MediaProductionContent } from "@/components/services/MediaProductionContent";

export const metadata: Metadata = {
  title: "B2B Media Production & Video Production Company | B2B Sales Arrow",
  description: "B2B video production company offering corporate video production, event video, video editing services, live streaming, and brand content for enterprise teams.",
};

export default function Page() {
  return <MediaProductionContent />;
}