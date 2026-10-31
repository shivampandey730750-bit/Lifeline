/**
 * MedicalDisclaimer.jsx — Reusable medical safety disclaimer banner.
 * Required wherever blood matching, requests, or donor info appears.
 */
import React, { useState } from 'react'
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/utils/cn'

export default function MedicalDisclaimer({ className, compact = false }) {
  const [expanded, setExpanded] = useState(!compact)

  return (
    <div className={cn('medical-disclaimer', className)} role="note">
      <div className="flex items-start gap-3">
        <AlertTriangle
          className="h-4 w-4 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-warning-800 dark:text-warning-200">
              Medical Disclaimer
            </p>
            {compact && (
              <button
                onClick={() => setExpanded(e => !e)}
                className="text-warning-600 dark:text-warning-400 hover:text-warning-800 transition-colors"
                aria-expanded={expanded}
              >
                {expanded
                  ? <ChevronUp className="h-4 w-4" aria-label="Collapse disclaimer" />
                  : <ChevronDown className="h-4 w-4" aria-label="Expand disclaimer" />
                }
              </button>
            )}
          </div>
          {expanded && (
            <p className="mt-1 text-xs text-warning-700 dark:text-warning-300">
              Blood-group matching on this platform is for reference only and is{' '}
              <strong>NOT a transfusion-compatibility guarantee</strong>. Actual compatibility
              requires comprehensive testing by qualified medical professionals.
              This platform does not declare anyone medically eligible.
              Always consult a licensed medical professional and follow official blood bank procedures.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
