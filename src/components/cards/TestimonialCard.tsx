import Image from "next/image";

import { Star } from "lucide-react";

import { cn } from "@/lib";

export interface TestimonialCardProps {
  name: string;
  designation: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
  className?: string;
}

export function TestimonialCard({
  name,
  designation,
  company,
  rating,
  quote,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-6 rounded-[20px] border border-gray-100 bg-white p-8 shadow-md",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-blue">
          <Image src={image} alt={name} fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <p className="font-heading text-lg leading-tight font-bold text-gray-900">{name}</p>
          <div className="mt-1 flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-brand-blue text-brand-blue" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-[15px] leading-relaxed text-gray-600">&quot;{quote}&quot;</p>

      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm font-semibold text-brand-blue">{designation}</p>
        <p className="text-xs font-medium text-gray-500">{company}</p>
      </div>
    </div>
  );
}
