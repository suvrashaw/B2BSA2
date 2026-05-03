import { Metadata } from "next";
import { CaseStudiesIndexContent } from "@/components/resources/CaseStudiesIndexContent";

export const metadata: Metadata = {
  title: "B2B Case Studies & Client Success Stories | B2B Sales Arrow",
  description: "Explore how B2B Sales Arrow delivers measurable ROI for global enterprise brands across events, media production, and high-precision lead generation.",
};

export default function Page() {
  return <CaseStudiesIndexContent />;
}
