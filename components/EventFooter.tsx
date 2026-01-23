import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export function EventFooter() {
  return (
    <footer className="py-16 px-6 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-teal-400" />
            <h3 className="text-2xl font-black text-white tracking-wider">
              SENTINEL<span className="text-teal-400">NEXUS</span>
            </h3>
          </div>

          <p className="text-xl text-slate-400 font-light">
            Where Leaders Guard Tomorrow's Digital Frontier
          </p>

          <div className="flex items-center justify-center gap-8 text-slate-500">
            <Link href="/contact" className="hover:text-teal-400 transition-colors">
              Contact Us
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy
            </Link>
          </div>

          <div className="text-slate-600 text-sm">
            © 2024 Sentinel Nexus. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-slate-600 text-xs">Powered by</span>
            <img
              src="/sinc-logo.svg"
              alt="SINC"
              className="h-4 opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
