"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Icon from "@/components/ui/Icon";
import {
  HOME_SERVICES_CONTENT,
  type HomeServicesContent,
  type HomeServiceItem,
} from "@/content/home";

export interface OurServicesProps {
  content?: HomeServicesContent;
  eyebrow?: HomeServicesContent["eyebrow"];
  heading?: HomeServicesContent["heading"];
  serviceLabel?: HomeServicesContent["serviceLabel"];
  ctaLabel?: HomeServicesContent["ctaLabel"];
  services?: HomeServiceItem[];
}

export function OurServices({
  content = HOME_SERVICES_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  serviceLabel = content.serviceLabel,
  ctaLabel = content.ctaLabel,
  services = content.services,
}: OurServicesProps = {}) {
  return (
    <section id="services" className="bg-white pt-20 pb-40">
      <div className="container mx-auto px-8">
        <div className="mb-16 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cyan/10 border-brand-cyan/20 text-brand-blue mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl leading-tight font-bold  lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="relative flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sticky"
              style={{
                top: `calc(100px + ${index * 20}px)`,
                zIndex: index,
              }}
            >
              <div className="bg-white group/card relative flex h-auto flex-col overflow-hidden rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:h-[400px] md:flex-row">
                {/* Content Area */}
                <div className="pointer-events-none relative z-10 flex w-full flex-col justify-between p-8 transition-all duration-700 md:w-2/5 lg:p-12">
                  <div className="pointer-events-auto">
                    <div className="mb-6 flex items-center gap-2">
                      <span className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm transition-colors duration-700 md:group-has-[.image-pane:hover]/card:border-transparent md:group-has-[.image-pane:hover]/card:bg-white/20 md:group-has-[.image-pane:hover]/card:text-white md:group-has-[.image-pane:hover]/card:backdrop-blur-md">
                        <Icon
                          name={service.icon}
                          className="text-brand-blue h-3 w-3 transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white"
                        />
                        {serviceLabel}
                      </span>
                    </div>
                    <h3 className="font-heading mb-6 text-3xl  leading-tight font-bold transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed font-medium text-gray-600 transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-gray-200">
                      {service.description}
                    </p>
                  </div>

                  <button className="bg-brand-charcoal hover:bg-brand-blue group md:group-has-[.image-pane:hover]/card:bg-brand-blue pointer-events-auto mt-10 flex w-max items-center justify-between rounded-lg px-6 py-3 text-white shadow-md transition-all duration-700 md:mt-0 md:group-has-[.image-pane:hover]/card:shadow-xl">
                    <span className="mr-4">{ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Image Area */}
                <div className="group/image image-pane z-0 h-64 w-full cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:absolute md:top-0 md:right-0 md:bottom-0 md:h-full md:w-3/5 md:hover:w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 md:group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 md:group-hover/image:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
