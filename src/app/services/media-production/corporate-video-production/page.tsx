import { Metadata } from "next";
import { CorporateVideoProductionContent } from "@/components/services/CorporateVideoProductionContent";

export const metadata: Metadata = {
  title: "Corporate Video Production for Enterprise Brands | B2B Sales Arrow",
  description: "Corporate video production solutions for enterprise brands - brand films, product videos, executive interviews, investor content, and B2B sales assets.",
};

export default function Page() {
  return <CorporateVideoProductionContent />;
}