import { getCmsPageMetadata } from "@/cms/mock/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Heading } from "@/components/ui/Heading";

import type { Metadata } from "next";

export const metadata: Metadata = getCmsPageMetadata("cookie-policy");

const cookieSections = [
  {
    title: "Session Cookies",
    body: "Session cookies help the site load securely, remember temporary interactions, and keep forms and navigation working during a single browsing session.",
  },
  {
    title: "Analytics Cookies",
    body: "Analytics cookies help us understand aggregate website usage, including page performance, traffic patterns, and the content visitors find most useful. We use this information to improve the experience and measure marketing effectiveness.",
  },
  {
    title: "Functional Cookies",
    body: "Functional cookies support preferences and enhanced site behavior, such as smoother interactions, embedded media, and interface improvements that make the website easier to use.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-40 pb-24">
        <div className="container mx-auto max-w-4xl px-8">
          <Heading as="h1" highlight="Cookie" className="mb-6">
            Cookie Policy
          </Heading>
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-gray-600">
            This Cookie Policy explains how B2B Sales Arrow uses cookies and similar technologies to
            operate, protect, measure, and improve our website.
          </p>

          <div className="space-y-10">
            {cookieSections.map((section, index) => (
              <section
                key={section.title}
                className="rounded-2xl border border-gray-100 bg-brand-gray/40 p-8"
              >
                <Heading
                  as="h2"
                  highlight={section.title.split(" ")[0]}
                  highlightVariant={index % 2 === 0 ? "blue" : "cyan"}
                  className="mb-4 text-2xl lg:text-3xl"
                >
                  {section.title}
                </Heading>
                <p className="leading-relaxed text-gray-600">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl bg-brand-blue p-8 text-white">
            <Heading
              as="h2"
              preserveClassName
              className="mb-4 font-heading text-2xl leading-tight font-bold text-white lg:text-3xl"
            >
              Managing Your Cookie Preferences
            </Heading>
            <p className="leading-relaxed text-white/80">
              You can control or delete cookies through your browser settings. Disabling certain
              cookies may affect form submission, embedded media, or parts of the website
              experience. If you have questions, contact us at info@b2bsalesarrow.com.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
