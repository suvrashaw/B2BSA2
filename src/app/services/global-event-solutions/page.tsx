import { Metadata } from "next";
import { GlobalEventSolutionsContent } from "@/components/services/GlobalEventSolutionsContent";

export const metadata: Metadata = {
  title: "Global Event Solutions for Enterprise Brands | B2B Sales Arrow",
  description: "End-to-end global event solutions and B2B event solutions for enterprise brands - booth design, lead capture, and on-ground execution across 40+ countries.",
};

export default function Page() {
  return <GlobalEventSolutionsContent />;
}