import { Metadata } from "next";
import { TradeShowBoothBuilderContent } from "@/components/services/TradeShowBoothBuilderContent";

export const metadata: Metadata = {
  title: "Trade Show Booth Builder & Custom Fabrication | B2B Sales Arrow",
  description: "Trade show booth builder, exhibition stand builder, and custom exhibit booth fabrication for enterprise brands - concept to installation globally.",
};

export default function Page() {
  return <TradeShowBoothBuilderContent />;
}