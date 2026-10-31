/**
 * Skeleton.jsx — Loading placeholder with shimmer animation.
 */
import React from 'react'
import { cn } from '@/utils/cn'

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('shimmer rounded-xl bg-slate-200 dark:bg-slate-700', className)}
      aria-hidden="true"
      {...props}
    />
  )
}

export function SkeletonText({ lines = 3, className }) {
  return (
    <div className={cn('space-y-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className }) {
  return (
    <div className={cn('card p-6 space-y-4', className)} aria-hidden="true">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  )
}
