import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function PrivacyPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This is a placeholder privacy policy. The Lifeline project stores only anonymized identifiers, approximate locations, and does not expose personal contact information.
        All data handling follows the principles of data minimisation and user consent.
      </p>
      <Button as={Link} to="/" variant="secondary">Return Home</Button>
    </section>
  );
}

