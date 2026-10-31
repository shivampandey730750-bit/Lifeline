/**
 * cn.js — Class name utility
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 */
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
