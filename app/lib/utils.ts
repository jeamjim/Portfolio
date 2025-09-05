import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn() merges Tailwind classes safely
 * Example: cn("p-2", condition && "bg-red-500")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
