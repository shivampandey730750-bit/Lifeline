/**
 * supabase.js — Supabase client singleton
 * Uses VITE_ environment variables with production fallbacks so auth never fails
 */
import { createClient } from '@supabase/supabase-js'

const SUPABASE_PROJECT_URL = 'https://btdnkqiyaatejisczylg.supabase.co'
const SUPABASE_ANON_PUBLIC_KEY = 'sb_publishable_D2_ttcGCFDNErI-G_UYMSg_s_F6bJfg'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || SUPABASE_PROJECT_URL
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY || SUPABASE_ANON_PUBLIC_KEY

export const supabase = createClient(
  supabaseUrl,
  supabaseAnon,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
)
