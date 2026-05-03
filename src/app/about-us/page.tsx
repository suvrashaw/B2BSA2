import { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About B2B Sales Arrow | Enterprise Growth Partners",
  description: "B2B Sales Arrow is a global enterprise growth agency delivering event solutions, video production, digital marketing, and market research across 40+ countries.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
