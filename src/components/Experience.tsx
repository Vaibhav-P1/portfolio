import React from 'react';
import { SiAndroid } from 'react-icons/si';
import { FaCrown } from 'react-icons/fa';

const experiences = [
  {
    role: 'Co Lead — Android Department',
    org: 'Android Club · VIT Bhopal',
    period: 'Apr 2026 – Present',
    duration: '3 mos',
    type: 'Promotion',
    color: 'border-[#3DDC84]',
    dotColor: 'bg-[#3DDC84]',
    isPromotion: true,
    highlights: [
      'Promoted to Android Co-Lead in recognition of consistent contributions, technical expertise, and leadership within the Android development community.',
      'Leading and mentoring junior Android developers, setting coding standards and reviewing pull requests across club projects.',
      'Driving technical decisions on architecture, libraries, and tooling for upcoming club-wide Android projects.',
      'Organising internal workshops and hands-on sessions on Jetpack Compose, Kotlin coroutines, and clean MVVM patterns.',
    ],
    tags: ['Leadership', 'Kotlin', 'Jetpack Compose', 'Mentoring', 'MVVM'],
  },
  {
    role: 'Android Developer',
    org: 'Android Club · VIT Bhopal',
    period: 'Sep 2025 – Mar 2026',
    duration: '7 mos',
    type: 'Club',
    color: 'border-white/10',
    dotColor: 'bg-white/40',
    isPromotion: false,
    highlights: [
      'Actively contributed to the design and development of multiple Android applications including a Snake Game, Shopping List App, Weather App, Chatroom App, and Task Reminder App.',
      'Built apps using Kotlin, Jetpack Compose, MVVM architecture, Coroutines, and Room Database, ensuring clean, scalable, and maintainable code.',
      'Integrated Firebase Authentication and real-time features for chat-based applications, enhancing user experience.',
      'Collaborated with peers in brainstorming, debugging, and peer learning sessions, fostering a culture of knowledge-sharing.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Room DB'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Where I&apos;ve{' '}
          <span className="gradient-text">contributed.</span>
        </h2>
      </div>

      {/* Organisation header */}
      <div className="flex items-center gap-4 mb-8 glass-card rounded-2xl px-6 py-4 border border-[#3DDC84]/20">
        <div className="w-12 h-12 rounded-xl bg-[#3DDC84]/10 flex items-center justify-center shrink-0">
          <SiAndroid className="text-[#3DDC84] text-2xl" />
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-tight">Android Club · VIT Bhopal</p>
          <p className="text-white/40 text-xs mt-0.5 uppercase tracking-widest">Full-time &nbsp;·&nbsp; Sep 2025 – Present &nbsp;·&nbsp; Bhopal, India</p>
        </div>
        <div className="ml-auto shrink-0 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3DDC84]/10 border border-[#3DDC84]/30">
          <FaCrown size={11} className="text-[#3DDC84]" />
          <span className="text-[#3DDC84] text-[11px] font-semibold uppercase tracking-wide">Promoted</span>
        </div>
      </div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#3DDC84] via-[#3DDC84]/30 to-transparent" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* Dot */}
            <div className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full ${exp.dotColor} ring-4 ring-[#0a0a0a] ${exp.isPromotion ? 'animate-pulse-glow' : ''}`} />

            <div className={`glass-card rounded-2xl p-6 md:p-8 border-l-2 ${exp.color} transition-all duration-300 hover:-translate-y-1 ${exp.isPromotion ? 'hover:glow-green' : ''}`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {exp.isPromotion ? (
                      <FaCrown className="text-[#3DDC84] text-sm shrink-0" />
                    ) : (
                      <SiAndroid className="text-white/40 text-sm shrink-0" />
                    )}
                    <h3 className={`font-bold text-xl ${exp.isPromotion ? 'text-white' : 'text-white/70'}`}>
                      {exp.role}
                    </h3>
                    {exp.isPromotion && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#3DDC84]/15 text-[#3DDC84] border border-[#3DDC84]/30">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 font-medium text-sm">{exp.org}</p>
                </div>
                <div className="shrink-0 flex flex-col items-start sm:items-end gap-1">
                  <span className={`chip ${exp.isPromotion ? 'chip-green' : ''}`}>{exp.period}</span>
                  <span className="text-white/30 text-[11px] tracking-wide">{exp.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                    <span className={`mt-1 shrink-0 ${exp.isPromotion ? 'text-[#3DDC84]' : 'text-white/30'}`}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Seeking opportunities callout */}
        <div className="relative mt-8">
          <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-white/20 ring-4 ring-[#0a0a0a]" />
          <div className="glass-card rounded-2xl p-6 border border-dashed border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3DDC84]/10 flex items-center justify-center shrink-0">
              <span className="text-[#3DDC84] text-lg">?</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Next opportunity</p>
              <p className="text-white/50 text-sm mt-0.5">
                Open to internships and junior Android developer roles.{' '}
                <a href="https://mail.google.com/mail/?view=cm&to=pandeyvaibhavdev7505@gmail.com" target="_blank" rel="noreferrer" className="text-[#3DDC84] hover:underline">Let&apos;s connect →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
