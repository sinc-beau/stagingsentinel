import React from 'react';
import { Users, Shield } from 'lucide-react';

export function WhoItsForSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            The Room, by Design
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Small enough to be useful. Senior enough to be worth your time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">CISOs, Deputy CISOs, and Senior Security Leaders</h3>
                    <p className="text-slate-300 leading-relaxed">The decision makers who shape security strategy and implementation</p>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">Select Vendors</h3>
                    <p className="text-slate-300 leading-relaxed">Who align to the problem being discussed and add real value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <img 
              src="/roombydesign.png" 
              alt="Security leadership team" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}