/**
 * Input.jsx — Reusable input field with label, error state, helper text.
 */
import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const Input = forwardRef(function Input({
  label,
  id,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  required,
  ...props
}, ref) {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`
  const errorId = error ? `${inputId}-error` : undefined
  const helpId  = helperText ? `${inputId}-help` : undefined

  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
          {required && (
            <span className="ml-1 text-crimson-600" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            aria-hidden="true"
          >
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={[errorId, helpId].filter(Boolean).join(' ') || undefined}
          className={cn(
            'w-full rounded-xl border bg-white dark:bg-slate-900 px-3 py-2.5',
            'text-sm text-slate-900 dark:text-slate-100',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'transition-all duration-150',
            'focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500',
            'min-h-[44px]',
            error
              ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
            leftIcon  && 'pl-10',
            rightIcon && 'pr-10',
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-danger-600 dark:text-danger-400" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helpId} className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </p>
      )}
    </div>
  )
})

export default Input
