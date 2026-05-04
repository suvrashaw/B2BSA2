import { Metadata } from "next";
import { HumanPoweredIntelligenceContent } from "@/components/services/HumanPoweredIntelligenceContent";

export const metadata: Metadata = {
  title: "Human-Powered B2B Market Intelligence | B2B Sales Arrow",
  description: "Gain an unfair competitive advantage with human-verified market intelligence. We provide competitor analysis, TAM mapping, and buyer behavior insights.",
};

export default function Page() {
  return <HumanPoweredIntelligenceContent />;
}