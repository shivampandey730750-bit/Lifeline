import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Card from '@/components/ui/Card';
import { Activity, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register({ email, password, fullName: name, role });
      addToast('Registration successful! Please check your email or sign in.', 'success');
      navigate('/login');
    } catch (err) {
      addToast(err.message || 'Registration failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-crimson-600 flex items-center justify-center text-white">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl text-slate-900 dark:text-white">Lifeline</span>
          </Link>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Create Account</h2>
          <p className="text-sm text-slate-500 mt-1">Join the network to save lives</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            startIcon={<User className="w-4 h-4 text-slate-400" />}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            startIcon={<Mail className="w-4 h-4 text-slate-400" />}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            startIcon={<Lock className="w-4 h-4 text-slate-400" />}
          />
          <Select
            label="I want to register as"
            value={role}
            onChange={setRole}
            options={[
              { value: 'donor', label: 'Blood Donor' },
              { value: 'requester', label: 'Blood Requester' },
            ]}
          />
          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Creating Account...' : 'Register'}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-crimson-600 dark:text-crimson-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
}

