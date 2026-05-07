import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function ButtonColorful({
  className,
  label = "Explore Components",
  icon,
  children,
  variant = "primary",
  ...props
}: ButtonColorfulProps) {
  if (variant === "secondary") {
    return (
      <Button
        className={cn(
          "relative h-14 px-8 overflow-hidden rounded-full font-bold tracking-tight text-base bg-transparent border-2 border-brand-blue/20  hover:border-brand-blue transition-all duration-500 group",
          className
        )}
        {...props}
      >
        <div className="bg-brand-blue/5 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10 flex items-center justify-center gap-3">
          {icon}
          <span>{children || label}</span>
          {!icon && !children && (
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </div>
      </Button>
    );
  }

  return (
    <Button
      className={cn(
        "relative h-14 px-8 overflow-hidden rounded-full font-bold tracking-tight text-base shadow-xl",
        "bg-zinc-900",
        "transition-all duration-500",
        "group border-none",
        className
      )}
      {...props}
    >
      {/* Gradient background effect using brand colors */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue",
          "opacity-50 group-hover:opacity-100",
          "blur-xl transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3 text-white">
        {icon}
        <span>{children || label}</span>
        {!icon && !children && (
          <ArrowUpRight className="h-4 w-4 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
    </Button>
  );
}
