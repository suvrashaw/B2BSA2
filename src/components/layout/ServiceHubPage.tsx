import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { OurServices } from "@/components/sections/OurServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { buildFaqJsonLd } from "@/lib/structured-data";
import type { HeroProps } from "@/components/sections/HomeHero";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhoWeAreProps } from "@/components/sections/WhoWeAre";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { TestimonialsProps } from "@/components/sections/Testimonials";
import type { BlogsProps } from "@/components/sections/Blogs";
import type { UpcomingEventsProps } from "@/components/sections/UpcomingEvents";
import type { FAQProps } from "@/components/sections/FAQ";
import type { ContactUsProps } from "@/components/sections/ContactUs";

export interface ServiceHubPageProps {
  hero: HeroProps;
  services: OurServicesProps;
  stats: WhoWeAreProps;
  why: WhyChooseUsProps;
  caseStudies: CaseStudiesProps;
  testimonials: TestimonialsProps;
  /** Pass blogs OR events — not both. Events hubs use UpcomingEvents; others use Blogs. */
  blogs?: BlogsProps;
  events?: UpcomingEventsProps;
  faq: FAQProps;
  contact: ContactUsProps;
}

export function ServiceHubPage({
  hero,
  services,
  stats,
  why,
  caseStudies,
  testimonials,
  blogs,
  events,
  faq,
  contact,
}: ServiceHubPageProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;

  return (
    <main className="min-h-screen bg-brand-gray">
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header />
      <Hero {...hero} />
      <OurServices {...services} />
      <WhoWeAre {...stats} />
      <WhyChooseUs {...why} />
      <CaseStudies {...caseStudies} />
      <ClientLogos />
      <Testimonials {...testimonials} />
      {events ? <UpcomingEvents {...events} /> : blogs ? <Blogs {...blogs} /> : null}
      <FAQ {...faq} />
      <ContactUs {...contact} />
      <Footer />
    </main>
  );
}
