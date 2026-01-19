import React from 'react';
import { Users } from 'lucide-react';
import { EventSpeaker } from '@/lib/supabase';

interface SpeakerSectionProps {
  speakers: EventSpeaker[];
}

export function SpeakerSection({ speakers }: SpeakerSectionProps) {
  if (speakers.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">
              Featured Speakers
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Meet Our Speakers
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 group flex flex-col items-center w-full max-w-sm"
            >
              {speaker.headshot_url ? (
                <div className="relative w-40 h-40 mt-8 overflow-hidden rounded-full flex items-center justify-center bg-slate-900 border-4 border-teal-500/20">
                  <img
                    src={speaker.headshot_url}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="relative w-40 h-40 mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-teal-500/20">
                  <Users className="w-20 h-20 text-slate-600" />
                </div>
              )}

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  {speaker.name}
                </h3>
                {speaker.about && (
                  <p className="text-slate-300 leading-relaxed">
                    {speaker.about}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
