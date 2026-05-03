import { Metadata } from "next";
import { B2BContactDiscoveryContent } from "@/components/services/B2BContactDiscoveryContent";

export const metadata: Metadata = {
  title: "B2B Contact Discovery & Executive Sourcing | B2B Sales Arrow",
  description: "B2B contact discovery services for enterprise brands - find hard-to-reach decision-makers with human-verified precision and role-based mapping.",
};

export default function Page() {
  return <B2BContactDiscoveryContent />;
}
