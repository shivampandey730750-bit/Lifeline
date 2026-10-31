import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function DisclaimerPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Medical Disclaimer</h1>
      <p className="mb-4">
        The information provided by Lifeline is for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment.
      </p>
      <p className="mb-4">
        Blood‑group matching shown in the platform is **NOT** a transfusion‑compatibility guarantee. Always consult qualified healthcare professionals and follow official blood‑bank procedures.
      </p>
      <Button as={Link} to="/" variant="secondary">Return Home</Button>
    </section>
  );
}

