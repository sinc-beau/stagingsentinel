import React from 'react';
import { FileText, Video, Share } from 'lucide-react';
import Link from 'next/link';

export function DigitalContentSection() {
  const contentTypes = [
    {
      icon: FileText,
      title: 'Signal Reports',
      description: 'Editorial digests extracted from real-time conversations.'
    },
    {
      icon: Video,
      title: 'Cleared Recordings',
      description: 'Restricted access to approved sessions.'
    },
    {
      icon: Share,
      title: 'Quick-read Summaries',
      description: 'Actionable briefs to circulate across your ops team immediately.'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Intel Feed
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative group">
            <img 
              src="/intelfeed.png" 
              alt="Intelligence operations center" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contentTypes.map((content, index) => (
                <div
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <content.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                        {content.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/intelligence">
                <button className="px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 font-bold text-lg rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Browse Intel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}