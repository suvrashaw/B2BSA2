import { Metadata } from "next";
import { ModularPortableBoothsContent } from "@/components/services/ModularPortableBoothsContent";

export const metadata: Metadata = {
  title: "Modular & Portable Trade Show Booths | B2B Sales Arrow",
  description: "Premium modular and portable trade show booths for enterprise brands. Lightweight, reconfigurable, and brand-consistent across every event.",
};

export default function Page() {
  return <ModularPortableBoothsContent />;
}
