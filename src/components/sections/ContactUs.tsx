"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ContactForm } from "@/components/forms/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
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
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-brand-cyan/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="relative z-20 container mx-auto px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side: Contact Info & Image */}
          <div className="flex flex-col items-start text-left">
            {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
            <div className="w-full text-left">
              <Heading as="h2" className="mb-8">
                {heading}
              </Heading>
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
          <div className="relative z-10 rounded-[2.5rem] border border-gray-200 bg-brand-gray/50 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <ContactForm form={form} />
          </div>
        </div>
      </div>
    </section>
  );
}
