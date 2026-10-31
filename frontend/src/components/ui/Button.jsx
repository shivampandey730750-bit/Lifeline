/**
 * Button.jsx — Reusable button component
 * Variants: primary, secondary, ghost, outline, danger
 * Sizes: sm, md, lg
 * Supports loading state, icon-only mode, and full-width.
 */
import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

const VARIANTS = {
  primary:   'bg-crimson-700 hover:bg-crimson-800 active:bg-crimson-900 text-white shadow-crimson-sm border border-crimson-700',
  secondary: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700',
  ghost:     'bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-700 border border-transparent dark:hover:bg-slate-800 dark:text-slate-300',
  outline:   'bg-transparent hover:bg-crimson-50 active:bg-crimson-100 text-crimson-700 border border-crimson-700 dark:hover:bg-crimson-950 dark:text-crimson-400 dark:border-crimson-600',
  danger:    'bg-danger-600 hover:bg-danger-700 active:bg-danger-800 text-white border border-danger-600',
  success:   'bg-success-600 hover:bg-success-700 active:bg-success-800 text-white border border-success-600',
}

const SIZES = {
  sm:   'px-3 py-1.5 text-sm min-h-[36px] rounded-xl gap-1.5',
  md:   'px-4 py-2   text-sm min-h-[44px] rounded-xl gap-2',
  lg:   'px-6 py-3   text-base min-h-[52px] rounded-2xl gap-2',
  icon: 'p-2.5 min-h-[44px] min-w-[44px] rounded-xl',
}

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  disabled = false,
  fullWidth = false,
  leftIcon  = null,
  rightIcon = null,
  className,
  type      = 'button',
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={cn(
        'btn',
        VARIANTS[variant],
        SIZES[size],
        fullWidth && 'w-full',
        className
      )}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : leftIcon ? (
        <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>
      ) : null}

      {children && <span>{children}</span>}

      {!loading && rightIcon && (
        <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>
      )}
    </button>
  )
}
