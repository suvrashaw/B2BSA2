import { Metadata } from "next";
import { EventBoothRentalContent } from "@/components/services/EventBoothRentalContent";

export const metadata: Metadata = {
  title: "Trade Show Booth Rental & Display Rental | B2B Sales Arrow",
  description: "Trade show booth rental and trade show display booth rental options - brand-configurable, globally deployable, and fast to market.",
};

export default function Page() {
  return <EventBoothRentalContent />;
}