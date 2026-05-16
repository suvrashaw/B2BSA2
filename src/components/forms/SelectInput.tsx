import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export function SelectInput({
  label,
  id,
  options,
  placeholder,
  error,
  className,
  ...props
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-gray-600">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-600 transition-colors focus:border-brand-blue focus:outline-none",
          error && "border-red-400 focus:border-red-500",
          className
        )}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
