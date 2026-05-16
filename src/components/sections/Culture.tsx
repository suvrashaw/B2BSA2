"use client";

import { WhisperText } from "@/components/ui/WhisperText";
import { ZoomParallax } from "@/components/ui/ZoomParallax";
import { cn } from "@/lib";

const PARALLAX_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1280&h=720&fit=crop&q=80",
    alt: "Team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop&q=80",
    alt: "Office culture",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop&q=80",
    alt: "Strategy meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&q=80",
    alt: "Team discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&q=80",
    alt: "Working together",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1280&h=720&fit=crop&q=80",
    alt: "Diverse team",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop&q=80",
    alt: "Success celebration",
  },
];

export interface CultureData {
  eyebrow: string;
  heading: string | React.ReactNode;
  description: string;
  reasons: { id: string; title: string; description: string; image: string }[];
}

export const Culture = ({ data }: { data: CultureData }) => {
  const parallaxImages = [
    ...data.reasons.map((r) => ({ src: r.image, alt: r.title })),
    ...PARALLAX_IMAGES.slice(data.reasons.length),
  ].slice(0, 7);

  return (
    <section className="relative w-full bg-brand-gray py-12 transition-colors duration-500">
      <div className="relative mb-12 flex min-h-[50vh] flex-col items-start justify-center px-8 text-left">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="mb-6 inline-block rounded-full border border-brand-charcoal/10 bg-brand-charcoal/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-charcoal uppercase transition-colors duration-500">
          {data.eyebrow}
        </div>
        <WhisperText
          text={typeof data.heading === "string" ? data.heading : "What We Believe In"}
          highlights={["Believe"]}
          highlightColor="blue"
          className="mb-6 font-heading text-4xl font-bold text-brand-charcoal transition-colors duration-500 md:text-5xl lg:text-6xl"
        />
        <p className="max-w-2xl text-lg leading-relaxed font-bold tracking-widest text-brand-charcoal/70 uppercase transition-colors duration-500">
          {data.description}
        </p>
      </div>

      <ZoomParallax images={parallaxImages} />

      <div className="h-[20vh]" />
    </section>
  );
};
