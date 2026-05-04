import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Mail, MapPin, Phone } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { PageBlock, PageContent, PageSection } from "@/content/pages";

const heroImages: Record<string, string> = {
  "Global Event Solutions": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
  "Booth Design & Production": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  "Media Production": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000",
  "Performance Marketing": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  "Sales Qualified Lead Generation": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
  "Market Research": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  Resources: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
  Company: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
};

function hrefForCTA(label: string) {
  const lower = label.toLowerCase();

  if (lower.includes("blog") || lower.includes("article") || lower.includes("insight")) return "/blog";
  if (lower.includes("case stud") || lower.includes("portfolio") || lower.includes("study")) return "/case-studies";
  if (lower.includes("team")) return "/about-us";

  return "/contact-us";
}

function splitLabel(text: string) {
  const index = text.indexOf(":");
  if (index === -1 || index > 34) return null;

  return {
    label: text.slice(0, index).trim(),
    value: text.slice(index + 1).trim(),
  };
}

function splitPipes(text: string) {
  return text
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderCTA(labels: string[], key: string) {
  return (
    <div key={key} className="flex flex-wrap gap-3 pt-2">
      {labels.map((label) => (
        <Link
          key={label}
          href={hrefForCTA(label)}
          className="inline-flex items-center gap-2 rounded bg-brand-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-cyan hover:text-brand-charcoal"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}

function renderPillRow(text: string, key: string, tone: "light" | "dark" = "light") {
  const labelValue = splitLabel(text);
  const label = labelValue?.label;
  const value = labelValue?.value ?? text;
  const items = splitPipes(value);
  const paragraphClass = tone === "dark" ? "text-white/75" : "text-brand-charcoal/75";
  const labelClass = tone === "dark" ? "text-brand-cyan" : "text-brand-blue";
  const pillClass =
    tone === "dark"
      ? "border-white/15 bg-white/10 text-white"
      : "border-brand-charcoal/10 bg-white text-brand-charcoal shadow-sm";

  if (items.length < 2) {
    return (
      <p key={key} className={`text-base leading-8 ${paragraphClass}`}>
        {text}
      </p>
    );
  }

  return (
    <div key={key} className="space-y-4">
      {label && <p className={`text-sm font-black uppercase tracking-widest ${labelClass}`}>{label}</p>}
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded border px-4 py-2 text-sm font-semibold ${pillClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function renderTable(rows: string[][], key: string) {
  const [head, ...body] = rows;

  return (
    <div key={key} className="overflow-x-auto rounded-lg border border-brand-charcoal/10 bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-brand-charcoal text-white">
          <tr>
            {head.map((cell) => (
              <th key={cell} className="px-5 py-4 font-bold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={`${key}-${rowIndex}`} className="border-t border-brand-charcoal/10">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-5 py-4 align-top text-brand-charcoal/75">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlocks(blocks: PageBlock[], skipFirstHeading = false, tone: "light" | "dark" = "light") {
  let skippedHeading = false;
  const headingClass = tone === "dark" ? "text-white" : "text-brand-charcoal";
  const paragraphClass = tone === "dark" ? "text-white/75" : "text-brand-charcoal/75";
  const strongClass = tone === "dark" ? "text-white" : "text-brand-charcoal";
  const listClass = tone === "dark" ? "text-white/75" : "text-brand-charcoal/75";

  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (skipFirstHeading && block.type === "heading" && !skippedHeading) {
      skippedHeading = true;
      return null;
    }

    if (block.type === "heading") {
      return (
        <h3 key={key} className={`pt-4 text-2xl font-bold leading-tight ${headingClass}`}>
          {block.text}
        </h3>
      );
    }

    if (block.type === "paragraph") {
      if (block.text.includes("|")) return renderPillRow(block.text, key, tone);

      const labelValue = splitLabel(block.text);
      if (labelValue) {
        return (
          <p key={key} className={`text-base leading-8 ${paragraphClass}`}>
            <span className={`font-bold ${strongClass}`}>{labelValue.label}:</span> {labelValue.value}
          </p>
        );
      }

      return (
        <p key={key} className={`text-base leading-8 ${paragraphClass}`}>
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      const ListTag = block.ordered ? "ol" : "ul";

      return (
        <ListTag key={key} className={`grid gap-3 text-base leading-7 ${listClass} md:grid-cols-2`}>
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ListTag>
      );
    }

    if (block.type === "table") return renderTable(block.rows, key);

    if (block.type === "cta") return renderCTA(block.labels, key);

    return null;
  });
}

function ContactFormSection({ section }: { section: PageSection }) {
  const fields = [
    "First Name",
    "Last Name",
    "Company Name",
    "Job Title",
    "Work Email",
    "Phone",
    "Country / Region",
    "Service of Interest",
    "Estimated Project Timeline",
    "Message / Project Brief",
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-6">{renderBlocks(section.blocks, true)}</div>
      <form className="grid gap-4 rounded-lg border border-brand-charcoal/10 bg-white p-6 shadow-xl shadow-brand-blue/5 md:grid-cols-2">
        {fields.map((field) => {
          const isMessage = field === "Message / Project Brief";
          const isSelect = field === "Service of Interest";

          return (
            <label key={field} className={isMessage ? "space-y-2 md:col-span-2" : "space-y-2"}>
              <span className="text-xs font-black uppercase tracking-widest text-brand-charcoal/60">{field}</span>
              {isMessage ? (
                <textarea className="min-h-32 w-full rounded border border-brand-charcoal/10 bg-brand-gray/5 px-4 py-3 outline-none transition-colors focus:border-brand-blue" />
              ) : isSelect ? (
                <select className="w-full rounded border border-brand-charcoal/10 bg-brand-gray/5 px-4 py-3 outline-none transition-colors focus:border-brand-blue">
                  <option>Global Event Solutions</option>
                  <option>Media Production</option>
                  <option>Performance Marketing</option>
                  <option>Sales Qualified Lead Generation</option>
                  <option>Market Research</option>
                </select>
              ) : (
                <input className="w-full rounded border border-brand-charcoal/10 bg-brand-gray/5 px-4 py-3 outline-none transition-colors focus:border-brand-blue" />
              )}
            </label>
          );
        })}
        <button className="inline-flex items-center justify-center gap-2 rounded bg-brand-blue px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-cyan hover:text-brand-charcoal md:col-span-2">
          Submit Inquiry
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-sm leading-6 text-brand-charcoal/60 md:col-span-2">
          We respond within 24 business hours. Your information is never shared.
        </p>
      </form>
    </div>
  );
}

function FAQSection({ section, page }: { section: PageSection; page: PageContent }) {
  if (!page.faqs.length) {
    return <div className="space-y-6">{renderBlocks(section.blocks, true)}</div>;
  }

  return (
    <div className="space-y-4">
      {page.faqs.map((faq, index) => (
        <details key={faq.question} className="group rounded-lg border border-brand-charcoal/10 bg-white p-6 shadow-sm" open={index === 0}>
          <summary className="cursor-pointer list-none text-lg font-bold text-brand-charcoal transition-colors group-open:text-brand-blue">
            {faq.question}
          </summary>
          <p className="mt-4 text-base leading-8 text-brand-charcoal/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

function DirectContactCards() {
  const cards = [
    { title: "Email", value: "hello@b2bsalesarrow.com", icon: Mail },
    { title: "Phone", value: "Available on request — submit the form above and we'll share direct contact details.", icon: Phone },
    { title: "Book a Meeting", value: "Use the inquiry form above to schedule a discovery call with our team.", icon: MapPin },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.title} className="rounded-lg border border-brand-charcoal/10 bg-white p-6 shadow-sm">
            <Icon className="mb-4 h-6 w-6 text-brand-blue" />
            <h3 className="mb-2 text-xl font-bold text-brand-charcoal">{card.title}</h3>
            <p className="text-sm leading-6 text-brand-charcoal/70">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}

function RelatedServices({ page }: { page: PageContent }) {
  const links = Array.from(new Map(page.internalLinks.map((link) => [link.href, link])).values()).filter(
    (link) => link.href !== "/contact-us",
  );

  if (!links.length) return null;

  return (
    <div className="mt-8 rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-blue">
        <FileText className="h-4 w-4" />
        Related Services
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => {
          const label = link.href
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <Link key={link.href} href={link.href} className="rounded bg-white px-4 py-2 text-sm font-bold text-brand-charcoal shadow-sm transition-colors hover:text-brand-blue">
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function PageHero({ page }: { page: PageContent }) {
  const image = heroImages[page.navigationGroup] || heroImages.Company;

  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden bg-brand-charcoal pt-28 text-white">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-brand-blue/80" />
      <div className="container mx-auto grid min-h-[72vh] items-center gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-cyan backdrop-blur">
            {page.navigationGroup}
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">{page.hero.title}</h1>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-white/80">
            {renderBlocks(page.hero.blocks, false, "dark")}
          </div>
        </div>
        <div className="hidden rounded-lg border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur lg:block">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-brand-cyan">Final URL</p>
          <p className="break-words text-2xl font-bold">{page.url}</p>
          <div className="mt-8 grid gap-3 text-sm text-white/75">
            <p>Page {page.pageNumber} of 26</p>
            <p>{page.requiredSections.length} required sections mapped from docs</p>
            <p>SEO guidance stored internally</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageSectionBlock({ section, page, index }: { section: PageSection; page: PageContent; index: number }) {
  if (/^hero/i.test(section.title)) return null;

  const isFAQ = /faq/i.test(section.title);
  const isContactForm = page.url === "/contact-us" && /form/i.test(section.title);
  const isDirectContact = page.url === "/contact-us" && /direct contact/i.test(section.title);
  const isCTA = /cta/i.test(section.title);

  return (
    <section className={isCTA ? "bg-brand-charcoal py-20 text-white" : index % 2 === 0 ? "bg-brand-white py-20" : "bg-brand-gray/10 py-20"}>
      <div className="container mx-auto px-8">
        <div className={isCTA ? "mx-auto max-w-4xl text-center" : "grid gap-12 lg:grid-cols-[0.34fr_0.66fr]"}>
          <div>
            <div className={isCTA ? "mb-4 text-sm font-black uppercase tracking-widest text-brand-cyan" : "mb-4 text-sm font-black uppercase tracking-widest text-brand-blue"}>
              {section.title}
            </div>
            <h2 className={isCTA ? "font-heading text-3xl font-bold leading-tight md:text-5xl" : "font-heading text-3xl font-bold leading-tight text-brand-charcoal md:text-5xl"}>
              {section.heading || section.title}
            </h2>
          </div>
          <div className={isCTA ? "mt-8 space-y-6 text-white/80" : "space-y-7"}>
            {isContactForm ? (
              <ContactFormSection section={section} />
            ) : isFAQ ? (
              <FAQSection section={section} page={page} />
            ) : isDirectContact ? (
              <>
                <div className="space-y-6">{renderBlocks(section.blocks, true)}</div>
                <DirectContactCards />
              </>
            ) : (
              renderBlocks(section.blocks, true, isCTA ? "dark" : "light")
            )}
          </div>
        </div>
        {!isCTA && <RelatedServices page={index === 1 ? page : { ...page, internalLinks: [] }} />}
      </div>
    </section>
  );
}

export function DocsPage({ page }: { page: PageContent }) {
  return (
    <div className="min-h-screen bg-brand-white text-brand-charcoal">
      <Header />
      <main>
        <PageHero page={page} />
        {page.sections.map((section, index) => (
          <PageSectionBlock key={section.id} section={section} page={page} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
