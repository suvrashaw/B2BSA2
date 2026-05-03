import { Metadata } from "next";
import { WhyChooseUsContent } from "@/components/about/WhyChooseUsContent";

export const metadata: Metadata = {
  title: "Why Choose B2B Sales Arrow | Enterprise Growth & ROI",
  description: "Discover why Fortune 500s trust B2B Sales Arrow for global event solutions, precision lead generation, and market intelligence.",
};

export default function WhyChooseUsPage() {
  return <WhyChooseUsContent />;
}