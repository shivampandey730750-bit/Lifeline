import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Heart, Activity, Clock, ShieldCheck } from 'lucide-react';

export default function DonorDashboard() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-950 dark:text-white">Donor Dashboard</h1>
        <p className="text-sm text-slate-500">Manage your donation status and urgent blood requests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500">Availability</span>
            <Badge variant="success">Active Donor</Badge>
          </div>
          <p className="text-2xl font-bold">Ready to Donate</p>
          <p className="text-xs text-slate-400 mt-1">Available for emergency requests in your city</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500">Blood Group</span>
            <Badge variant="primary">Verified</Badge>
          </div>
          <p className="text-2xl font-bold">O+ (Positive)</p>
          <p className="text-xs text-slate-400 mt-1">Compatible with O+, A+, B+, AB+</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500">Lives Impacted</span>
            <Heart className="w-5 h-5 text-crimson-600" />
          </div>
          <p className="text-2xl font-bold">3 Donations</p>
          <p className="text-xs text-slate-400 mt-1">Last donation: 4 months ago</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Urgent Requests Near You</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="danger">Critical</Badge>
                <span className="font-semibold text-sm">2 Units O+ Needed</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">City Care Hospital • 3.2 km away • Needed within 4 hours</p>
            </div>
            <Button size="sm">Respond to Request</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

