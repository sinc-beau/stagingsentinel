"use client"

import React, { useState, useRef } from 'react';
import { Shield, Calendar, MapPin, Users, Brain, Network, Award, ChevronRight, Clock, CheckCircle2, Eye, Activity, Zap, Target, ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton';
import { Navigation } from '@/components/Navigation';
import { EventFooter } from '@/components/EventFooter';
import { DynamicForumForm } from '@/components/forms/DynamicForumForm';

export function WatchtowerForumAustinContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <SentinelDifferenceSection />
        <AgendaHighlightsSection />
        <ForumRegistrationSection />
        <DiamondSponsorSection />
        <GoldSponsorSection />
        <ForumPresentationsSection />
        <VenueSection />
        <ExperienceTypesSection />
        <TestimonialsSection />
        <WhyAttendSection />
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
                    National
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
                    <span className="text-base font-semibold">March 1-3, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span className="text-base font-semibold">Downright Hotel, Austin, TX</span>
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
  const dayRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleDayClick = (dayName: string) => {
    setExpandedDay(expandedDay === dayName ? null : dayName);

    setTimeout(() => {
      if (expandedDay !== dayName && dayRefs.current[dayName]) {
        dayRefs.current[dayName]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const agendaData = [
    {
      day: 'Sunday',
      date: 'March 1, 2026',
      sessions: [
        {
          time: '2:00 - 5:00 PM',
          items: [
            {
              title: 'Registration',
              synopsis: 'Get familiar with SINC Staff and the event layout. Secure your complimentary Swag Bag and learn how to use the Onsite Application for Peer Engagement and win great prizes!'
            }
          ]
        },
        {
          time: '5:30 - 7:00 PM',
          items: [
            {
              title: 'Welcome & Reception',
              synopsis: 'Engage your Peers over canapes and cocktails'
            }
          ]
        },
        {
          time: '7:00 - 9:00 PM',
          items: [
            {
              title: 'Dinner & Keynote',
              synopsis: 'Open seating buffet meal serving 5-star food and great Peer engagement before Day 1 kicks off'
            }
          ]
        }
      ]
    },
    {
      day: 'Monday',
      date: 'March 2, 2026',
      sessions: [
        {
          time: '7:00 - 7:55 AM',
          items: [
            {
              title: 'Breakfast',
              synopsis: 'Fuel up and network with fellow tech leaders before the day kicks off!'
            }
          ]
        },
        {
          time: '8:00 - 8:55 AM',
          items: [
            {
              title: 'Opening Remarks, Keynote & PANEL - Leadership at the Speed of Threat',
              synopsis: 'In today\'s environment, success isn\'t about predicting the next threat - It\'s about being ready for when it arrives. This panel brings together leading CISOs to discuss navigating dual pressures of innovation and resilience, balancing emerging technologies like AI and Zero Trust with organizational shifts needed to defend against tomorrow\'s threats.'
            }
          ]
        },
        {
          time: '8:55 - 9:05 AM',
          items: [
            {
              title: 'Networking Break',
              synopsis: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
            }
          ]
        },
        {
          time: '9:05 - 9:35 AM',
          items: [
            {
              title: 'BREAKOUT SESSION - The CISO\'s New Frontier: Navigating Agentic AI',
              synopsis: 'Examine the dual nature of Agentic AI in cybersecurity - from revolutionary threat detection to autonomous AI-driven attacks. Explore how CISOs must evolve from traditional IT protectors to strategic business leaders.'
            },
            {
              title: 'BREAKOUT SESSION - A New Paradigm for Managing Third-Party Risk',
              synopsis: '87% of F1000 businesses were affected by significant cyber incidents from third-parties in the past 12 months. Learn about continuous monitoring and real-time external threat detection using AI across Public Data to augment traditional questionnaires.'
            }
          ]
        },
        {
          time: '9:45 - 10:15 AM',
          items: [
            {
              title: 'BREAKOUT SESSION - Ransomware Resilience: Can You Reboot in Under an Hour?',
              synopsis: 'You\'ve got backups, but are you operationally ready to respond at speed? We\'ll walk through a play-by-play simulation of a ransomware event and dissect the communication, recovery, and continuity decisions that separate a fast rebound from a costly failure.'
            },
            {
              title: 'BREAKOUT SESSION - Building a Resilient Risk Management Program',
              synopsis: 'A practical blueprint for building and sustaining a risk management program that drives real resilience. Learn to simplify risk identification, prioritize threats based on business impact, and implement scalable mitigation strategies.'
            }
          ]
        },
        {
          time: '10:15 - 10:30 AM',
          items: [
            {
              title: 'Networking Break',
              synopsis: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
            }
          ]
        },
        {
          time: '10:35 - 11:35 AM',
          items: [
            {
              title: 'BOARDROOM SESSION 1 - The CFO Conversation: How to Justify Spend Without the Fear Factor',
              synopsis: 'Boards are tired of fear-based budget requests. Learn how to make a confident business case for security, cloud, and modernization investments without leading with doom and gloom.'
            },
            {
              title: 'BOARDROOM SESSION 2 - What to Tell Your Board About Cyber Risk (and What Not To)',
              synopsis: 'Boards want to understand cyber risk but don\'t need technical details. This session teaches how to translate security posture into business language, present risk in terms executives understand, and avoid both fear-mongering and false reassurance. Walk away with communication templates and presentation frameworks that actually work.'
            },
            {
              title: 'BOARDROOM SESSION 3 - Playbook Exchange, What\'s Actually Working?',
              synopsis: 'A highly interactive, fast-paced session of shared strategies, tools, and wins (or fails). Walk away with five new ideas from your peers that you can try in your org tomorrow.'
            }
          ]
        },
        {
          time: '11:50 AM - 1:00 PM',
          items: [
            {
              title: 'Lunch & Keynote/Panel',
              synopsis: 'Enjoy a gourmet meal while engaging with thought-provoking keynote speakers and panel discussions.'
            }
          ]
        },
        {
          time: '1:00 - 1:10 PM',
          items: [
            {
              title: 'Networking Break',
              synopsis: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
            }
          ]
        },
        {
          time: '1:15 - 1:45 PM',
          items: [
            {
              title: 'BREAKOUT SESSION - Redefining Product Security in the Age of AI and Quantum',
              synopsis: 'Explore how AI and Quantum Computing are redefining product security. Discuss the urgent need to rethink security architectures, prepare for post-quantum threats, and leverage AI responsibly.'
            },
            {
              title: 'BREAKOUT SESSION - Mastering Data Security Posture',
              synopsis: 'Learn how DSPM enables continuous visibility into data flows, identifies risk exposure, and prioritizes remediation. Gain insights into strengthening data governance and reducing risk in hybrid and cloud environments.'
            }
          ]
        },
        {
          time: '2:15 - 5:00 PM',
          items: [
            {
              title: 'Off-site Activity 1',
              synopsis: 'Experience Austin\'s best with curated activities designed for networking and team building.'
            },
            {
              title: 'Off-site Activity 2',
              synopsis: 'Choose from multiple off-site experiences designed to foster connections and create memorable moments.'
            }
          ]
        },
        {
          time: '5:00 - 6:30 PM',
          items: [
            {
              title: 'Reception',
              synopsis: 'Great conversations, an easy way to reconnect with new contacts over canapes and cocktails'
            }
          ]
        },
        {
          time: '6:30 - 8:00 PM',
          items: [
            {
              title: 'Dinner',
              synopsis: 'Open seating buffet meal serving 5-star food and great Peer engagement.'
            }
          ]
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'March 3, 2026',
      sessions: [
        {
          time: '8:00 - 8:55 AM',
          items: [
            {
              title: 'Breakfast',
              synopsis: 'Fuel up and network with fellow tech leaders before the day kicks off!'
            }
          ]
        },
        {
          time: '9:00 - 9:55 AM',
          items: [
            {
              title: 'Opening Remarks, Keynote & PANEL - The One Thing I\'d Do Differently',
              synopsis: 'What separates hindsight from insight? In this unscripted close, senior execs share one decision they regret, what they learned from it, and what they\'d advise others to do differently.'
            }
          ]
        },
        {
          time: '9:55 - 10:05 AM',
          items: [
            {
              title: 'Networking Break',
              synopsis: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
            }
          ]
        },
        {
          time: '10:10 - 11:10 AM',
          items: [
            {
              title: 'BOARDROOM SESSION 4 - Scaling Security with Innovation',
              synopsis: 'Explore strategies for keeping software security aligned with rapid technological advancements. Adapt security measures to modern development practices and ensure your strategy evolves with organizational needs.'
            },
            {
              title: 'BOARDROOM SESSION 5 - Threats We\'re Not Talking About (Yet)',
              synopsis: 'From deepfake fraud to AI-driven phishing and attack-as-a-service marketplaces, this session brings light to the newest generation of threats you need to be thinking about now.'
            }
          ]
        },
        {
          time: '11:10 - 11:20 AM',
          items: [
            {
              title: 'Networking Break',
              synopsis: 'Circle back with your Peers on the content so far while grabbing a coffee or tea and a snack'
            }
          ]
        },
        {
          time: '11:20 AM - 12:20 PM',
          items: [
            {
              title: 'BOARDROOM SESSION 6 - The Tech Leader\'s New Balancing Act: Risk, Velocity & Visibility',
              synopsis: 'With every team demanding faster delivery and more flexibility, how do leaders balance speed with visibility and control? Hear how top execs are managing this tension while enabling transformation. We\'ll cover: • Prioritize delivery without compromising oversight • Align leadership across security and engineering • Establish control points that support transformation'
            },
            {
              title: 'BOARDROOM SESSION 7 - Skills Gap Reality: Hiring and Retaining Tech Talent',
              synopsis: 'Everyone wants the same cybersecurity professionals. Cloud architects are commanding ridiculous salaries. This session explores how leaders are getting creative with hiring, building internal training programs, and structuring compensation packages that work within budget constraints. Real strategies for competing in an impossible talent market.'
            }
          ]
        },
        {
          time: '12:30 PM',
          items: [
            {
              title: 'Lunch & Departure',
              synopsis: 'Open seating, Buffet-style lunch. Serving food for all tastes, pallets and preferences. Vegan, vegetarian, halal options available. Serving to-go boxes for those in a hurry!'
            }
          ]
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
              ref={(el) => { dayRefs.current[day.day] = el; }}
              className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300"
            >
              <button
                onClick={() => handleDayClick(day.day)}
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
                          <div className="text-sm text-teal-400 font-mono mb-4">{session.time}</div>
                          {session.items.length > 1 && (
                            <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider">
                              Choose one session:
                            </div>
                          )}
                          <div className="space-y-4">
                            {session.items.map((item, itemIndex) => (
                              <div key={itemIndex} className={session.items.length > 1 ? "pl-4 border-l-2 border-slate-700" : ""}>
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed">{item.synopsis}</p>
                              </div>
                            ))}
                          </div>
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

function DiamondSponsorSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">Diamond Sponsor</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Premier Partner
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative bg-slate-900/60 border-2 border-purple-500/40 rounded-xl p-16 hover:border-purple-400/60 transition-all duration-300 flex items-center justify-center h-40">
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

function GoldSponsorSection() {
  return (
    <>
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Gold Sponsors</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Proudly Sponsored By
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/SquareX.png"
                  alt="SquareX"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/Ping Identity.png"
                  alt="Ping Identity"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/OpenText.png"
                  alt="OpenText"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/adaptivesecurity.png"
                  alt="Adaptive Security"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/veracode.png"
                  alt="Veracode"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/insight.webp"
                  alt="Insight"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/appomni.webp"
                  alt="AppOmni"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/checkmarx.png"
                  alt="Checkmarx"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-amber-500/30 rounded-xl p-12 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/swimlane.webp"
                  alt="Swimlane"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-500/10 border border-slate-500/30 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">Silver Sponsors</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-400/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-slate-500/30 rounded-xl p-12 hover:border-slate-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/dux.png"
                  alt="Dux"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-400/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-slate-500/30 rounded-xl p-12 hover:border-slate-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/cybelangel.png"
                  alt="Cybelangel"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
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

      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-xs font-mono text-green-400 tracking-wider uppercase">Panel Sponsors</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Panel Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-green-500/30 rounded-xl p-12 hover:border-green-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/rivalsecurity.png"
                  alt="Rival Security"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-900/60 border border-green-500/30 rounded-xl p-12 hover:border-green-400/50 transition-all duration-300 flex items-center justify-center h-32">
                <img
                  src="/daylight_security-2.png"
                  alt="Daylight Security"
                  className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ForumPresentationsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">Forum Resources</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Exclusive Cybersecurity Briefings
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Download exclusive insights and reports from our solution providers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            href="/threatlocker_dac_report_digital.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-900/60 border border-teal-500/30 rounded-xl p-8 hover:border-teal-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4">
              <img
                src="/threatlocker.png"
                alt="ThreatLocker"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                <span>DAC Report</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>

          <a
            href="/threatlocker_security_stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-900/60 border border-teal-500/30 rounded-xl p-8 hover:border-teal-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4">
              <img
                src="/threatlocker.png"
                alt="ThreatLocker"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                <span>Security Stack</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>

          <a
            href="https://www.opentext.com/resources/omdia-report-the-future-of-data-security-posture-management"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-slate-900/60 border border-teal-500/30 rounded-xl p-8 hover:border-teal-400/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4">
              <img
                src="/OpenText.png"
                alt="OpenText"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                <span>DSPM Report</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">VENUE & LOCATION</div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Downright Hotel
          </h2>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-bold">
            Austin, Texas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-3xl" />
            <div className="relative h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
              <img
                src="/downrighthotel.png"
                alt="Downright Hotel, Austin TX"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Experience world-class hospitality in the heart of Austin's vibrant tech scene.
              The Downright Hotel provides the perfect setting for focused collaboration and networking.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Prime Location:</strong> Easy access to Austin-Bergstrom International Airport
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">Modern Facilities:</strong> State-of-the-art meeting spaces and technology
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300">
                  <strong className="text-white">All-Inclusive:</strong> Accommodations, meals, and activities included
                </div>
              </div>
            </div>
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
            formId="70cf292d-804a-4b82-b518-a84cd5c0c044"
            portalId="45377644"
            region="na1"
          />
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
          <div className="text-xs font-mono text-teal-400 tracking-wider mb-4">MARCH 1-3, 2026</div>
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
