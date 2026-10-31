/**
 * ToastContext.jsx
 * Global toast notification system with aria-live announcements.
 */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react'
import { cn } from '@/utils/cn'

const ToastContext = createContext(null)
let toastId = 0

const ICONS = {
  success: CheckCircle,
  error:   XCircle,
  warning: AlertTriangle,
  info:    Info,
}

const STYLES = {
  success: 'bg-success-50 border-success-500 text-success-700 dark:bg-green-950 dark:border-green-700 dark:text-green-300',
  error:   'bg-danger-50  border-danger-500  text-danger-700  dark:bg-red-950  dark:border-red-700  dark:text-red-300',
  warning: 'bg-warning-50 border-warning-500 text-warning-700 dark:bg-amber-950 dark:border-amber-700 dark:text-amber-300',
  info:    'bg-info-50    border-info-500    text-info-700    dark:bg-blue-950 dark:border-blue-700 dark:text-blue-300',
}

function Toast({ id, type = 'info', title, message, onDismiss }) {
  const Icon = ICONS[type]
  
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), 5000)
    return () => clearTimeout(timer)
  }, [id, onDismiss])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0,  scale: 1   }}
      exit={{    opacity: 0, x: 60, scale: 0.9, transition: { duration: 0.15 } }}
      className={cn(
        'pointer-events-auto w-full max-w-sm rounded-2xl border p-4 shadow-lg',
        'flex items-start gap-3',
        STYLES[type]
      )}
      role="alert"
      aria-live="assertive"
    >
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm">{title}</p>}
        {message && <p className="text-sm opacity-90 mt-0.5">{message}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="flex-shrink-0 rounded-lg p-1 hover:bg-black/10 transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </motion.div>
  )
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ type = 'info', title, message }) => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, type, title, message }])
    return id
  }, [])

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  // Convenience helpers
  const toast = {
    success: (title, message) => addToast({ type: 'success', title, message }),
    error:   (title, message) => addToast({ type: 'error',   title, message }),
    warning: (title, message) => addToast({ type: 'warning', title, message }),
    info:    (title, message) => addToast({ type: 'info',    title, message }),
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {createPortal(
        <div
          id="toast-portal"
          aria-label="Notifications"
          aria-live="polite"
          aria-atomic="false"
        >
          <AnimatePresence mode="popLayout">
            {toasts.map(t => (
              <Toast key={t.id} {...t} onDismiss={dismiss} />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
