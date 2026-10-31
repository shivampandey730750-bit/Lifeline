import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Button as={Link} to="/" variant="primary">Go Home</Button>
    </section>
  );
}

