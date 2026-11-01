import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, Droplet, Building, UserPlus, FileText, X } from 'lucide-react';
import { useCommandPalette } from '@/contexts/CommandPaletteContext';

export default function CommandPalette() {
  const { isOpen, close } = useCommandPalette();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const commands = [
    { label: 'Home Page', icon: Home, action: () => navigate('/') },
    { label: 'Find Blood Donors', icon: Droplet, action: () => navigate('/find-blood') },
    { label: 'Find Nearby Hospitals', icon: Building, action: () => navigate('/find-hospitals') },
    { label: 'Register as Blood Donor', icon: UserPlus, action: () => navigate('/donate/register') },
    { label: 'Post Emergency Blood Request', icon: FileText, action: () => navigate('/requests/new') },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command or search (Ctrl+K)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-0 outline-none text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
          />
          <button onClick={close} className="p-1 text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-2 max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-center py-6 text-sm text-slate-500">No matching commands found.</p>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    item.action();
                    close();
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <Icon className="w-4 h-4 text-crimson-600" />
                  {item.label}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

