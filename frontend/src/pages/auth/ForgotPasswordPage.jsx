import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      addToast('Password reset link sent to your email!', 'success');
    } catch (err) {
      addToast(err.message || 'Failed to send reset link.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <Card className="w-full max-w-md p-8 shadow-xl text-center">
        <h2 className="text-xl font-bold mb-2">Reset Password</h2>
        <p className="text-sm text-slate-500 mb-6">Enter your registered email to receive a password reset link.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Email" 
            type="email" 
            placeholder="you@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>
        <Link to="/login" className="inline-block mt-4 text-xs text-crimson-600 hover:underline">
          Back to Login
        </Link>
      </Card>
    </div>
  );
}

