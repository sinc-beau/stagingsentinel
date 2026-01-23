"use client"

import React, { useState } from 'react';
import { Shield, Calendar, MapPin, Users, Brain, Network, Award, ChevronRight, Clock, CheckCircle2, Eye, Activity, Zap, Target, ChevronDown } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton';
import { Navigation } from '@/components/Navigation';
import { EventFooter } from '@/components/EventFooter';
import { DynamicForumForm } from '@/components/forms/DynamicForumForm';

export function WatchtowerForumCanadaContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <SentinelDifferenceSection />
        <ForumRegistrationSection />
        <DiamondSponsorSection />
        <PlatinumSponsorSection />
        <SilverSponsorSection />
        <ExperienceTypesSection />
        <TestimonialsSection />
        <WhyAttendSection />
        <AgendaHighlightsSection />
        <NetworkingSection />
        <PartnerSection />
        <RegistrationSection />
      </main>
      <EventFooter />
    </div>
  );
}

function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-400" />
                <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">
                  Watchtower Forum 2026
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text">
                    Canada
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text mt-2">
                    CISO and Cybersecurity
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text">
                    Leaders Forum
                  </span>
                </h1>

                <div className="flex flex-col gap-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span className="text-base font-semibold">August 2026 (Dates TBD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span className="text-base font-semibold">Canada (Location TBD)</span>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Join 70+ CISOs and Security Leaders for two days of intensive intelligence briefings,
                  strategic discussions, and executive networking at the premier CISO forum.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton onClick={scrollToRegistration} className="flex items-center gap-2">
                  SECURE YOUR SPOT
                  <ChevronRight className="w-5 h-5" />
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src="/cisoforumpanel.jpg"
                  alt="Watchtower CISO Forum"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-teal-400">REGISTRATION OPEN</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-3">
                  <div className="bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-teal-400 mb-1">70+</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">Security Leaders</div>
                    </div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm border border-teal-500/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-cyan-400 mb-1">48</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">Hours of Networking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventDetailsSection() {
  const stats = [
    { number: '70+', label: 'CISOs and Security Leaders', icon: Users },
    { number: '48', label: 'Hours of Sessions', icon: Clock },
    { number: '15+', label: 'Intelligence Briefings', icon: Brain },
    { number: '100%', label: 'Vetted Attendees', icon: Shield }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 text-teal-400 mb-4" />
              <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAttendSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reasons = [
    {
      title: 'Strategic Intelligence',
      description: 'Access classified threat intelligence briefings and emerging cybersecurity trends from government agencies and leading security researchers.',
      icon: Brain,
    },
    {
      title: 'Executive Networking',
      description: 'Build relationships with vetted peers who understand your challenges. Share strategies and solutions in a confidential, trust-based environment.',
      icon: Network,
    },
    {
      title: 'Actionable Insights',
      description: 'Walk away with practical frameworks, tools, and strategies you can implement immediately to strengthen your security posture.',
      icon: Award,
    },
    {
      title: 'Peer Learning',
      description: 'Participate in roundtable discussions and problem-solving sessions focused on real-world challenges facing security leaders today.',
      icon: Users,
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">WHY ATTEND</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Elevate Your Security Strategy
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The Watchtower Forum isn't just another conference. It's where security leaders
              come to think critically, share openly, and leave with solutions that matter.
            </p>
            <PrimaryButton onClick={scrollToRegistration} className="flex items-center gap-2">
              REQUEST INVITATION
              <ChevronRight className="w-5 h-5" />
            </PrimaryButton>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-300">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaHighlightsSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const agendaData = [
    {
      day: 'Sunday',
      date: 'August TBD, 2026',
      sessions: [
        {
          time: '2:00 - 5:00 PM',
          title: 'FORUM REGISTRATION & APP DEMONSTRATION',
          synopsis: 'Get familiar with SINC Staff and the event layout. Secure your complimentary Swag Bag and learn how to use the Onsite Application for Peer Engagement and win great prizes!'
        },
        {
          time: '5:30 - 7:00 PM',
          title: 'SINC WELCOME NETWORKING RECEPTION',
          synopsis: 'Engage your Peers over canapes and cocktails'
        },
        {
          time: '7:00 - 9:00 PM',
          title: 'SINC NETWORKING & ENGAGEMENT DINNER',
          synopsis: 'Open seating buffet meal serving 5 star food and great Peer engagement before Day 1 kicks off'
        }
      ]
    },
    {
      day: 'Monday',
      date: 'August TBD, 2026',
      sessions: [
        {
          time: '7:00 - 7:55 AM',
          title: 'SINC IT LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full Breakfast and lots of coffee available!'
        },
        {
          time: '8:05 - 8:55 AM',
          title: 'CISO PANEL - Leadership at the Speed of Threat',
          synopsis: 'In today\'s environment, success isn\'t about predicting the next threat - It\'s about being ready for when it arrives. This panel brings together leading CISOs to discuss navigating dual pressures of innovation and resilience, balancing emerging technologies like AI and Zero Trust with organizational shifts needed to defend against tomorrow\'s threats.'
        },
        {
          time: '9:05 - 9:35 AM',
          title: 'A New Paradigm for Managing Third-Party Risk',
          synopsis: '87% of F1000 businesses were affected by significant cyber incidents from third-parties in the past 12 months. Learn about continuous monitoring and real-time external threat detection using AI across Public Data to augment traditional questionnaires.'
        },
        {
          time: '9:45 - 10:15 AM',
          title: 'WORKSHOP - Building a Resilient Risk Management Program',
          synopsis: 'A practical blueprint for building and sustaining a risk management program that drives real resilience. Learn to simplify risk identification, prioritize threats based on business impact, and implement scalable mitigation strategies.'
        },
        {
          time: '10:35 - 11:05 AM',
          title: 'The CISO\'s New Frontier: Navigating Agentic AI',
          synopsis: 'Examine the dual nature of Agentic AI in cybersecurity - from revolutionary threat detection to autonomous AI-driven attacks. Explore how CISOs must evolve from traditional IT protectors to strategic business leaders.'
        },
        {
          time: '11:55 - 12:40 PM',
          title: 'INTERACTIVE SIMULATION - Minutes to Meltdown',
          synopsis: 'Experience a simulated ransomware attack, taking on leadership roles during a high-stakes negotiation. Navigate a realistic storyline inspired by recent breaches and leave with an actionable disaster recovery toolkit.'
        },
        {
          time: '1:40 - 2:10 PM',
          title: 'FIRESIDE CHAT - Security Is Everyone\'s Job',
          synopsis: 'Challenge traditional awareness programs and learn how to embed cybersecurity into daily habits, leadership mindsets, and company values. Transform security from "someone else\'s job" into a core part of how your business operates.'
        },
        {
          time: '3:00 - 3:50 PM',
          title: 'PANEL - Winning the Boardroom',
          synopsis: 'Learn proven strategies for translating technical complexity into business urgency. Frame cyber risk in terms leadership cares about and shift conversations from technical warnings to strategic opportunities.'
        },
        {
          time: '4:40 - 5:30 PM',
          title: 'PANEL + ROUNDTABLE - Cybersecurity Leaders at the Breaking Point',
          synopsis: 'A candid session confronting the mental and operational toll of cybersecurity leadership. Explore strategies for restoring focus, resilience, and effectiveness while maintaining a long-term strategic view.'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'August TBD, 2026',
      sessions: [
        {
          time: '8:00 - 8:50 AM',
          title: 'SINC IT LEADERS NETWORKING BREAKFAST',
          synopsis: 'Full Breakfast and lots of coffee available!'
        },
        {
          time: '9:00 - 9:50 AM',
          title: 'PANEL - Breaking the Chain: Should CISOs Stop Reporting to IT?',
          synopsis: 'Seasoned security leaders who report outside of IT unpack how this shift changes visibility, influence, funding, and risk framing. Explore the pros and cons of reporting to CFOs, CEOs, and boards.'
        },
        {
          time: '10:00 - 10:30 AM',
          title: 'WORKSHOP - Redefining Product Security in the Age of AI and Quantum',
          synopsis: 'Explore how AI and Quantum Computing are redefining product security. Discuss the urgent need to rethink security architectures, prepare for post-quantum threats, and leverage AI responsibly.'
        },
        {
          time: '10:50 - 11:20 AM',
          title: 'WORKSHOP - Mastering Data Security Posture',
          synopsis: 'Learn how DSPM enables continuous visibility into data flows, identifies risk exposure, and prioritizes remediation. Gain insights into strengthening data governance and reducing risk in hybrid and cloud environments.'
        },
        {
          time: '11:30 - 12:00 PM',
          title: 'Scaling Security with Innovation',
          synopsis: 'Explore strategies for keeping software security aligned with rapid technological advancements. Adapt security measures to modern development practices and ensure your strategy evolves with organizational needs.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">THREE DAYS OF IMPACT</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Detailed Agenda
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            A carefully curated program designed to maximize learning, networking, and actionable outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {agendaData.map((day, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-teal-400" />
                    <span className="text-2xl font-black text-white">{day.day}</span>
                  </div>
                  <p className="text-slate-400">{day.date}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-teal-400 transition-transform duration-300 ${
                    expandedDay === day.day ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedDay === day.day && (
                <div className="px-8 pb-8 space-y-6 border-t border-slate-800">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="pt-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="text-sm text-teal-400 font-mono mb-2">{session.time}</div>
                          <h4 className="text-lg font-bold text-white mb-2">{session.title}</h4>
                          <p className="text-slate-300 leading-relaxed">{session.synopsis}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NetworkingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Curated</div>
                    <div className="text-slate-400">Attendee Selection</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <Network className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Structured</div>
                    <div className="text-slate-400">Networking Sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Confidential</div>
                    <div className="text-slate-400">Discussion Environment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">NETWORKING OPPORTUNITIES</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Connect with Your Peers
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Build lasting relationships with fellow security leaders who understand your challenges.
              Every attendee is vetted to ensure productive, high-level conversations.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              From structured roundtables to informal networking sessions, you'll have multiple
              opportunities to connect, share insights, and develop partnerships that extend beyond the forum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function PartnerSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 text-center">
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
          Partnership Inquiry
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          Connect with 70+ CISOs and Security Leaders and showcase your solutions.
          Explore sponsorship opportunities that deliver real value and engagement.
        </p>
        <a href="/solution-providers">
          <SecondaryButton>
            LEARN ABOUT SPONSORSHIP
          </SecondaryButton>
        </a>
      </div>
    </section>
  );
}

function ExperienceTypesSection() {
  return (
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

        <div className="grid lg:grid-cols-12 gap-6">
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

          <div className="lg:col-span-4">
            <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 h-full">
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

          <div className="lg:col-span-6">
            <div className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-6">
                <Target className="w-12 h-12 text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Strategic Planning</h3>
                  <p className="text-slate-300 mb-4">
                    Executive sessions on future threats and defense investments.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">Board Communication</span>
                    <span className="text-xs bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">Risk Quantification</span>
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
  );
}

function TestimonialsSection() {
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
    <section className="py-24 relative bg-slate-900">
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
              <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div key={index + 3} className="group relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
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
  );
}

function SentinelDifferenceSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-black">
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-teal-400" />
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
                    <div className="text-3xl font-black text-cyan-400 mb-2">70+</div>
                    <div className="text-sm text-slate-400">Security Leaders</div>
                  </div>
                </div>

                <PrimaryButton onClick={scrollToRegistration} className="w-full px-8 py-4">
                  Reserve Your Seat
                </PrimaryButton>
              </div>
            </div>

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
                  <span className="text-slate-300">Limited to CISOs and Security Leaders only</span>
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
  );
}

function ForumRegistrationSection() {
  return (
    <section id="registration" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="/cisoforumpanel.jpg"
          alt="Watchtower CISO Forum"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">SECURE YOUR SEAT</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Register for the Forum
          </h2>
          <p className="text-xl text-slate-300">
            Limited seats available for qualified security leaders. Complete the form below to request your invitation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <DynamicForumForm
            formId="aa88a04a-0f2d-4313-b65a-b119087fef2c"
            portalId="45377644"
            region="na1"
          />
        </div>
      </div>
    </section>
  );
}

function DiamondSponsorSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Diamond Sponsor</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Premier Partner
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative bg-slate-900/60 border-2 border-cyan-500/40 rounded-xl p-16 hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center h-40">
              <img
                src="/commvault.png"
                alt="Commvault"
                className="h-20 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatinumSponsorSection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-200/10 border border-slate-200/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-slate-200" />
            <span className="text-xs font-mono text-slate-200 tracking-wider uppercase">Platinum Sponsor</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Exclusive Partner
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300/20 to-slate-400/20 rounded-xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-slate-900/60 border-2 border-slate-300/30 rounded-xl p-14 hover:border-slate-300/50 transition-all duration-300 flex items-center justify-center h-36">
              <img
                src="/appomni.webp"
                alt="AppOmni"
                className="h-18 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SilverSponsorSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-500/10 border border-slate-500/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">Silver Sponsor</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-400/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-900/60 border border-slate-500/30 rounded-xl p-12 hover:border-slate-400/50 transition-all duration-300 flex items-center justify-center h-32">
              <img
                src="/threatlocker.png"
                alt="ThreatLocker"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <div className="mb-8">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">AUGUST 2026</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Your Mission Awaits
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join the most exclusive cybersecurity forum of 2026. Limited seats available for qualified leaders only.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <PrimaryButton onClick={scrollToRegistration} className="flex items-center gap-2">
            SECURE YOUR ACCESS
            <ChevronRight className="w-5 h-5" />
          </PrimaryButton>
        </div>

        <p className="text-sm text-slate-500">
          Registration is invitation-only and subject to approval
        </p>
      </div>
    </section>
  );
}
