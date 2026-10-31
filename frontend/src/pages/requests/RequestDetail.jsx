import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useParams, Link } from 'react-router-dom';

export default function RequestDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Request #{id || 'REQ-101'}</h1>
        <Badge variant="danger">Critical</Badge>
      </div>

      <Card className="p-6 space-y-4">
        <div>
          <span className="text-xs text-slate-400">Requirement</span>
          <p className="font-semibold text-lg">2 Units • Whole Blood (A+)</p>
        </div>
        <div>
          <span className="text-xs text-slate-400">Location</span>
          <p className="font-semibold">City Hospital, Metro City</p>
        </div>
        <div>
          <span className="text-xs text-slate-400">Status</span>
          <p className="text-sm font-medium text-amber-500">Awaiting Donors</p>
        </div>
      </Card>
      <Link to="/requests" className="text-sm text-crimson-600 hover:underline">
        ← Back to all requests
      </Link>
    </div>
  );
}

