import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import type { BlogsProps } from "@/components/sections/Blogs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import type { FAQProps } from "@/components/sections/FAQ";
import type { HeroProps } from "@/components/sections/Hero";
import { MediaShowreel } from "@/components/sections/MediaShowreel";
import { OurServices } from "@/components/sections/OurServices";
import type { OurServicesProps } from "@/components/sections/OurServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { Testimonials } from "@/components/sections/Testimonials";
import type { TestimonialsProps } from "@/components/sections/Testimonials";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import type { UpcomingEventsProps } from "@/components/sections/UpcomingEvents";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import type { WhoWeAreProps } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { buildFaqJsonLd } from "@/lib";

export interface ServiceHubProps {
  hero: HeroProps;
  services: OurServicesProps;
  stats: WhoWeAreProps;
  why: WhyChooseUsProps;
  caseStudies: CaseStudiesProps;
  testimonials: TestimonialsProps;
  /** Pass blogs OR events — not both. Events hubs use UpcomingEvents; others use Blogs. */
  blogs?: BlogsProps;
  events?: UpcomingEventsProps;
  showMediaShowreel?: boolean;
  faq: FAQProps;
  contact: ContactUsProps;
}

export function ServiceHub({
  hero,
  services,
  stats,
  why,
  caseStudies,
  testimonials,
  blogs,
  events,
  showMediaShowreel = false,
  faq,
  contact,
}: ServiceHubProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  let feedSection = null;

  if (events) {
    feedSection = <UpcomingEvents {...events} />;
  } else if (blogs) {
    feedSection = <Blogs {...blogs} />;
  }

  return (
    <main className="bg-brand-gray min-h-screen">
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header darkBackground />
      <ServiceHero
        title={hero.title || ""}
        description={hero.description || ""}
        primaryCta={
          hero.primaryCtaLabel ? { label: hero.primaryCtaLabel, href: "/contact-us" } : undefined
        }
        secondaryCta={
          hero.secondaryCtaLabel
            ? { label: hero.secondaryCtaLabel, href: "/services/global-event-solutions" }
            : undefined
        }
      />
      {showMediaShowreel ? <MediaShowreel /> : null}
      <OurServices {...services} />
      <WhoWeAre {...stats} />
      <WhyChooseUs {...why} />
      <CaseStudies {...caseStudies} />
      <ClientLogos />
      <Testimonials {...testimonials} />
      {feedSection}
      <FAQ {...faq} />
      <ContactUs {...contact} />
      <Footer />
    </main>
  );
}
