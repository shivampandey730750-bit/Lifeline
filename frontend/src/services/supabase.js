/**
 * supabase.js — Supabase client singleton
 * Uses VITE_ environment variables (anon key only — safe for browser).
 * The service-role key NEVER lives in frontend code.
 */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnon) {
  console.warn(
    '[Lifeline] Supabase env vars missing. ' +
    'Copy frontend/.env.example to frontend/.env.local and fill in your values.'
  )
}

export const supabase = createClient(
  supabaseUrl  || 'https://placeholder.supabase.co',
  supabaseAnon || 'placeholder-anon-key',
  {
    auth: {
      persistSession:     true,
      autoRefreshToken:   true,
      detectSessionInUrl: true,
    },
  }
)
