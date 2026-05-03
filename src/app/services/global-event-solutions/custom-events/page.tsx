import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-white dark:bg-[#1a1c1e]">
      <Header />
      
      <Hero 
        title="Custom Event solutions"
        subtitle="We deliver excellence through strategy, design, and technology."
      />

      <section className="py-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Content coming soon for Custom Event solutions</h2>
          <p className="text-gray-500">We are currently building this section to match our high standards.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}