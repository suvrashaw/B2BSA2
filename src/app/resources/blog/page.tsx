import { Metadata } from "next";
import { BlogIndexContent } from "@/components/resources/BlogIndexContent";

export const metadata: Metadata = {
  title: "B2B Sales Arrow Blog | Growth Intelligence & Event Insights",
  description: "Read the latest from B2B Sales Arrow - expert analysis on event strategy, media production, and high-precision lead generation for global enterprise teams.",
};

export default function Page() {
  return <BlogIndexContent />;
}
