/**
 * AuthContext.jsx
 * Manages Supabase auth state, user profile, and role.
 * Provides login, register, logout, and password reset actions.
 */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { supabase } from '@/services/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)  // true while initial session loads

  // Fetch the user's profile from the DB
  const fetchProfile = useCallback(async (userId) => {
    if (!userId) { setProfile(null); return }
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (!error) setProfile(data)
  }, [])

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      fetchProfile(session?.user?.id).finally(() => setLoading(false))
    })

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        fetchProfile(session?.user?.id)
      }
    )

    return () => subscription.unsubscribe()
  }, [fetchProfile])

  // ── Auth actions ──────────────────────────────────────────────
  const register = async ({ email, password, fullName, role = 'requester' }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role },
      },
    })
    if (error) throw error
    return data
  }

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const forgotPassword = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) throw error
  }

  const resetPassword = async (newPassword) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) throw error
  }

  const refreshProfile = () => fetchProfile(user?.id)

  // Derived values
  const role = profile?.role ?? user?.user_metadata?.role ?? null
  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      role,
      loading,
      isAuthenticated,
      register,
      login,
      logout,
      forgotPassword,
      resetPassword,
      refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
