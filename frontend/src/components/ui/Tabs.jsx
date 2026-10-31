/**
 * Tabs.jsx — Accessible tab component using aria-selected.
 */
import React, { createContext, useContext, useState } from 'react'
import { cn } from '@/utils/cn'

const TabsContext = createContext(null)

export function Tabs({ defaultValue, value, onValueChange, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const controlled = value !== undefined
  const current    = controlled ? value : activeTab

  const onChange = (v) => {
    if (!controlled) setActiveTab(v)
    onValueChange?.(v)
  }

  return (
    <TabsContext.Provider value={{ current, onChange }}>
      <div className={cn('', className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex gap-1 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, className }) {
  const { current, onChange } = useContext(TabsContext)
  const isActive = current === value

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      onClick={() => onChange(value)}
      className={cn(
        'flex-1 px-3 py-1.5 text-sm font-medium rounded-xl transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500',
        isActive
          ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300',
        className
      )}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className }) {
  const { current } = useContext(TabsContext)
  if (current !== value) return null

  return (
    <div
      role="tabpanel"
      className={cn('animate-fade-in', className)}
    >
      {children}
    </div>
  )
}
