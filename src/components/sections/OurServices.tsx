"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import {
  HOME_SERVICES_CONTENT,
  type HomeServicesContent,
  type HomeServiceItem,
} from "@/content/home-section-content";

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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-blue text-sm font-semibold tracking-wide"
          >
            {eyebrow}
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-12 relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sticky"
              style={{
                top: `calc(150px + ${index * 40}px)`,
                zIndex: index,
              }}
            >
              <div className="bg-brand-gray border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[400px] relative group/card">
                
                {/* Content Area */}
                <div className="w-full md:w-2/5 p-8 lg:p-12 flex flex-col justify-between relative z-10 pointer-events-none transition-all duration-700">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${service.color}`} />
                  
                  <div className="pointer-events-auto">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 shadow-sm flex items-center gap-2 transition-colors duration-700 md:group-has-[.image-pane:hover]/card:bg-white/20 md:group-has-[.image-pane:hover]/card:text-white md:group-has-[.image-pane:hover]/card:border-transparent md:group-has-[.image-pane:hover]/card:backdrop-blur-md">
                        <Icon name={service.icon} className="w-3 h-3 text-brand-blue md:group-has-[.image-pane:hover]/card:text-white transition-colors duration-700" />
                        {serviceLabel}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-brand-charcoal mb-6 leading-tight transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 font-medium leading-relaxed transition-colors duration-700 md:group-has-[.image-pane:hover]/card:text-gray-200 drop-shadow-md">
                      {service.description}
                    </p>
                  </div>

                  <button className="mt-10 md:mt-0 px-6 py-3 rounded-lg bg-brand-charcoal text-white hover:bg-brand-blue transition-all duration-700 flex items-center justify-between group pointer-events-auto w-max md:group-has-[.image-pane:hover]/card:bg-brand-blue md:group-has-[.image-pane:hover]/card:shadow-xl shadow-md">
                    <span className="mr-4">{ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Image Area */}
                <div className="w-full h-64 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-3/5 md:h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:w-full z-0 group/image cursor-pointer image-pane">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 md:group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-brand-gray/80 md:group-hover/image:opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover/image:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
