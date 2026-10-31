import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { BLOOD_GROUPS, BLOOD_COMPONENTS } from '@/utils/bloodGroups';
import { useToast } from '@/contexts/ToastContext';
import { useNavigate } from 'react-router-dom';

export default function RequestCreate() {
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [units, setUnits] = useState('1');
  const [hospital, setHospital] = useState('');
  const [city, setCity] = useState('');
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('Emergency request posted successfully!', 'success');
    navigate('/requests');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Post an Emergency Blood Request</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select label="Blood Group Needed" value={bloodGroup} onChange={setBloodGroup} options={BLOOD_GROUPS.map(b => ({ value: b, label: b }))} />
            <Input label="Units Required" type="number" min="1" max="10" value={units} onChange={e => setUnits(e.target.value)} required />
          </div>
          <Input label="Hospital Name" placeholder="e.g. Apollo Hospital" value={hospital} onChange={e => setHospital(e.target.value)} required />
          <Input label="City / Region" placeholder="e.g. Bangalore" value={city} onChange={e => setCity(e.target.value)} required />
          <Button type="submit" variant="danger" className="w-full">
            Broadcast Emergency Request
          </Button>
        </form>
      </Card>
    </div>
  );
}

