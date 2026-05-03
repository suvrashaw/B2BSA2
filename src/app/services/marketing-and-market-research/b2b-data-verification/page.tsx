import { Metadata } from "next";
import { B2BDataVerificationContent } from "@/components/services/B2BDataVerificationContent";

export const metadata: Metadata = {
  title: "B2B Data Verification & Email Verification Services | B2B Sales Arrow",
  description: "B2B data verification services and B2B email verification for enterprise brands - 100% human-verified contact data to ensure zero bounce and high deliverability.",
};

export default function Page() {
  return <B2BDataVerificationContent />;
}
