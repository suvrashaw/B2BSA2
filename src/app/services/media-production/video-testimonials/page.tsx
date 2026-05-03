import { Metadata } from "next";
import { VideoTestimonialsContent } from "@/components/services/VideoTestimonialsContent";

export const metadata: Metadata = {
  title: "Cinematic B2B Video Testimonials | B2B Sales Arrow",
  description: "Capture high-trust, peer-level video testimonials that validate your enterprise solution and accelerate your sales cycle.",
};

export default function Page() {
  return <VideoTestimonialsContent />;
}
