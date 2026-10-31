import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function MyRequests() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blood Requests</h1>
        <Button as={Link} to="/requests/new" size="sm">+ New Request</Button>
      </div>

      <div className="space-y-4">
        <Card className="p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="danger">Critical</Badge>
              <span className="font-semibold text-sm">2 Units A+ • City Care Hospital</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Status: Pending donor response • Posted 1 hour ago</p>
          </div>
          <Button as={Link} to="/requests/REQ-101" variant="secondary" size="sm">View Details</Button>
        </Card>
      </div>
    </div>
  );
}

