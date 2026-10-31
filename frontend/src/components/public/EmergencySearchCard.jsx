import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import { useNavigate } from 'react-router-dom';
import { BLOOD_GROUPS } from '@/utils/bloodGroups';

// Simple options for blood component types
const components = [
  { value: 'whole', label: 'Whole Blood' },
  { value: 'plasma', label: 'Plasma' },
  { value: 'platelets', label: 'Platelets' },
];

export default function EmergencySearchCard() {
  const navigate = useNavigate();
  const [bg, setBg] = React.useState('');
  const [city, setCity] = React.useState('');
  const [component, setComponent] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a query string – the donor search page will read these params.
    const query = new URLSearchParams({
      bloodGroup: bg,
      city,
      component,
    }).toString();
    navigate(`/find-blood?${query}`);
  };

  return (
    <form className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 w-full max-w-2xl" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4 text-primary">Emergency Search</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Select
          label="Blood Group"
          placeholder="Select group"
          options={BLOOD_GROUPS.map((g) => ({ value: g, label: g }))}
          value={bg}
          onChange={setBg}
          required
        />
        <Input
          label="City / Area"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Select
          label="Component"
          placeholder="Select component"
          options={components}
          value={component}
          onChange={setComponent}
          required
        />
      </div>
      <Button type="submit" variant="primary" className="w-full md:w-auto">
        Search Donors
      </Button>
    </form>
  );
}

