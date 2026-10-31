/**
 * ErrorState.jsx — Recoverable error display with retry action.
 */
import React from 'react'
import { AlertTriangle } from 'lucide-react'
import Button from './Button'
import { cn } from '@/utils/cn'

export default function ErrorState({
  title       = 'Something went wrong',
  description = 'An error occurred. Please try again.',
  onRetry,
  className,
}) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-6 text-center', className)}>
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-danger-50 dark:bg-red-950 text-danger-500">
        <AlertTriangle className="h-8 w-8" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">
        {description}
      </p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  )
}
