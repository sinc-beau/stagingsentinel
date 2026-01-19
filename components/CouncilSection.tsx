"use client"

import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp } from 'lucide-react';

interface CouncilMember {
  name: string;
  title: string;
  organization: string;
  image: string;
  bio: string;
}

const councilMembers: CouncilMember[] = [
  {
    name: "Dana Kilcrease",
    title: "Chief Information Security Officer",
    organization: "Berkeley College",
    image: "/Dana Kilcrease CISO headshot.jpeg",
    bio: "Dana Kilcrease is the Chief Information Security Officer at Berkeley College, where he leads the institution's cybersecurity strategy across academic, administrative, and international operations. With over 15 years of progressive IT and security experience, he has driven major initiatives in data protection, risk management, and digital transformation. His current focus includes advancing secure AI adoption, strengthening data governance, and building resilience across the enterprise."
  },
  {
    name: "Chuck Layton",
    title: "Information Resource Manager, Data Management Officer, and AI Officer",
    organization: "San Jacinto College",
    image: "/Chuck Layton CISO Headshot.jpg",
    bio: "Chuck Layton serves as San Jacinto College's Information Resource Manager, Data Management Officer, and Artificial Intelligence Officer, bringing more than three decades of experience in cybersecurity, data governance, and IT leadership. His career includes senior roles as CEO, CIO, and CISO at CyberStar Defender Innovations, Alvin Community College, NASA Johnson Space Center, and the U.S. Department of Justice, where he led enterprise security programs and protected sensitive federal data. He now drives San Jac's strategy for data integrity, AI governance, and secure innovation."
  },
  {
    name: "Brian Lee",
    title: "Chief Information Security Officer",
    organization: "Oil States International",
    image: "/Brian Lee CISO Council Headshot.jpg",
    bio: "Brian is an accomplished cybersecurity executive and board director with over 13 years of experience leading security strategy and operations for complex global organizations. As Chief Information Security Officer at Oil States International and a Board Member at Unitus Community Credit Union, he provides strategic leadership in enterprise risk management, compliance oversight, and data protection. In these roles, he drives initiatives that enhance resilience, strengthen governance, and align security objectives with business goals across both corporate and regulated financial environments. Brian is recognized for his ability to translate complex security challenges into actionable insights and foster collaboration between technology and business leaders. He holds a Master of Science in Computer Information Systems Security, the NACD Directorship Certification, and professional credentials including CISSP, CEH, and CCNA."
  },
  {
    name: "Amit Basu",
    title: "Chief Information Officer and Chief Information Security Officer",
    organization: "International Seaways",
    image: "/Amit Basu CIO_CISO Headshot.png",
    bio: "Amit Basu is the Chief Information Officer and Chief Information Security Officer at International Seaways (NYSE: INSW), one of the world's largest tanker companies. A pioneer of maritime digital transformation, he has led INSW's transition to cloud-only operations and built a multi-layered cybersecurity framework safeguarding global fleet systems. Amit is recognized for advancing AI-enabled automation and cyber resilience across IT and OT environments. He is also an active thought leader and advisor in global cybersecurity and critical infrastructure forums."
  },
  {
    name: "Altaf Uddin",
    title: "Chief Information Officer and Chief Information Security Officer",
    organization: "Kansas Secretary of State",
    image: "/Altaf Uddin CIO_CISO Headshot.jpg",
    bio: "Altaf Uddin is the CIO and CISO for the Kansas Secretary of State, where he provides strategic leadership across all facets of information technology and cybersecurity. He oversees enterprise systems of record, mission-critical workflows, and statewide licensing platforms, ensuring operational integrity and compliance with federal and state mandates. With a career grounded in information security and digital transformation, Altaf holds the CISSP (Certified Information Systems Security Professional) and MCTIA (Mandiant Cyber Threat Intelligence Analysis) certifications, along with an MBA. He is deeply committed to aligning technology strategy with organizational priorities - driving innovation, resilience, and secure electronic service delivery for the public sector."
  },
  {
    name: "Marlene Dehart",
    title: "Cybersecurity Executive Leader and Advisor",
    organization: "Enterprise and Emerging Web3 and Decentralized Technologies",
    image: "/marlene_dehart_ciso_headshot.png",
    bio: "Marlene is a highly experienced cybersecurity leader with a successful career spanning over two decades. As a cybersecurity expert, Marlene helps organizations and industry influencers navigate governance, risk, compliance, and digital transformation for trusted services in the enterprise, cloud, and emerging technologies. She also proudly served in the United States Air Force Reserves where she retired from Space and Cyber Intelligence missions defending critical national assets. Marlene is a Certified Information Systems Security Professional (CISSP) and has an MSc in Blockchain and Digital Currency."
  },
  {
    name: "Greg Journey",
    title: "Chief Information Security Officer",
    organization: "MetroHealth",
    image: "/gregjourneyciso.png",
    bio: "Greg Journey serves as MetroHealth's Chief Information Security Officer, overseeing cybersecurity, physical security, and disaster recovery. He has previously worked in similar positions at other healthcare providers and at regional banks, with experience in developing and maturing security programs to manage evolving threats. Greg holds an M.S. in Information Technology, has earned CISSP and CISM certifications, and holds several vendor credentials from working previous years in consulting."
  },
  {
    name: "Jasmine Hicks",
    title: "Chief Information Security Officer",
    organization: "Gaming Sector",
    image: "/jasminehicksciso.png",
    bio: "Jasmine is a cybersecurity and business executive recognized for advancing security maturity, leading high-performing global teams, and shaping industry best practices in the gaming sector. A national speaker and mentor, she is deeply committed to strengthening security resilience and developing the next generation of cyber professionals."
  },
  {
    name: "Dana Turner",
    title: "Chief Information Security Officer",
    organization: "Union Bank & Trust",
    image: "/danturnerciso.png",
    bio: "Dana serves as Chief Information Security Officer at Union Bank & Trust, bringing 34 years of Information Technology and Security expertise to protecting financial services in an evolving threat landscape. He is one of the co-founders of Cyber Strong Nebraska, a nonprofit dedicated to strengthening state-wide cybersecurity through education and collaboration, and leads initiatives to enhance organizational incident response capabilities and operational resilience across multiple sectors."
  },
  {
    name: "Dr. Carnell A. Council II",
    title: "Chief Information Security Officer",
    organization: "Arctic Slope Regional Corporation",
    image: "/drcarnellciso.png",
    bio: "Dr. Carnell A. Council II brings over 25 years of experience in information assurance and cybersecurity, specializing in building resilient cybersecurity and risk management programs that protect organizations from evolving threats. As a seasoned executive and governance, risk, and compliance expert, he leads strategic cyber initiatives spanning risk quantification, crisis management, and business continuity. He has guided high-performing teams and influenced senior leaders to drive operational excellence, regulatory compliance, and cross-functional resilience. Backed by industry-leading certifications—including CISSP, C|CISO, CISM, CISA, CDPSE, and CMMC-AB Registered Practitioner—he is recognized for delivering data-driven, high-impact solutions. Honored with the 2021 BEYA Career Achievement Award, he continues to champion cybersecurity maturity and organizational resilience at the highest levels."
  },
  {
    name: "Ken Foster",
    title: "Chief Information Security Officer",
    organization: "Executive Cybersecurity Leader",
    image: "/kenfosterciso.png",
    bio: "Ken Foster is a Chief Information Security Officer and executive cybersecurity leader, selected as a member of the SINC Executive Council—a private, invitation-only community of elite executives who help guide the vision, voice, and programming of the SINC ecosystem. In this role, Ken serves as a trusted advisor influencing executive dialogue on strategy, innovation, and risk, while helping shape events, research, and peer engagement that strengthen executive leadership nationally and locally. He amplifies thought leadership through contributions to content and programming, and collaborates with fellow C-level leaders through curated, vendor-free forums, dinners, briefings, and closed-door roundtables. Ken is committed to building community impact—supporting mentorship, board-readiness, and a culture of trust, confidentiality, and respect—while helping define what modern executive leadership looks like."
  },
  {
    name: "Edward Marchewka",
    title: "Chief Administrative Officer",
    organization: "PryorHealth",
    image: "/edward_marchewka_ciso_headshot.png",
    bio: "Edward Marchewka, DBA, serves as Chief Administrative Officer at PryorHealth, delivering strategic leadership across IT, HR, facilities, and compliance for operations spanning four states. With over two decades of experience, including key roles at Gift of Hope and Chicago Public Schools, he leverages technology and digital transformation to drive operational excellence and robust security governance. A highly credentialed leader holding a Doctorate in Business Administration and numerous certifications, Edward is a prominent industry voice, serving on multiple advisory boards including Evanta, SecureWorld, and the CISO Executive Network."
  },
  {
    name: "Bert Talley",
    title: "Cybersecurity and Compliance Leader",
    organization: "HealthtrackRx",
    image: "/bert_talley_ciso_headshot.jpg",
    bio: "Bert Talley leads cybersecurity and compliance at HealthtrackRx, where he transforms the traditional \"office of No\" into a hub of curiosity and continuous learning. Functioning as a knowledge builder and strategic connector, he simplifies complex security concepts to spark understanding and drive meaningful action across the organization. He combines real-world experience with creative analysis, fostering a culture where diverse viewpoints and respectful debate lead to superior outcomes. Outside of his professional pursuits, he is an avid scuba and wreck diver dedicated to understanding how technology and people intersect."
  },
  {
    name: "Erik Hart",
    title: "Chief Information Security Officer",
    organization: "Cushman & Wakefield",
    image: "/eric_hart_ciso_headshot.png",
    bio: "Erik Hart is the Chief Information Security Officer at Cushman & Wakefield, where he orchestrates global cybersecurity strategy and enterprise risk management for a 52,000-person workforce. With over two decades of experience, he specializes in building scalable, business-aligned security programs that protect operations without stifling innovation. Erik is a prominent figure in the CISO community, frequently advising on cloud transformation and AI adoption while fostering collaboration among industry leaders. Beyond his executive role, he is a dedicated advocate for talent development and enjoys riding his Peloton and sipping a good bourbon."
  },
  {
    name: "Bradley J. Schaufenbuel",
    title: "Chief Information Security Officer",
    organization: "Paychex",
    image: "/brad_schaufenbuel.png",
    bio: "Bradley J. Schaufenbuel is currently Vice President and Chief Information Security Officer at Paychex. He has over 29 years of experience in the information security field at companies in the financial services and technology verticals, has written numerous books and professional journal articles, possesses an MBA, a JD, and an LLM, maintains over two dozen professional certifications, serves as an advisor to multiple venture capital firms and cybersecurity startups, and regularly speaks at industry conferences."
  },
  {
    name: "John Opala, PhD",
    title: "Chief Information Security Officer",
    organization: "Fortune 500 Manufacturing & Consumer Goods",
    image: "/john_opala.png",
    bio: "John Opala, PhD, is a senior global technology and cybersecurity executive with over two decades of experience leading enterprise-scale transformation across Fortune 500 manufacturing, retail, and consumer goods organizations. He currently serves as Vice President of IT Infrastructure and Global Chief Information Security Officer, aligning cybersecurity and infrastructure strategy with business growth and P&L objectives. Dr. Opala is recognized for modernizing complex environments, building high-performing global teams, and delivering measurable outcomes in cost optimization, risk reduction, and regulatory confidence. He is a trusted advisor to executive leadership and boards, known for translating complex cyber risk into clear, business-relevant insight. Dr. Opala is also an active leader in the cybersecurity community and a strong advocate for education, digital inclusion, and mentorship."
  }
];

function CouncilMemberCard({ member }: { member: CouncilMember }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300">
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-teal-500/30">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
          <p className="text-teal-400 font-semibold mb-1">{member.title}</p>
          <p className="text-slate-400">{member.organization}</p>
        </div>

        <div className="relative">
          <div className={`text-slate-300 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {member.bio}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
          >
            {isExpanded ? (
              <>
                <span>Read Less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CouncilSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-teal-400" />
            <div className="text-xs font-mono text-teal-400 tracking-wider uppercase">
              Leadership Council
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Executive Council Members
          </h2>
          <p className="text-xl text-teal-400 font-semibold mb-4">
            The Sentinel Guild
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Industry leaders guiding the future of cybersecurity through shared experience and strategic insight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <CouncilMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
