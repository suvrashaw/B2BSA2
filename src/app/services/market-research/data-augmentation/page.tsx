import { Metadata } from "next";
import { DataAugmentationContent } from "@/components/services/DataAugmentationContent";

export const metadata: Metadata = {
  title: "B2B Data Augmentation Services | B2B Sales Arrow",
  description: "Transform incomplete CRM data into sales intelligence. We enrich contact and account records with human-verified data for better outreach.",
};

export default function Page() {
  return <DataAugmentationContent />;
}