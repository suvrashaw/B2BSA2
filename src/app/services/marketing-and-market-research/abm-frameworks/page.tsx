import { Metadata } from "next";
import { ABMFrameworksContent } from "@/components/services/ABMFrameworksContent";

export const metadata: Metadata = {
  title: "B2B ABM Frameworks & Account-Based Marketing | B2B Sales Arrow",
  description: "B2B ABM frameworks and account-based marketing systems for enterprise brands - 1:1, 1:Few, and 1:Many ABM execution models for global reach.",
};

export default function Page() {
  return <ABMFrameworksContent />;
}
