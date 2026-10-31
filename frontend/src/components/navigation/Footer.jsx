import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-crimson-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">Lifeline</span>
            </div>
            <p className="text-sm text-slate-400">
              Every Second Matters. Every Life Counts. Real-time emergency blood donor matching and coordination platform.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/find-blood" className="hover:text-white transition-colors">Find Donors</Link></li>
              <li><Link to="/find-hospitals" className="hover:text-white transition-colors">Find Hospitals & Banks</Link></li>
              <li><Link to="/donate/register" className="hover:text-white transition-colors">Register as Donor</Link></li>
              <li><Link to="/requests/new" className="hover:text-white transition-colors">Post Blood Request</Link></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal & Safety</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Project</Link></li>
            </ul>
          </div>

          {/* Medical Disclaimer card in footer */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" /> Medical Disclaimer
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Blood compatibility matching is for informational purposes only. It is NOT a transfusion compatibility guarantee. Always follow clinical laboratory screening procedures.
            </p>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lifeline. B.Tech Major Project.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-crimson-500" /> for Healthcare Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

