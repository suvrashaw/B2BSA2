import { Metadata } from "next";
import { CustomEventsContent } from "@/components/services/CustomEventsContent";

export const metadata: Metadata = {
  title: "Custom B2B Event Production & Strategy | B2B Sales Arrow",
  description: "Custom event solutions for B2B brands - executive roundtables, hosted buyer programs, client summits, product launches, and proprietary event production.",
};

export default function Page() {
  return <CustomEventsContent />;
}