import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { TERMS_HERO, TERMS_FAQ, TERMS_CONTACT } from "@/content/terms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
  alternates: {
    canonical: "https://b2bsalesarrow.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
    url: "https://b2bsalesarrow.com/terms-and-conditions",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...TERMS_HERO} />
      <FAQ {...TERMS_FAQ} />
      <ContactUs {...TERMS_CONTACT} />
      <Footer />
    </main>
  );
}
