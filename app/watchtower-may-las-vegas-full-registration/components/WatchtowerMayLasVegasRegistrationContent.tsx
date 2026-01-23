"use client"

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { DynamicForumForm } from '@/components/forms/DynamicForumForm';
import { Navigation } from '@/components/Navigation';
import { EventFooter } from '@/components/EventFooter';

export default function WatchtowerMayLasVegasRegistrationContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Watchtower CISO Forum
              </h1>
              <div className="text-2xl text-teal-400 font-bold mb-8">Las Vegas, Nevada</div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-semibold">May 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-semibold">M Resort, Las Vegas, NV</span>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold text-white mb-3">
                  Thank You for Registering!
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Please fill out the form below so that we can properly provide logistics support
                  for your attendance at the forum.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 lg:p-12 shadow-2xl flex justify-center">
              <div className="w-full max-w-2xl">
                <DynamicForumForm
                  formId="451e1ba0-a411-47d3-af1e-e964fa85662f"
                  portalId="45377644"
                  region="na1"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <EventFooter />
    </div>
  );
}
