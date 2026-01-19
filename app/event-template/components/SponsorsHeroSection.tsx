import React from 'react';
import { EventSponsor } from '@/lib/supabase';

interface SponsorsHeroSectionProps {
  sponsors: EventSponsor[];
}

export function SponsorsHeroSection({ sponsors }: SponsorsHeroSectionProps) {
  if (sponsors.length === 0) return null;

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">
            In Partnership With
          </h2>
        </div>

        <div className={`grid ${sponsors.length === 1 ? 'max-w-xs mx-auto' : sponsors.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-3 lg:grid-cols-4'} gap-4 items-center`}>
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="relative group">
              <div className="relative bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-16">
                {sponsor.logo_url ? (
                  <img
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-slate-800 font-semibold text-sm">{sponsor.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
