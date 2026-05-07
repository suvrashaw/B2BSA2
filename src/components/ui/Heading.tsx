import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading text-5xl leading-[1.1] font-bold text-[var(--heading-h1)] lg:text-7xl",
      h2: "font-heading text-4xl leading-tight font-bold text-[var(--heading-h2)] lg:text-5xl",
      h3: "font-heading text-2xl leading-tight font-bold text-[var(--heading-h3)] lg:text-3xl",
      h4: "text-xs font-bold tracking-wider text-[var(--heading-h4)] uppercase",
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
