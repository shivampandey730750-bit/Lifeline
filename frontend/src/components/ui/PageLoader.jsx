/**
 * PageLoader.jsx — Full-page loading spinner for Suspense fallback.
 */
import React from 'react'
import { Loader2 } from 'lucide-react'

export default function PageLoader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-950"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated blood drop logo */}
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-crimson-50 dark:bg-crimson-950 flex items-center justify-center">
            <span className="text-3xl" role="img" aria-label="blood drop">🩸</span>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-crimson-300 dark:border-crimson-700 animate-ping opacity-50" />
        </div>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          <span className="text-sm font-medium">Loading Lifeline…</span>
        </div>
      </div>
    </div>
  )
}
