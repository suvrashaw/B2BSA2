"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import {
  HOME_UPCOMING_EVENTS_CONTENT,
  type UpcomingEventsContent,
} from "./home-section-content";

export interface UpcomingEventsProps {
  content?: UpcomingEventsContent;
  eyebrow?: UpcomingEventsContent["eyebrow"];
  heading?: UpcomingEventsContent["heading"];
  badgeLabel?: UpcomingEventsContent["badgeLabel"];
  ctaLabel?: UpcomingEventsContent["ctaLabel"];
  viewAllLabel?: UpcomingEventsContent["viewAllLabel"];
  events?: UpcomingEventsContent["events"];
}

export function UpcomingEvents({
  content = HOME_UPCOMING_EVENTS_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  badgeLabel = content.badgeLabel,
  ctaLabel = content.ctaLabel,
  viewAllLabel = content.viewAllLabel,
  events = content.events,
}: UpcomingEventsProps = {}) {
  return (
    <section id="events" className="py-20 bg-brand-gray relative">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col"
            >
              <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Reveal CTA */}
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                    {ctaLabel} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
                    {badgeLabel}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 relative flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date</h4>
                      <p className="text-brand-charcoal text-sm font-semibold">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-brand-charcoal text-sm font-semibold line-clamp-2">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="hidden md:inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all duration-300">
            {viewAllLabel} <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
