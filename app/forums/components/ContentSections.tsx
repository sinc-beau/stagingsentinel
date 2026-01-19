import React from 'react';
import { 
  Shield, Users, Target, Eye, Zap, Activity, Calendar, 
  Network, ChevronRight, Crosshair, ArrowRight 
} from 'lucide-react';

interface ContentSectionsProps {
  onRegisterClick: () => void;
}

export function ContentSections({ onRegisterClick }: ContentSectionsProps) {
  const testimonials = [
    {
      quote: "Already wrote an email summary to our leaders, with 7 action items for various folks to follow up on.",
      author: "Darrel Raynor",
      role: "LCRA",
      rating: 5
    },
    {
      quote: "Some of the topics will spur strategic discussions within my division as well with agency leadership.",
      author: "Dave Boyd",
      role: "Texas Comptroller of Public Accounts",
      rating: 5
    },
    {
      quote: "Several takeaways that I will be able to use to enhance our strategy, optimize current processes, and improve our day to day.",
      author: "Dana Kilcreas",
      role: "Berkeley College",
      rating: 5
    },
    {
      quote: "I share the presentations with my team for review as well as to gauge if any vendors might meet our needs.",
      author: "Kaseem Mabry",
      role: "Tampa International Airport",
      rating: 5
    },
    {
      quote: "I like to hear from those that are living the issues... those that are doing it confirm real world discussions.",
      author: "Ed Moore",
      role: "Carnival Corporation",
      rating: 5
    }
  ];

  return (
    <>
      {/* Experience Types - Bento Grid */}
      <section className="py-24 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">IMMERSIVE EXPERIENCES</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Five Ways to Level Up
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl">
              Each forum combines multiple formats to deliver maximum value and actionable intelligence.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Large Feature Card */}
            <div className="lg:col-span-8 lg:row-span-2">
              <div className="group h-full bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-3xl p-10 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl" />
                <div className="relative h-full flex flex-col">
                  <Eye className="w-14 h-14 text-red-400 mb-6" />
                  <h3 className="text-4xl font-black text-white mb-4">Intelligence Briefings</h3>
                  <p className="text-xl text-slate-300 mb-6">
                    Receive classified threat intelligence directly from government agencies and industry leaders.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Shield className="w-5 h-5 text-red-400" />
                      <span>Nation-state threat analysis</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Activity className="w-5 h-5 text-red-400" />
                      <span>Real-time attack patterns</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Shield className="w-5 h-5 text-red-400" />
                      <span>Defensive countermeasures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right Cards */}
            <div className="lg:col-span-4">
              <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 h-full">
                <Users className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Defense Councils</h3>
                <p className="text-slate-300 mb-4">
                  Closed-door peer discussions with Fortune 500 CISOs.
                </p>
                <div className="text-sm text-blue-400 font-mono">
                  → Chatham House Rules Apply
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="group bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 h-full">
                <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Tactical Training</h3>
                <p className="text-slate-300 mb-4">
                  Hands-on workshops with take-home frameworks.
                </p>
                <div className="text-sm text-yellow-400 font-mono">
                  → Immediate Implementation
                </div>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="lg:col-span-6">
              <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <Target className="w-12 h-12 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Strategic Planning</h3>
                    <p className="text-slate-300 mb-4">
                      Executive sessions on future threats and defense investments.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Board Communication</span>
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Risk Quantification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <Activity className="w-12 h-12 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Live Simulations</h3>
                    <p className="text-slate-300 mb-4">
                      Real-world attack scenarios with red/blue team exercises.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">APT Scenarios</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Incident Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Floating Cards */}
      <section className="py-24 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">TRUSTED BY LEADERS</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white">
              What Leaders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-sm text-teal-400 font-semibold">{testimonial.author}</div>
                    <div className="text-xs text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Additional Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {testimonials.slice(3).map((testimonial, index) => (
              <div key={index + 3} className="group relative">
                <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="text-sm text-teal-400 font-semibold">{testimonial.author}</div>
                    <div className="text-xs text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">THE SENTINEL DIFFERENCE</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              What You Can Expect
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three days that will change how you approach cybersecurity leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Key Features */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">3 Days of Intensive Learning</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Packed with insights from industry leaders who deliver real-world experience, not theory. Every session is designed to give you actionable takeaways you can implement immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Learn from Those Who've Been There</h3>
                    <p className="text-slate-300 leading-relaxed">
                      We know CISOs learn best from experience. Most say "the only way I learn is when I mess up" - we put you in a room with people who live and breathe what you do, so you can learn from their victories and mistakes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Community-Driven Agenda</h3>
                    <p className="text-slate-300 leading-relaxed">
                      We respect your time and develop the agenda from the ground up based on community feedback and what you're experiencing. Every topic is chosen because our network said it matters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Vetted Solution Providers</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Every vendor presentation is carefully curated to ensure relevance to the challenges our community faces. We select speakers based on their ability to provide real value, not their budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Promise */}
            <div className="lg:sticky lg:top-8 space-y-8">
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/30 rounded-3xl p-12">
                <div className="text-center space-y-8">
                  <Network className="w-20 h-20 text-teal-400 mx-auto" />
                  <h3 className="text-3xl font-black text-white">
                    The Sentinel Promise
                  </h3>
                  <p className="text-lg text-slate-300">
                    Every forum delivers real solutions to real problems from real leaders who've been in your shoes.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-800">
                    <div>
                      <div className="text-3xl font-black text-teal-400 mb-2">72</div>
                      <div className="text-sm text-slate-400">Hours of Content</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-cyan-400 mb-2">50+</div>
                      <div className="text-sm text-slate-400">Security Leaders</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={onRegisterClick}
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300"
                  >
                    Reserve Your Seat
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-white mb-6">Why Leaders Trust Sentinel</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">Chatham House Rules ensure confidentiality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">Every attendee is vetted and verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">Limited to senior security leaders only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">No recording, no press, no public sharing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 blur-3xl" />
            <div className="relative bg-black/50 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-16">
              <Crosshair className="w-16 h-16 text-teal-400 mx-auto mb-8" />
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Your Mission Awaits
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join the most exclusive cybersecurity forums of 2026. Limited seats available for qualified leaders only.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onRegisterClick}
                  className="group px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold text-lg rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span className="flex items-center gap-3">
                    Secure Your Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}