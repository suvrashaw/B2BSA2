import type { ReactNode } from "react";
import { cn } from "@/lib";

interface SectionShellProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export function SectionShell({
  id,
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className={cn("container mx-auto px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
