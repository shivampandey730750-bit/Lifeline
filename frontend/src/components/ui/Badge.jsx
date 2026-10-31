/**
 * Badge.jsx — Small status / label indicator.
 * Variants: default, success, warning, danger, info, crimson
 * Sizes: sm, md
 */
import React from 'react'
import { cn } from '@/utils/cn'

const VARIANTS = {
  default: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  success: 'bg-success-50 text-success-700 border-success-500/30 dark:bg-green-950 dark:text-green-300',
  warning: 'bg-warning-50 text-warning-700 border-warning-500/30 dark:bg-amber-950 dark:text-amber-300',
  danger:  'bg-danger-50  text-danger-700  border-danger-500/30  dark:bg-red-950  dark:text-red-300',
  info:    'bg-info-50    text-info-700    border-info-500/30    dark:bg-blue-950 dark:text-blue-300',
  crimson: 'bg-crimson-50 text-crimson-700 border-crimson-500/30 dark:bg-crimson-950 dark:text-crimson-300',
  critical: 'badge-critical',
  urgent:   'badge-urgent',
  planned:  'badge-planned',
}

const SIZES = {
  sm: 'px-2 py-0.5 text-xs rounded-lg',
  md: 'px-2.5 py-1 text-xs rounded-xl',
}

export default function Badge({
  children,
  variant  = 'default',
  size     = 'md',
  icon,
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium border',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {icon && <span aria-hidden="true" className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

/** Urgency-specific badge for blood requests */
export function UrgencyBadge({ urgency, className }) {
  const map = {
    critical: { variant: 'critical', label: 'Critical', emoji: '🔴' },
    urgent:   { variant: 'urgent',   label: 'Urgent',   emoji: '🟡' },
    planned:  { variant: 'planned',  label: 'Planned',  emoji: '🔵' },
  }
  const config = map[urgency?.toLowerCase()] || map.planned

  return (
    <Badge
      variant={config.variant}
      className={cn('font-semibold', className)}
    >
      <span aria-hidden="true">{config.emoji}</span>
      <span>{config.label}</span>
    </Badge>
  )
}
