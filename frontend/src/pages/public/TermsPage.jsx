import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function TermsPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        This is a placeholder terms‑of‑service document for the Lifeline demo project.
        All functionality is provided for educational purposes only; no real medical advice is given.
      </p>
      <Button as={Link} to="/" variant="secondary">Return Home</Button>
    </section>
  );
}

