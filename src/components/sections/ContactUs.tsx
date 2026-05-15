"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HOME_CONTACT_CONTENT, type ContactContent } from "@/content/home";

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
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      {/* Decorative background flare */}
      <div className="bg-brand-cyan/5 pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full blur-[120px]" />
      <div className="bg-brand-blue/5 pointer-events-none absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full blur-[120px]" />

      <div className="relative z-20 container mx-auto px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side: Contact Info & Image */}
          <div className="flex flex-col items-start text-left">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-blue/10 border-brand-blue/20 text-brand-blue mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide"
              >
                {eyebrow}
              </motion.div>
            )}
            <div className="w-full text-left">
              <h2 className="font-heading mb-8 text-4xl leading-tight  font-bold lg:text-6xl">
                {heading}
              </h2>
            </div>
            <p className="mb-12 max-w-md text-left text-lg text-gray-600">{description}</p>

            {illustration && (
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="mt-4 w-full max-w-md"
              >
                <Image
                  src={illustration.src}
                  alt={illustration.alt}
                  width={480}
                  height={360}
                  className="h-auto w-full drop-shadow-xl"
                />
              </motion.div>
            )}
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-brand-gray/50 relative z-10 rounded-[2.5rem] border border-gray-200 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <form className="space-y-6">
              <div className={`grid gap-6 ${form.lastNameLabel ? "grid-cols-2" : "grid-cols-1"}`}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">{form.firstNameLabel}</label>
                  <input
                    type="text"
                    className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                    placeholder={form.firstNamePlaceholder}
                  />
                </div>
                {form.lastNameLabel && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">{form.lastNameLabel}</label>
                    <input
                      type="text"
                      className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                      placeholder={form.lastNamePlaceholder}
                    />
                  </div>
                )}
              </div>

              {(form.companyLabel || form.phoneLabel) && (
                <div className="grid grid-cols-2 gap-6">
                  {form.companyLabel && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600">{form.companyLabel}</label>
                      <input
                        type="text"
                        className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                        placeholder={form.companyPlaceholder}
                      />
                    </div>
                  )}
                  {form.phoneLabel && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600">{form.phoneLabel}</label>
                      <input
                        type="tel"
                        className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                        placeholder={form.phonePlaceholder}
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">{form.emailLabel}</label>
                <input
                  type="email"
                  className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                  placeholder={form.emailPlaceholder}
                />
              </div>

              {form.serviceLabel && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">{form.serviceLabel}</label>
                  <select className="focus:border-brand-blue w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-600 transition-colors focus:outline-none">
                    <option value="">{form.servicePlaceholder}</option>
                    {form.serviceOptions?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {form.eventLabel && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">{form.eventLabel}</label>
                  <input
                    type="text"
                    className="focus:border-brand-blue w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                    placeholder={form.eventPlaceholder}
                  />
                </div>
              )}

              {form.messageLabel && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">{form.messageLabel}</label>
                  <textarea
                    rows={4}
                    className="focus:border-brand-blue w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors focus:outline-none"
                    placeholder={form.messagePlaceholder}
                  ></textarea>
                </div>
              )}

              {form.consentLabel && (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    className="border-brand-blue mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded"
                  />
                  <label htmlFor="contact-consent" className="text-sm leading-snug text-gray-500">
                    {form.consentLabel}
                  </label>
                </div>
              )}

              <Button
                type="button"
                variant="primary"
                className="flex w-full items-center justify-center py-4 text-lg"
              >
                {form.ctaLabel}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
