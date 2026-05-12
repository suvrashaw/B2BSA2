import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CinematicHero } from "@/components/sections/CinematicHero";

export default function TestHeroPage() {
  return (
    <main>
      <Header />
      <CinematicHero />
      <div className="flex items-center justify-center bg-white py-32">
        <p className="font-medium text-gray-400">
          Scroll down to see the grounding gradient effect.
        </p>
      </div>
      <Footer />
    </main>
  );
}
