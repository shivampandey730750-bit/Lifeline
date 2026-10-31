/**
 * Modal.jsx — Accessible modal dialog.
 * Traps focus, supports Escape to close, uses aria-modal.
 */
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

const SIZES = {
  sm:   'max-w-sm',
  md:   'max-w-md',
  lg:   'max-w-lg',
  xl:   'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full mx-4',
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size    = 'md',
  hideClose = false,
  className,
}) {
  const overlayRef = useRef(null)
  const firstFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    // Lock body scroll
    document.body.style.overflow = 'hidden'
    // Focus trap — focus first focusable element
    setTimeout(() => firstFocusRef.current?.focus(), 50)
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.()
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1,    y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              'card w-full overflow-y-auto max-h-[90vh]',
              SIZES[size],
              className
            )}
          >
            {/* Header */}
            {(title || !hideClose) && (
              <div className="flex items-center justify-between p-6 pb-0">
                {title && (
                  <h2 id="modal-title" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                  </h2>
                )}
                {!hideClose && (
                  <button
                    ref={firstFocusRef}
                    onClick={onClose}
                    className="ml-auto rounded-xl p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            )}
            {/* Body */}
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
