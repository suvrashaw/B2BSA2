"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section id="faq" className="bg-brand-gray relative overflow-hidden py-24">
      {/* Decorative Gradients */}
      <div className="bg-brand-blue/5 pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[100px]" />
      <div className="bg-brand-cyan/5 pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-8">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-charcoal/5 border-brand-charcoal/10 mb-6 inline-block rounded-full border px-4 py-1.5  text-sm font-semibold tracking-wide"
            >
              {eyebrow}
            </motion.div>
            <h2 className="font-heading mb-4 text-3xl font-bold  lg:text-5xl">
              {heading}
            </h2>
            <p className="max-w-xl text-lg text-gray-600">{description}</p>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {faqs.map((faq, index) => {
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-[280px] w-[300px] flex-shrink-0 cursor-pointer snap-center [perspective:1000px] md:w-[320px]"
              >
                <div className="relative h-full w-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:shadow-xl">
                  {/* Front Side: Question */}
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl border border-gray-100 bg-[#F8F9FA] p-6 text-center [backface-visibility:hidden]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E6091]/10 transition-transform group-hover:scale-110">
                      <HelpCircle className="h-6 w-6 text-[#1E6091]" />
                    </div>
                    <h3 className="font-heading text-lg leading-tight font-bold text-[#212529]">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Back Side: Answer */}
                  <div className="border-brand-cyan/20 absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-center rounded-2xl border bg-white p-6 text-center shadow-inner [backface-visibility:hidden]">
                    <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#4BC0D9]/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#4BC0D9]" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#212529]">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows Below Carousel */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="hover:bg-brand-blue hover:text-white:bg-brand-cyan flex h-12 w-12 items-center  justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hover:bg-brand-blue hover:text-white:bg-brand-cyan flex h-12 w-12 items-center  justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent"
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
