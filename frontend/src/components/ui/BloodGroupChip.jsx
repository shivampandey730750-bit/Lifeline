/**
 * BloodGroupChip.jsx — Large-touch-target blood group selector chip.
 * Used in search forms, donor registration, and request forms.
 */
import React from 'react'
import { cn } from '@/utils/cn'
import { BLOOD_GROUPS, BLOOD_GROUP_COLORS } from '@/utils/bloodGroups'

/**
 * Single chip — used independently.
 */
export function BloodGroupChipSingle({
  group,
  selected = false,
  onClick,
  className,
  size = 'md',
}) {
  const colors = BLOOD_GROUP_COLORS[group] || {}
  const sizes  = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-16 h-16 text-base',
  }

  return (
    <button
      type="button"
      onClick={() => onClick?.(group)}
      aria-pressed={selected}
      aria-label={`Blood group ${group}`}
      className={cn(
        'blood-chip',
        sizes[size],
        colors.bg,
        colors.text,
        colors.border,
        selected && 'selected ring-2 ring-offset-2 ring-crimson-500',
        className
      )}
    >
      {group}
    </button>
  )
}

/**
 * Blood group selector grid — selects one or multiple groups.
 */
export default function BloodGroupSelector({
  value,            // string or string[]
  onChange,
  multiple = false,
  label    = 'Blood Group',
  size     = 'md',
  className,
}) {
  const handleClick = (group) => {
    if (multiple) {
      const current = Array.isArray(value) ? value : []
      const next    = current.includes(group)
        ? current.filter(g => g !== group)
        : [...current, group]
      onChange?.(next)
    } else {
      onChange?.(value === group ? '' : group)
    }
  }

  const isSelected = (group) => {
    if (multiple) return Array.isArray(value) && value.includes(group)
    return value === group
  }

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
          {!multiple && <span className="text-xs text-slate-400 ml-2">(select one)</span>}
          {multiple  && <span className="text-xs text-slate-400 ml-2">(select all that apply)</span>}
        </p>
      )}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={label}
      >
        {BLOOD_GROUPS.map(group => (
          <BloodGroupChipSingle
            key={group}
            group={group}
            selected={isSelected(group)}
            onClick={handleClick}
            size={size}
          />
        ))}
      </div>
    </div>
  )
}
