import type { ReactNode } from "react";

import { cn } from "@/lib";

interface EyebrowProps {
  as?: "span" | "p";
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ as: Tag = "span", children, className }: EyebrowProps) {
  return (
    <Tag className={cn("text-sm font-semibold tracking-wide uppercase", className)}>{children}</Tag>
  );
}
