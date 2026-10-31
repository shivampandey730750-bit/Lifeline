import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="text-center py-12 md:py-20 bg-rose-50 dark:bg-gray-800 rounded-2xl">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Find Blood. Find Hope. Save Lives.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Connect with registered blood donors, explore nearby blood banks, and discover emergency healthcare resources through one intelligent platform.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button as={Link} to="/find-blood" variant="primary" size="lg">
          Find Blood Now
        </Button>
        <Button as={Link} to="/donate/register" variant="secondary" size="lg">
          Become a Donor
        </Button>
      </div>
    </section>
  );
}

