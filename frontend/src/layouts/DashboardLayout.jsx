import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, Link } from 'react-router-dom';
import { Activity, LayoutDashboard, HeartHandshake, Search, PlusCircle, User, LogOut, Menu, X, Sun, Moon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import Button from '@/components/ui/Button';

export default function DashboardLayout() {
  const { user, profile, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navItems = [
    { to: `/dashboard/${profile?.role || 'donor'}`, label: 'Overview', icon: LayoutDashboard },
    { to: '/requests', label: 'Blood Requests', icon: HeartHandshake },
    { to: '/requests/new', label: 'Create Request', icon: PlusCircle },
    { to: '/find-donors', label: 'Find Donors', icon: Search },
    { to: '/profile', label: 'My Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-crimson-600 flex items-center justify-center text-white">
            <Activity className="w-4 h-4" />
          </div>
          <Link to="/" className="font-bold text-lg text-slate-900 dark:text-white">
            Lifeline
          </Link>
        </div>

        <div className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-crimson-50 dark:bg-crimson-950/50 text-crimson-600 dark:text-crimson-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* User Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-crimson-100 dark:bg-crimson-950 text-crimson-700 dark:text-crimson-300 flex items-center justify-center font-semibold text-xs">
                {profile?.name ? profile.name[0].toUpperCase() : 'U'}
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                  {profile?.name || user?.email || 'User'}
                </p>
                <p className="text-[10px] text-slate-500 capitalize">{profile?.role || 'User'}</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-xs gap-2" onClick={handleSignOut}>
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar on Mobile */}
        <header className="lg:hidden h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-crimson-600 flex items-center justify-center text-white">
              <Activity className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">Lifeline</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        {sidebarOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 pt-2" onClick={handleSignOut}>
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}

