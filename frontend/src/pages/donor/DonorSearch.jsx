import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { BLOOD_GROUPS } from '@/utils/bloodGroups';

export default function DonorSearch() {
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [city, setCity] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Find Blood Donors</h1>
      
      <Card className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select label="Blood Group" value={bloodGroup} onChange={setBloodGroup} options={BLOOD_GROUPS.map(b => ({ value: b, label: b }))} />
        <Input label="City" value={city} onChange={e => setCity(e.target.value)} placeholder="Filter by city" />
        <div className="flex items-end">
          <Button className="w-full">Search Donors</Button>
        </div>
      </Card>

      <div className="space-y-3">
        <Card className="p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="primary">{bloodGroup}</Badge>
              <span className="font-semibold text-sm">Donor #D-8492</span>
              <Badge variant="success">Available</Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1">Approx. 2.4 km away • Verified donor</p>
          </div>
          <Button size="sm">Send Request</Button>
        </Card>
      </div>
    </div>
  );
}

