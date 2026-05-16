import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/Badge";

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  href?: string;
  badgeLabel?: string;
  ctaLabel?: string;
}

export function EventCard({
  title,
  date,
  location,
  image,
  href = "/events",
  badgeLabel = "UPCOMING",
  ctaLabel = "View Event",
}: EventCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
    >
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="transform object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 z-20 flex items-center justify-center bg-brand-charcoal/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex translate-y-4 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 group-hover:translate-y-0">
            {ctaLabel} <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="absolute right-6 bottom-6 left-6 z-10">
          <Badge variant="solid" className="mb-3">
            {badgeLabel}
          </Badge>
          <h3 className="line-clamp-2 font-heading text-2xl leading-tight font-bold !text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gray">
              <Calendar className="h-4 w-4 text-brand-blue" />
            </div>
            <div>
              <p className="mb-0.5 text-xs font-bold tracking-wider text-gray-400 uppercase">
                Date
              </p>
              <p className="text-sm font-semibold">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gray">
              <MapPin className="h-4 w-4 text-brand-cyan" />
            </div>
            <div>
              <p className="mb-0.5 text-xs font-bold tracking-wider text-gray-400 uppercase">
                Location
              </p>
              <p className="line-clamp-2 text-sm font-semibold">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
