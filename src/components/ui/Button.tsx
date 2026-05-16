import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded-[4px] font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)]",
        secondary:
          "border-2 border-brand-blue/20 bg-transparent text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5",
        tertiary:
          "gap-2 bg-transparent font-semibold text-brand-blue hover:gap-4 hover:text-brand-blue/80",
        outline:
          "border border-gray-200 bg-transparent hover:border-brand-blue hover:text-brand-blue",
        ghost: "hover:bg-brand-blue/5 hover:text-brand-blue",
        link: "text-brand-blue underline-offset-4 hover:underline",
        default:
          "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)]", // Fallback
      },
      size: {
        default: "px-8 py-3.5 text-base",
        sm: "px-6 py-2.5 text-sm",
        lg: "px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };
