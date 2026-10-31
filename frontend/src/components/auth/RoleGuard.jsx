import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import PageLoader from '@/components/ui/PageLoader';

export default function RoleGuard({ role, children }) {
  const { profile, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }

  // If user role doesn't match required role, redirect to their home
  if (profile && profile.role !== role) {
    return <Navigate to={`/dashboard/${profile.role || 'donor'}`} replace />;
  }

  return children;
}

