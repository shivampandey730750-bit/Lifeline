import React from 'react';
import Hero from '@/components/public/Hero';
import EmergencySearchCard from '@/components/public/EmergencySearchCard';
import FeatureCard from '@/components/public/FeatureCard';
import StatsStrip from '@/components/public/StatsStrip';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Hospital, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';

// Data for feature cards
const features = [
  {
    icon: <Activity className="h-6 w-6 text-primary" />,
    title: 'Smart Donor Matching',
    description: 'Algorithmic ranking of donors based on compatibility, distance and recent activity.',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />, 
    title: 'Nearby Blood Banks',
    description: 'Find the closest blood banks with real‑time availability (or a disclaimer when not connected).',
  },
  {
    icon: <Hospital className="h-6 w-6 text-primary" />, 
    title: 'Hospital Finder',
    description: 'Search hospitals by specialty, location and emergency services.',
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />, 
    title: 'Emergency Requests',
    description: 'Quickly broadcast urgent blood needs to nearby donors.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />, 
    title: 'Availability Verification',
    description: 'Donors can confirm their current status, ensuring up‑to‑date data.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />, 
    title: 'AI‑Based Demand Forecasting',
    description: 'Educational forecasts on future blood demand using synthetic data.',
  },
];

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-12 px-4 md:px-8 lg:px-16" id="main-content">
      {/* Hero Section */}
      <Hero />

      {/* Emergency Search Card */}
      <section className="flex justify-center">
        <EmergencySearchCard />
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <FeatureCard
            key={idx}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </section>

      {/* How It Works – simple 4‑step layout */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            {step: '1', title: 'Register', desc: 'Create a donor or requester profile.'},
            {step: '2', title: 'Search', desc: 'Find donors or blood banks near you.'},
            {step: '3', title: 'Request', desc: 'Post an urgent request and notify donors.'},
            {step: '4', title: 'Connect', desc: 'Securely contact the selected donor.'},
          ].map((s) => (
            <div key={s.step} className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-2">
                {s.step}
              </div>
              <h3 className="font-medium">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Strip – simulated data */}
      <section className="mt-12">
        <StatsStrip />
      </section>

      {/* Footer links are already in the global Footer component */}
    </main>
  );
}

