import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function FindBloodPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Find Blood</h1>
      <p className="mb-4">
        This page will allow users to search for blood donors based on blood group, location, and other filters.
        The full implementation is coming soon.
      </p>
      <Button as={Link} to="/" variant="secondary">
        Return Home
      </Button>
    </section>
  );
}

