import type { ReactNode } from "react";
import { cn } from "@/lib";

interface GradientTextProps {
  variant: "blue" | "red";
  children: ReactNode;
  className?: string;
}

const gradientVariants = {
  blue: "bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent",
  red: "bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent",
};

export function GradientText({ variant, children, className }: GradientTextProps) {
  return <span className={cn(gradientVariants[variant], className)}>{children}</span>;
}
