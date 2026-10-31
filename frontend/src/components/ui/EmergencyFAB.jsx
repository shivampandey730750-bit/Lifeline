/**
 * EmergencyFAB.jsx — Persistent Emergency Guidance floating action button.
 * Shows tips and a prompt to call local emergency services.
 * ⚠️ Does NOT display fake emergency numbers.
 */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, AlertTriangle, ChevronRight } from 'lucide-react'
import Modal from './Modal'

const EMERGENCY_TIPS = [
  'Stay calm and assess the situation.',
  'Call your local emergency services number (e.g., 112 in India, 911 in the US).',
  'If blood is needed urgently, contact the nearest government hospital blood bank directly.',
  'Do not rely solely on this platform in a life-threatening emergency.',
  'Keep the patient\'s blood group information ready when speaking to medical staff.',
  'Government blood banks are required to provide blood in emergencies — contact them directly.',
]

export default function EmergencyFAB() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="emergency-fab no-print"
        aria-label="Emergency guidance"
        title="Emergency Guidance"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Emergency guidance modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Emergency Guidance"
        size="md"
      >
        {/* Disclaimer */}
        <div className="medical-disclaimer mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-warning-800 dark:text-warning-200 mb-1">
              This is not a substitute for emergency services
            </p>
            <p className="text-xs text-warning-700 dark:text-warning-300">
              In a life-threatening emergency, call your local emergency number immediately.
              This platform cannot dispatch help or guarantee blood availability.
            </p>
          </div>
        </div>

        {/* Emergency numbers reminder */}
        <div className="bg-crimson-50 dark:bg-crimson-950 border border-crimson-200 dark:border-crimson-800 rounded-2xl p-4 mb-6">
          <h4 className="text-sm font-semibold text-crimson-800 dark:text-crimson-200 mb-3 flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Your Local Emergency Number
          </h4>
          <ul className="space-y-2 text-sm text-crimson-700 dark:text-crimson-300">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              <span><strong>India:</strong> 112 (unified emergency) or 102 (ambulance)</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              <span><strong>International:</strong> Check your country's official emergency number</span>
            </li>
          </ul>
        </div>

        {/* Tips */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Steps to take in a blood emergency:
          </h4>
          <ul className="space-y-2">
            {EMERGENCY_TIPS.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-semibold">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500 text-center">
          Lifeline connects donors and requesters — it is not an emergency dispatch service.
        </p>
      </Modal>
    </>
  )
}
