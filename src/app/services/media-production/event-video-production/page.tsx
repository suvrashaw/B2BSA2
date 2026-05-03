import { Metadata } from "next";
import { EventVideoProductionContent } from "@/components/services/EventVideoProductionContent";

export const metadata: Metadata = {
  title: "Event Video Production Company for Trade Shows | B2B Sales Arrow",
  description: "Event video production company for trade shows, conferences, testimonials, speaker coverage, and post-event marketing assets.",
};

export default function Page() {
  return <EventVideoProductionContent />;
}