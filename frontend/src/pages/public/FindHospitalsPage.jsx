import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function FindHospitalsPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Find Hospitals & Blood Banks</h1>
      <p className="mb-4">
        This page will display a map and a searchable list of nearby hospitals and blood banks.
        Integration with live inventory is currently in DMode and will show a disclaimer.
      </p>
      <Button as={Link} to="/" variant="secondary">Return Home</Button>
    </section>
  );
}

