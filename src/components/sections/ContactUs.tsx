"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  HOME_CONTACT_CONTENT,
  type ContactContent,
} from "./home-section-content";

export interface ContactUsProps {
  content?: ContactContent;
  eyebrow?: ContactContent["eyebrow"];
  heading?: ContactContent["heading"];
  description?: ContactContent["description"];
  illustration?: ContactContent["illustration"] | null;
  form?: ContactContent["form"];
}

export function ContactUs({
  content = HOME_CONTACT_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  description = content.description,
  illustration = content.illustration,
  form = content.form,
}: ContactUsProps = {}) {
  return (
    <section id="contact" className="relative bg-white dark:bg-[#1a1c1e] py-24 overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Contact Info & Image */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue dark:text-brand-cyan text-sm font-semibold tracking-wide"
            >
              {eyebrow}
            </motion.div>
            <div className="w-full text-left">
              <h2 className="font-heading text-4xl lg:text-6xl font-bold text-brand-charcoal dark:text-white leading-tight mb-8">
                {heading}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md text-left">
              {description}
            </p>

            {illustration && (
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full max-w-md mt-4"
              >
                <img
                  src={illustration.src}
                  alt={illustration.alt}
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>
            )}
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-brand-gray/50 dark:bg-[#212529]/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative z-10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-300">{form.firstNameLabel}</label>
                  <input type="text" className="w-full bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder={form.firstNamePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-300">{form.lastNameLabel}</label>
                  <input type="text" className="w-full bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder={form.lastNamePlaceholder} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">{form.emailLabel}</label>
                <input type="email" className="w-full bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" placeholder={form.emailPlaceholder} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">{form.serviceLabel}</label>
                <select className="w-full bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors appearance-none text-gray-600 dark:text-gray-300">
                  <option value="">{form.servicePlaceholder}</option>
                  {form.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">{form.messageLabel}</label>
                <textarea rows={4} className="w-full bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder={form.messagePlaceholder}></textarea>
              </div>

              <button type="button" className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold text-lg hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">
                {form.ctaLabel}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
