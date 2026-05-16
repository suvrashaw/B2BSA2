import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
} from "@/lib/structured-data";
