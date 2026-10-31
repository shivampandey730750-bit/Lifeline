/**
 * App.jsx — Root application component
 * Sets up routing, auth context, theme, and toast provider.
 */
import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider }  from '@/contexts/AuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ToastProvider } from '@/contexts/ToastContext'
import { CommandPaletteProvider } from '@/contexts/CommandPaletteContext'
import ProtectedRoute  from '@/components/auth/ProtectedRoute'
import RoleGuard       from '@/components/auth/RoleGuard'
import PublicLayout    from '@/layouts/PublicLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import PageLoader      from '@/components/ui/PageLoader'
import EmergencyFAB    from '@/components/ui/EmergencyFAB'
import CommandPalette  from '@/components/ui/CommandPalette'

// ── Lazy-loaded pages ──────────────────────────────────────────
const LandingPage        = lazy(() => import('@/pages/public/LandingPage'))
const FindBloodPage      = lazy(() => import('@/pages/public/FindBloodPage'))
const FindHospitalsPage  = lazy(() => import('@/pages/public/FindHospitalsPage'))
const AboutPage          = lazy(() => import('@/pages/public/AboutPage'))
const PrivacyPage        = lazy(() => import('@/pages/public/PrivacyPage'))
const TermsPage          = lazy(() => import('@/pages/public/TermsPage'))
const DisclaimerPage     = lazy(() => import('@/pages/public/DisclaimerPage'))

const LoginPage          = lazy(() => import('@/pages/auth/LoginPage'))
const RegisterPage       = lazy(() => import('@/pages/auth/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage'))
const ResetPasswordPage  = lazy(() => import('@/pages/auth/ResetPasswordPage'))

const DonorDashboard     = lazy(() => import('@/pages/dashboard/DonorDashboard'))
const RequesterDashboard = lazy(() => import('@/pages/dashboard/RequesterDashboard'))
const AdminDashboard     = lazy(() => import('@/pages/dashboard/AdminDashboard'))
const ProfilePage        = lazy(() => import('@/pages/dashboard/ProfilePage'))

const DonorRegistration  = lazy(() => import('@/pages/donor/DonorRegistration'))
const DonorSearch        = lazy(() => import('@/pages/donor/DonorSearch'))

const RequestCreate      = lazy(() => import('@/pages/requests/RequestCreate'))
const RequestDetail      = lazy(() => import('@/pages/requests/RequestDetail'))
const MyRequests         = lazy(() => import('@/pages/requests/MyRequests'))

const NotFoundPage       = lazy(() => import('@/pages/public/NotFoundPage'))

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <CommandPaletteProvider>
            {/* Skip link for accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>

            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* ── Public routes ────────────────────────── */}
                <Route element={<PublicLayout />}>
                  <Route path="/"              element={<LandingPage />} />
                  <Route path="/find-blood"    element={<FindBloodPage />} />
                  <Route path="/find-hospitals" element={<FindHospitalsPage />} />
                  <Route path="/about"         element={<AboutPage />} />
                  <Route path="/privacy"       element={<PrivacyPage />} />
                  <Route path="/terms"         element={<TermsPage />} />
                  <Route path="/disclaimer"    element={<DisclaimerPage />} />
                </Route>

                {/* ── Auth routes ──────────────────────────── */}
                <Route path="/login"           element={<LoginPage />} />
                <Route path="/register"        element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password"  element={<ResetPasswordPage />} />

                {/* ── Protected: any logged-in user ────────── */}
                <Route element={<ProtectedRoute />}>
                  <Route element={<DashboardLayout />}>
                    <Route path="/profile"         element={<ProfilePage />} />
                    <Route path="/donate/register" element={<DonorRegistration />} />
                    <Route path="/find-donors"     element={<DonorSearch />} />
                    <Route path="/requests/new"    element={<RequestCreate />} />
                    <Route path="/requests/:id"    element={<RequestDetail />} />
                    <Route path="/requests"        element={<MyRequests />} />

                    {/* Role-specific dashboards */}
                    <Route
                      path="/dashboard/donor"
                      element={
                        <RoleGuard role="donor">
                          <DonorDashboard />
                        </RoleGuard>
                      }
                    />
                    <Route
                      path="/dashboard/requester"
                      element={
                        <RoleGuard role="requester">
                          <RequesterDashboard />
                        </RoleGuard>
                      }
                    />
                    <Route
                      path="/dashboard/admin"
                      element={
                        <RoleGuard role="admin">
                          <AdminDashboard />
                        </RoleGuard>
                      }
                    />

                    {/* Default dashboard redirect */}
                    <Route path="/dashboard" element={<Navigate to="/dashboard/donor" replace />} />
                  </Route>
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>

            {/* Persistent Emergency FAB */}
            <EmergencyFAB />
            <CommandPalette />
          </CommandPaletteProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
