import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

export function TextInput({ label, id, error, className, ...props }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-gray-600">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:outline-none",
          error && "border-red-400 focus:border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
