/**
 * formatters.js — Date, distance, and text formatting utilities
 */
import { formatDistanceToNow, format, parseISO } from 'date-fns'

/** Format a UTC ISO string relative to now ("3 hours ago") */
export function timeAgo(dateStr) {
  if (!dateStr) return 'Unknown'
  try {
    return formatDistanceToNow(parseISO(dateStr), { addSuffix: true })
  } catch {
    return 'Unknown'
  }
}

/** Format a date as "31 Oct 2026" */
export function formatDate(dateStr) {
  if (!dateStr) return '—'
  try {
    return format(parseISO(dateStr), 'd MMM yyyy')
  } catch {
    return '—'
  }
}

/** Format a date-time as "31 Oct 2026, 8:00 PM" */
export function formatDateTime(dateStr) {
  if (!dateStr) return '—'
  try {
    return format(parseISO(dateStr), "d MMM yyyy, h:mm a")
  } catch {
    return '—'
  }
}

/** Format km distance, rounding to 1 decimal */
export function formatDistance(km) {
  if (km === null || km === undefined) return '— km'
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km.toFixed(1)} km`
}

/** Anonymize donor ID for display */
export function anonymizeId(id) {
  if (!id) return '—'
  return `DNR-${id.slice(-6).toUpperCase()}`
}

/** Fuzz a coordinate by up to ~1km (for privacy) */
export function fuzzCoordinate(coord, factor = 0.009) {
  if (coord === null || coord === undefined) return null
  const noise = (Math.random() - 0.5) * 2 * factor
  return +(coord + noise).toFixed(4)
}

/** Capitalize first letter of each word */
export function titleCase(str) {
  if (!str) return ''
  return str.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
}

/** Truncate text to maxLength with ellipsis */
export function truncate(str, maxLength = 80) {
  if (!str || str.length <= maxLength) return str
  return `${str.slice(0, maxLength)}…`
}
