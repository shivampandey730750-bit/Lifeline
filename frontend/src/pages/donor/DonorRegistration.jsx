import React from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { BLOOD_GROUPS } from '@/utils/bloodGroups';

export default function DonorRegistration() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Register as a Blood Donor</h1>
      <Card className="p-6 space-y-4">
        <Select label="Blood Group" options={BLOOD_GROUPS.map(b => ({ value: b, label: b }))} />
        <Input label="City / Region" placeholder="e.g. Mumbai, Delhi, Bangalore" />
        <Input label="Phone (Stored securely, never displayed publicly)" placeholder="+91 98765 43210" />
        <Button className="w-full">Submit Registration</Button>
      </Card>
    </div>
  );
}

