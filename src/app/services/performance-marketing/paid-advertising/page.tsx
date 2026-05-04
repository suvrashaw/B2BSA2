import { Metadata } from "next";
import { PaidAdvertisingContent } from "@/components/services/PaidAdvertisingContent";

export const metadata: Metadata = {
  title: "B2B Paid Advertising & PPC Management | B2B Sales Arrow",
  description: "Expert B2B paid advertising management — Google Ads, programmatic, display, and retargeting for enterprise pipeline generation.",
};

export default function Page() {
  return <PaidAdvertisingContent />;
}