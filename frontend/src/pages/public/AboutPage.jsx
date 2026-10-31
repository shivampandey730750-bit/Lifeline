import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Lifeline</h1>
      <p className="mb-4">
        Lifeline is a platform that connects blood donors, requesters, and healthcare facilities.
        It is built as a demo B.Tech project with a focus on privacy, security, and a premium UI.
        All data shown is fictional or clearly labelled as simulated.
      </p>
      <Button as={Link} to="/" variant="secondary">Return Home</Button>
    </section>
  );
}

