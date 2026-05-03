import { Metadata } from "next";
import { ContactUsContent } from "@/components/contact/ContactUsContent";

export const metadata: Metadata = {
  title: "Contact B2B Sales Arrow | Request a Strategy Consultation",
  description: "Get in touch with B2B Sales Arrow for global event solutions, media production, and high-precision lead generation programs.",
};

export default function Page() {
  return <ContactUsContent />;
}