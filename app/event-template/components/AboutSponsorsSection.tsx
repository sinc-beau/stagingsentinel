import React from 'react';
import { EventSponsor } from '@/lib/supabase';

interface AboutSponsorsSectionProps {
  sponsors: EventSponsor[];
}

export function AboutSponsorsSection({ sponsors }: AboutSponsorsSectionProps) {
  if (sponsors.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {sponsors.map((sponsor, index) => (
          <div key={sponsor.id} className={`${index > 0 ? 'mt-16' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-2">
                About {sponsor.name}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex items-center justify-center">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-12 w-full flex items-center justify-center">
                  <img
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              </div>

              <div>
                {sponsor.about && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                      {sponsor.about}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
