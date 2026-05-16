"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { FAQCard } from "@/components/cards/FAQCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_FAQ_CONTENT, type FAQContent } from "@/content/home";

export interface FAQProps {
  content?: FAQContent;
  eyebrow?: FAQContent["eyebrow"];
  heading?: FAQContent["heading"];
  description?: FAQContent["description"];
  scrollAmount?: FAQContent["scrollAmount"];
  faqs?: FAQContent["faqs"];
}

export function FAQ({
  content = HOME_FAQ_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  description = content.description,
  scrollAmount = content.scrollAmount,
  faqs = content.faqs,
}: FAQProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-gray py-24">
      {/* Decorative Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="text-left">
            <Eyebrow variant="neutral">{eyebrow}</Eyebrow>
            <Heading as="h2" className="mb-4">
              {heading}
            </Heading>
            <p className="max-w-xl text-lg text-gray-600">{description}</p>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows Below Carousel */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <button
            onClick={() => scroll("left")}
            className="hover:text-white:bg-brand-cyan flex h-12 w-12 items-center justify-center  rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hover:text-white:bg-brand-cyan flex h-12 w-12 items-center justify-center  rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Global styles to hide scrollbar for webkit */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `,
        }}
      />
    </section>
  );
}
