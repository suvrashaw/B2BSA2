import { Metadata } from "next";
import { SalesQualifiedLeadGenerationContent } from "@/components/services/SalesQualifiedLeadGenerationContent";

export const metadata: Metadata = {
  title: "Sales Qualified Lead Generation for Enterprise B2B | B2B Sales Arrow",
  description: "We generate and deliver sales-qualified leads for enterprise B2B companies — not just names, but verified decision-makers ready to engage your sales team.",
};

export default function Page() {
  return <SalesQualifiedLeadGenerationContent />;
}
