import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const textVariants = cva("", {
  variants: {
    variant: {
      hero: "text-xl leading-relaxed text-brand-charcoal/70",
      section: "text-lg leading-relaxed text-gray-600",
      card: "text-sm md:text-base leading-relaxed text-gray-600",
      muted: "text-sm text-gray-500 leading-relaxed",
    },
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
  children: ReactNode;
  className?: string;
}

export function Text({ as: Tag = "p", children, className, variant = "section" }: TextProps) {
  return <Tag className={cn(textVariants({ variant }), className)}>{children}</Tag>;
}
