"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "How does your strategic exhibition design differ from standard booth builders?",
    answer: "We treat exhibition space as an experiential marketing funnel. While standard builders focus on walls and graphics, we architect environments that control traffic flow and create immersive storytelling.",
  },
  {
    id: 2,
    question: "What is your average timeline for an enterprise market activation?",
    answer: "For comprehensive multi-channel activations involving physical presence and digital campaigns, our typical sprint is 12-16 weeks including strategic alignment and fabrication.",
  },
  {
    id: 3,
    question: "Do you offer global deployment capabilities?",
    answer: "Yes. With a network spanning 40+ countries, we seamlessly execute complex, high-fidelity physical and digital campaigns across EMEA, APAC, and the Americas.",
  },
  {
    id: 4,
    question: "How do you measure the ROI of physical media events?",
    answer: "We integrate custom digital touchpoints throughout our environments. By tracking engagements via NFC and CRM-synced apps, we provide a unified dashboard of ROI.",
  },
  {
    id: 5,
    question: "Can you integrate our existing digital assets into the booth?",
    answer: "Absolutely. Our technology-led delivery ensures your current software, videos, and AR/VR assets are seamlessly embedded into the architecture of the space.",
  }
];

export function FAQ() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="faq" className="py-24 bg-brand-gray dark:bg-[#1a1c1e] relative overflow-hidden">
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
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-charcoal/5 dark:bg-white/5 border border-brand-charcoal/10 dark:border-white/10 text-brand-charcoal dark:text-gray-300 text-sm font-semibold tracking-wide"
            >
              INTELLIGENCE & CLARITY
            </motion.div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-charcoal dark:text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              Hover over any card to reveal how we operate at the highest levels of enterprise B2B.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {FAQS.map((faq, index) => {
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[320px] h-[280px] [perspective:1000px] snap-center cursor-pointer group"
              >
                <div 
                  className="relative w-full h-full shadow-md hover:shadow-xl rounded-2xl transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  
                  {/* Front Side: Question */}
                  <div className="absolute inset-0 w-full h-full bg-[#F8F9FA] dark:bg-[#1a1c1e] rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col justify-center items-center text-center [backface-visibility:hidden]">
                    <div className="w-12 h-12 rounded-full bg-[#1E6091]/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <HelpCircle className="w-6 h-6 text-[#1E6091] dark:text-[#4BC0D9]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#212529] dark:text-white leading-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Back Side: Answer */}
                  <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#212529] rounded-2xl border border-brand-cyan/20 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-[#4BC0D9]/10 mx-auto flex items-center justify-center mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4BC0D9]" />
                    </div>
                    <p className="text-[#212529] dark:text-gray-300 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
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
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#212529] text-brand-charcoal dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-brand-cyan hover:border-transparent transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#212529] text-brand-charcoal dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-brand-cyan hover:border-transparent transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Global styles to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
