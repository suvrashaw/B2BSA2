import { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | B2B Sales Arrow",
  description: "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
};

export default function Page() {
  return <TermsContent />;
}
