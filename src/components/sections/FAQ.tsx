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
    <section id="faq" className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-charcoal/5 border border-brand-charcoal/10 text-brand-charcoal text-sm font-semibold tracking-wide"
            >
              {eyebrow}
            </motion.div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-charcoal mb-4">
              {heading}
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">{description}</p>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
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
                className="flex-shrink-0 w-[300px] md:w-[320px] h-[280px] [perspective:1000px] snap-center cursor-pointer group"
              >
                <div className="relative w-full h-full shadow-md hover:shadow-xl rounded-2xl transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side: Question */}
                  <div className="absolute inset-0 w-full h-full bg-[#F8F9FA] rounded-2xl border border-gray-100 p-6 flex flex-col justify-center items-center text-center [backface-visibility:hidden]">
                    <div className="w-12 h-12 rounded-full bg-[#1E6091]/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <HelpCircle className="w-6 h-6 text-[#1E6091]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#212529] leading-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Back Side: Answer */}
                  <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-brand-cyan/20 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-[#4BC0D9]/10 mx-auto flex items-center justify-center mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4BC0D9]" />
                    </div>
                    <p className="text-[#212529] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows Below Carousel */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white text-brand-charcoal hover:bg-brand-blue hover:text-white:bg-brand-cyan hover:border-transparent transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white text-brand-charcoal hover:bg-brand-blue hover:text-white:bg-brand-cyan hover:border-transparent transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-6 h-6" />
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
