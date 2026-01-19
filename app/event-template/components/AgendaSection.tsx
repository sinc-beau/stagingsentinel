import React from 'react';
import { Clock } from 'lucide-react';
import { AgendaItem } from '@/lib/supabase';

interface AgendaSectionProps {
  agendaItems: AgendaItem[];
}

export function AgendaSection({ agendaItems }: AgendaSectionProps) {
  if (agendaItems.length === 0) return null;

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">EVENT SCHEDULE</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Detailed Agenda
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            A carefully curated program designed to maximize learning, networking, and actionable outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {agendaItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="text-sm text-teal-400 font-mono mb-2">{item.time_slot}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  {item.description && (
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
