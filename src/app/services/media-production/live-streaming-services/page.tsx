import { Metadata } from "next";
import { LiveStreamingServicesContent } from "@/components/services/LiveStreamingServicesContent";

export const metadata: Metadata = {
  title: "B2B Live Streaming Services for Events | B2B Sales Arrow",
  description: "Live streaming services for B2B events, corporate broadcasts, and hybrid conferences. Reach a global audience with broadcast-grade stability.",
};

export default function Page() {
  return <LiveStreamingServicesContent />;
}