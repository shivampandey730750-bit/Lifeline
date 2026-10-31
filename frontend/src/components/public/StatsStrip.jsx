import React from 'react';
import { Activity, Users, Building2 } from 'lucide-react';

// Simulated demo numbers – clearly labelled
const stats = [
  { icon: <Activity className="h-6 w-6 text-primary" />, label: 'Donors', value: '12 k' },
  { icon: <Users className="h-6 w-6 text-primary" />, label: 'Requests', value: '4 k' },
  { icon: <Building2 className="h-6 w-6 text-primary" />, label: 'Hospitals', value: '150' },
];

export default function StatsStrip() {
  return (
    <div className="flex justify-center gap-8 bg-rose-100 dark:bg-gray-700 py-4 rounded-2xl">
      {stats.map((s, i) => (
        <div key={i} className="flex items-center space-x-2">
          <div className="text-primary">{s.icon}</div>
          <div>
            <div className="font-medium text-lg">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        </div>
      ))}
      <div className="text-xs text-muted-foreground self-end">Simulated demo data</div>
    </div>
  );
}

