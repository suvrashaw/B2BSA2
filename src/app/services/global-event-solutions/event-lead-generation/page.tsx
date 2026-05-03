import { Metadata } from "next";
import { EventLeadGenerationContent } from "@/components/services/EventLeadGenerationContent";

export const metadata: Metadata = {
  title: "Trade Show Lead Generation & Event Lead Capture | B2B Sales Arrow",
  description: "Trade show lead generation, exhibitor lead capture, and post-event lead conversion services - qualified pipeline from show floor to CRM.",
};

export default function Page() {
  return <EventLeadGenerationContent />;
}