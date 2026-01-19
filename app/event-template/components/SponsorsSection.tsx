import React from 'react';
import { Award } from 'lucide-react';
import { EventSponsor } from '@/lib/supabase';

interface SponsorsSectionProps {
  sponsors: EventSponsor[];
}

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  if (sponsors.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">
              {sponsors.length === 1 ? 'Gold Sponsor' : 'Gold Sponsors'}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Proudly Sponsored By
          </h2>
        </div>

        <div className={`grid ${sponsors.length === 1 ? 'flex justify-center' : sponsors.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 max-w-5xl mx-auto`}>
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className={`relative group ${sponsors.length === 1 ? 'max-w-md w-full' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
