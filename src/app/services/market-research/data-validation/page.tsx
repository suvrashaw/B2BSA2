import { Metadata } from "next";
import { DataValidationContent } from "@/components/services/DataValidationContent";

export const metadata: Metadata = {
  title: "B2B Data Validation & Verification Services | B2B Sales Arrow",
  description: "Clean your B2B database with professional validation services. We verify emails, phone numbers, and contact roles to ensure high deliverability.",
};

export default function Page() {
  return <DataValidationContent />;
}