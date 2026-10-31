/**
 * api.js — Axios-like fetch wrapper for the Flask backend API.
 * Automatically attaches the Supabase JWT to every request.
 * Handles errors consistently.
 */
import { supabase } from './supabase'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

async function getAuthHeaders() {
  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function request(method, path, { body, params } = {}) {
  const authHeaders = await getAuthHeaders()
  const url = new URL(`${BASE_URL}${path}`)

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        url.searchParams.set(k, v)
      }
    })
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  // Parse JSON regardless of status
  let data
  try {
    data = await res.json()
  } catch {
    data = { error: 'Invalid server response' }
  }

  if (!res.ok) {
    const err = new Error(data?.error || data?.message || `HTTP ${res.status}`)
    err.status = res.status
    err.data   = data
    throw err
  }

  return data
}

export const api = {
  get:    (path, opts) => request('GET',    path, opts),
  post:   (path, opts) => request('POST',   path, opts),
  put:    (path, opts) => request('PUT',    path, opts),
  patch:  (path, opts) => request('PATCH',  path, opts),
  delete: (path, opts) => request('DELETE', path, opts),
}
