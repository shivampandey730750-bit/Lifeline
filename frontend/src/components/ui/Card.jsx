/**
 * Card.jsx — Reusable card container.
 * Supports interactive (hover lift), header, footer, and padding variants.
 */
import React from 'react'
import { cn } from '@/utils/cn'

export default function Card({
  children,
  className,
  interactive = false,
  padding     = 'md',
  as: Tag     = 'div',
  ...props
}) {
  const paddings = {
    none: '',
    sm:   'p-4',
    md:   'p-6',
    lg:   'p-8',
  }

  return (
    <Tag
      className={cn(
        'card',
        paddings[padding],
        interactive && 'card-interactive cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('mb-4 flex items-start justify-between gap-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn('text-lg font-semibold text-slate-900 dark:text-slate-100', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn('text-sm text-slate-500 dark:text-slate-400 mt-1', className)} {...props}>
      {children}
    </p>
  )
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('mt-4 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800', className)} {...props}>
      {children}
    </div>
  )
}
