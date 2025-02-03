import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names.
 * Combines `clsx` for conditional class names and `tailwind-merge` for resolving Tailwind conflicts.
 *
 * @param inputs - A list of class names or conditions
 * @returns A merged string of class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
