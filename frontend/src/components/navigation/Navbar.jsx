import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Activity, Sun, Moon, Menu, X, HeartHandshake } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, profile, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/find-blood', label: 'Find Blood' },
    { to: '/find-hospitals', label: 'Find Hospitals' },
    { to: '/about', label: 'About' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-crimson-600 flex items-center justify-center text-white shadow-md shadow-crimson-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white">
              Lifeline
            </span>
            <span className="text-[10px] text-crimson-600 dark:text-crimson-400 font-medium tracking-wider uppercase">
              Every Life Counts
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-crimson-600 dark:hover:text-crimson-400 ${
                  isActive
                    ? 'text-crimson-600 dark:text-crimson-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions & Profile */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate(`/dashboard/${profile?.role || 'donor'}`)}
              >
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/donate/register')}
                className="gap-1.5"
              >
                <HeartHandshake className="w-4 h-4" />
                Become a Donor
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {user ? (
              <>
                <Button onClick={() => { setMobileMenuOpen(false); navigate(`/dashboard/${profile?.role || 'donor'}`); }}>
                  Dashboard
                </Button>
                <Button variant="secondary" onClick={() => { setMobileMenuOpen(false); handleSignOut(); }}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setMobileMenuOpen(false); navigate('/login'); }}>
                  Sign In
                </Button>
                <Button onClick={() => { setMobileMenuOpen(false); navigate('/donate/register'); }}>
                  Become a Donor
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

