import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
  alternates: {
    canonical: "https://b2bsalesarrow.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
    url: "https://b2bsalesarrow.com/privacy-policy",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white ">
      <Header />
      <div className="pt-40 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          <h1 className="mb-12 font-heading text-4xl font-bold md:text-6xl">Privacy Policy</h1>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="mb-12 text-xl text-gray-500">Last Updated: May 2024</p>
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                We collect information that you provide directly to us when you fill out a form,
                request a consultation, or contact us via email. This may include your name, email
                address, company name, and phone number.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                We use the information we collect to provide, maintain, and improve our services, to
                communicate with you about your projects, and to send you insights and updates that
                may be relevant to your business.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">3. Data Security</h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                We take reasonable measures to protect your personal information from loss, theft,
                misuse, and unauthorized access. However, no internet transmission is ever
                completely secure or error-free.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">4. Cookies</h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Our website uses cookies to enhance your experience. You can choose to disable
                cookies in your browser settings, although this may affect the functionality of some
                parts of the site.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">5. Contact Us</h2>
              <p className="leading-relaxed text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at
                info@b2bsalesarrow.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
