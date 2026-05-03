import { Metadata } from "next";
import { SearchEngineOptimizationContent } from "@/components/services/SearchEngineOptimizationContent";

export const metadata: Metadata = {
  title: "B2B SEO & Content Strategy Services | B2B Sales Arrow",
  description: "B2B SEO services and B2B content strategy for enterprise brands - high-intent keyword research, technical SEO, and authority link building.",
};

export default function Page() {
  return <SearchEngineOptimizationContent />;
}
