/**
 * CommandPaletteContext.jsx
 * Ctrl+K command palette state management.
 */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const CommandPaletteContext = createContext(null)

export function CommandPaletteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open  = useCallback(() => setIsOpen(true),  [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(v => !v), [])

  // Keyboard shortcut: Ctrl+K (Windows/Linux) or Cmd+K (Mac)
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggle, close])

  return (
    <CommandPaletteContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export const useCommandPalette = () => {
  const ctx = useContext(CommandPaletteContext)
  if (!ctx) throw new Error('useCommandPalette must be used within CommandPaletteProvider')
  return ctx
}
