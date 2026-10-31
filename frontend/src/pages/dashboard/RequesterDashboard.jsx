import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { PlusCircle, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequesterDashboard() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Requester Dashboard</h1>
          <p className="text-sm text-slate-500">Track and manage your emergency blood requests.</p>
        </div>
        <Button as={Link} to="/requests/new" className="gap-2">
          <PlusCircle className="w-4 h-4" /> Create Blood Request
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <span className="text-sm text-slate-500">Active Requests</span>
          <p className="text-2xl font-bold mt-2">1 Active</p>
        </Card>
        <Card className="p-6">
          <span className="text-sm text-slate-500">Potential Donors Found</span>
          <p className="text-2xl font-bold mt-2">14 Nearby</p>
        </Card>
        <Card className="p-6">
          <span className="text-sm text-slate-500">Fulfilled</span>
          <p className="text-2xl font-bold mt-2">2 Past Requests</p>
        </Card>
      </div>
    </div>
  );
}

