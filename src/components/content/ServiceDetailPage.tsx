import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurServices } from "@/components/sections/OurServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import type { HeroProps } from "@/components/sections/HomeHero";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhoWeAreProps } from "@/components/sections/WhoWeAre";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { TestimonialsProps } from "@/components/sections/Testimonials";
import type { FAQProps } from "@/components/sections/FAQ";
import type { ContactUsProps } from "@/components/sections/ContactUs";

export interface ServiceDetailPageProps {
  hero: HeroProps;
  why: WhyChooseUsProps;
  deliverables: OurServicesProps;
  stats: WhoWeAreProps;
  caseStudies: CaseStudiesProps;
  testimonials: TestimonialsProps;
  faq: FAQProps;
  contact: ContactUsProps;
}

export function ServiceDetailPage({
  hero,
  why,
  deliverables,
  stats,
  caseStudies,
  testimonials,
  faq,
  contact,
}: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...hero} />
      <WhyChooseUs {...why} />
      <OurServices {...deliverables} />
      <WhoWeAre {...stats} />
      <CaseStudies {...caseStudies} />
      <ClientLogos />
      <Testimonials {...testimonials} />
      <FAQ {...faq} />
      <ContactUs {...contact} />
      <Footer />
    </main>
  );
}
