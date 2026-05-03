"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicyContent() {
  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-12">Privacy Policy</h1>
          <div className="prose prose-lg prose-slate max-w-none">
             <p className="text-xl text-gray-500 mb-12">Last Updated: May 2024</p>
             
             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We collect information that you provide directly to us when you fill out a form, request a consultation, or contact us via email. This may include your name, email address, company name, and phone number.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to provide, maintain, and improve our services, to communicate with you about your projects, and to send you insights and updates that may be relevant to your business.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">3. Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. However, no internet transmission is ever completely secure or error-free.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">4. Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Our website uses cookies to enhance your experience. You can choose to disable cookies in your browser settings, although this may affect the functionality of some parts of the site.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">5. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at info@b2bsalesarrow.com.</p>
             </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
