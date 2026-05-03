"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function TermsContent() {
  return (
    <div className="bg-brand-white text-brand-charcoal min-h-screen transition-colors duration-500">
      <Header />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-12">Terms & Conditions</h1>
          <div className="prose prose-lg prose-slate max-w-none">
             <p className="text-xl text-gray-500 mb-12">Last Updated: May 2024</p>
             
             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">2. Use of Site</h2>
                <p className="text-gray-600 leading-relaxed mb-4">The content provided on this website is for informational purposes only. You may not use this site for any illegal or unauthorized purpose.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">3. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">All content on this site, including text, graphics, logos, and images, is the property of B2B Sales Arrow and is protected by international copyright laws.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">4. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">B2B Sales Arrow shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.</p>
             </section>

             <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">5. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which B2B Sales Arrow operates.</p>
             </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
