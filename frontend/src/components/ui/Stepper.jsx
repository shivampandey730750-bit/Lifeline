/**
 * Stepper.jsx — Horizontal/vertical step indicator for multi-step flows.
 */
import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'

export default function Stepper({ steps = [], currentStep = 0, className }) {
  return (
    <nav aria-label="Progress" className={cn('w-full', className)}>
      <ol className="flex items-center w-full">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent   = index === currentStep

          return (
            <li
              key={step.label || index}
              className={cn(
                'flex items-center',
                index < steps.length - 1 && 'flex-1'
              )}
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-200',
                    isCompleted && 'border-crimson-700 bg-crimson-700 text-white',
                    isCurrent   && 'border-crimson-700 bg-white dark:bg-slate-900 text-crimson-700',
                    !isCompleted && !isCurrent && 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-400'
                  )}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                {step.label && (
                  <span className={cn(
                    'mt-2 text-xs font-medium whitespace-nowrap hidden sm:block',
                    isCurrent   ? 'text-crimson-700 dark:text-crimson-400' : 'text-slate-500 dark:text-slate-400'
                  )}>
                    {step.label}
                  </span>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={cn(
                  'flex-1 h-0.5 mx-2 transition-colors duration-200',
                  isCompleted ? 'bg-crimson-700' : 'bg-slate-200 dark:bg-slate-700'
                )} aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
