import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const textVariants = cva("", {
  variants: {
    variant: {
      hero: "/70 text-xl leading-relaxed",
      section: "text-lg leading-relaxed text-gray-600",
      card: "text-sm leading-relaxed text-gray-600 md:text-base",
      muted: "text-sm leading-relaxed text-gray-500",
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
