import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
                    "relative h-14 px-8 overflow-hidden rounded-full font-bold tracking-tight text-base bg-transparent border-2 border-brand-blue/20 text-brand-charcoal dark:text-white hover:border-brand-blue transition-all duration-500 group",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center gap-3 z-10">
                    {icon}
                    <span>{children || label}</span>
                    {!icon && !children && <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                </div>
            </Button>
        );
    }

    return (
        <Button
            className={cn(
                "relative h-14 px-8 overflow-hidden rounded-full font-bold tracking-tight text-base shadow-xl",
                "bg-zinc-900 dark:bg-zinc-100",
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
                    "bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-red",
                    "opacity-50 group-hover:opacity-100",
                    "blur-xl transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-3 z-10 text-white dark:text-zinc-900">
                {icon}
                <span>{children || label}</span>
                {!icon && !children && <ArrowUpRight className="w-4 h-4 text-white/90 dark:text-zinc-900/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            </div>
        </Button>
    );
}


