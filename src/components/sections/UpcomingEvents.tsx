"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HOME_UPCOMING_EVENTS_CONTENT, type UpcomingEventsContent } from "@/content/home";

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
    <section id="events" className="bg-brand-gray relative py-20">
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
          <h2 className="font-heading text-4xl leading-tight font-bold  lg:text-5xl">{heading}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="relative h-[250px] w-full overflow-hidden md:h-[300px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transform object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover Reveal CTA */}
                <div className="bg-brand-charcoal/20 absolute inset-0 z-20 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                  <Button
                    variant="primary"
                    className="translate-y-4 shadow-lg group-hover:translate-y-0"
                  >
                    {ctaLabel} <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute right-6 bottom-6 left-6 z-10">
                  <span className="bg-brand-blue mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    {badgeLabel}
                  </span>
                  <h3 className="font-heading line-clamp-2 text-2xl leading-tight font-bold text-white md:text-3xl">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col justify-center p-8">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-gray flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Calendar className="text-brand-blue h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
                        Date
                      </h4>
                      <p className=" text-sm font-semibold">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-gray flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <MapPin className="text-brand-cyan h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
                        Location
                      </h4>
                      <p className=" line-clamp-2 text-sm font-semibold">{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/events">
            <Button variant="tertiary" className="hidden md:inline-flex">
              {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
