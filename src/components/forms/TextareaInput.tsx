import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface TextareaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}

export function TextareaInput({
  label,
  id,
  error,
  className,
  rows = 4,
  ...props
}: TextareaInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-gray-600">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none",
          error && "border-red-400 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
