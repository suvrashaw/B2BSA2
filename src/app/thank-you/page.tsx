import { Metadata } from "next";
import { ThankYouContent } from "@/components/contact/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | B2B Sales Arrow",
  description: "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
};

export default function Page() {
  return <ThankYouContent />;
}
