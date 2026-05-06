import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
  alternates: {
    canonical: "https://b2bsalesarrow.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
    url: "https://b2bsalesarrow.com/privacy-policy",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
