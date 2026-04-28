import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src?: string;
  icon?: React.ReactNode;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={64} reverse duration={80} durationOnHover={25}>
        {logos.map((logo, idx) => (
          <div key={`logo-${logo.alt}-${idx}`} className="flex items-center justify-center h-8 md:h-10 text-brand-charcoal/60 hover:text-brand-charcoal transition-all">
            {logo.icon ? (
              <div className="h-full w-auto aspect-square">
                {logo.icon}
              </div>
            ) : (
              <img
                alt={logo.alt}
                suppressHydrationWarning
                className="pointer-events-none h-full select-none grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                height={logo.height || "auto"}
                loading="lazy"
                src={logo.src}
                width={logo.width || "auto"}
              />
            )}
            <span className="ml-2 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">{logo.alt}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
