import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal",
      h2: "font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal",
      h3: "font-heading text-2xl lg:text-3xl font-bold leading-tight text-brand-charcoal",
      h4: "text-xs font-bold uppercase tracking-wider",
    },
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
  preserveClassName?: boolean;
}

export function Heading({ as: Tag, children, className, preserveClassName, level }: HeadingProps) {
  const resolvedLevel = level ?? Tag;
  const classes = preserveClassName
    ? className
    : cn(headingVariants({ level: resolvedLevel }), className);

  return <Tag className={classes}>{children}</Tag>;
}
