/**
 * Select.jsx — Reusable select dropdown with label, error, and helper text.
 */
import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

const Select = forwardRef(function Select({
  label,
  id,
  error,
  helperText,
  options = [],
  placeholder = 'Select…',
  className,
  containerClassName,
  required,
  ...props
}, ref) {
  const selectId = id || `select-${Math.random().toString(36).slice(2)}`
  const errorId  = error ? `${selectId}-error` : undefined

  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
          {required && (
            <span className="ml-1 text-crimson-600" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(
            'w-full appearance-none rounded-xl border bg-white dark:bg-slate-900 px-3 py-2.5 pr-10',
            'text-sm text-slate-900 dark:text-slate-100',
            'transition-all duration-150 cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500',
            'min-h-[44px]',
            error
              ? 'border-danger-500 focus:ring-danger-500'
              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(opt => (
            typeof opt === 'string'
              ? <option key={opt} value={opt}>{opt}</option>
              : <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p id={errorId} className="text-xs text-danger-600 dark:text-danger-400" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
      )}
    </div>
  )
})

export default Select
