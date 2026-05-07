"use client";
import React, { useState } from "react";

import { cn } from "@/lib";

export const PointerHighlight = ({
  children,
  className,
  color = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "blue" | "red";
}) => {
  const [hovered, setHovered] = useState(false);

  const colors = {
    blue: {
      bg: hovered ? "bg-brand-blue/30" : "bg-brand-blue/15",
      text: hovered ? "text-brand-cyan" : "text-brand-blue",
      border: "border-brand-blue/30",
    },
    red: {
      bg: hovered ? "bg-brand-primary/30" : "bg-brand-primary/15",
      text: hovered ? "text-brand-primary-dark" : "text-brand-primary",
      border: "border-brand-primary/30",
    },
  };

  const active = colors[color];

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-block px-1.5 py-0.5 mx-[2px] rounded-md transition-all duration-300 border",
        active.bg,
        active.border,
        className
      )}
    >
      <span
        className={cn(
          "relative z-10 transition-colors duration-300 font-bold tracking-tight",
          active.text
        )}
      >
        {children}
      </span>
    </span>
  );
};
