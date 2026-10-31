import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuth } from '@/contexts/AuthContext';

export default function ProfilePage() {
  const { user, profile } = useAuth();
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Profile & Preferences</h1>
      <Card className="p-6 space-y-4">
        <Input label="Email" value={user?.email || 'user@example.com'} disabled />
        <Input label="Name" defaultValue={profile?.name || 'Jane Doe'} />
        <Input label="City" defaultValue="Metro City" />
        <Button>Save Changes</Button>
      </Card>
    </div>
  );
}

