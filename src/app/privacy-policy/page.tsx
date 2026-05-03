import { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | B2B Sales Arrow",
  description: "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
