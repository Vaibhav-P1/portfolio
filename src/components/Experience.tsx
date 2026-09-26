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
        <p className="text-[#137333] text-xs font-semibold tracking-[0.25em] uppercase mb-4">/ Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
          Where I&apos;ve <span className="text-[#137333]">contributed.</span>
        </h2>
      </div>

      {/* Organisation header */}
      <div className="flex items-center gap-4 mb-8 bg-white border border-zinc-200/90 rounded-2xl px-6 py-4 shadow-xs">
        <div className="w-12 h-12 rounded-xl bg-[#E6F4EA] flex items-center justify-center shrink-0">
          <SiAndroid className="text-[#137333] text-2xl" />
        </div>
        <div>
          <p className="text-zinc-900 font-bold text-lg leading-tight">Android Club · VIT Bhopal</p>
          <p className="text-zinc-500 text-xs mt-0.5 uppercase tracking-wider font-medium">
            Full-time &nbsp;·&nbsp; Sep 2025 – Present &nbsp;·&nbsp; Bhopal, India
          </p>
        </div>
        <div className="ml-auto shrink-0 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F4EA] border border-[#CEEAD6]">
          <FaCrown size={11} className="text-[#137333]" />
          <span className="text-[#137333] text-[11px] font-semibold uppercase tracking-wide">Promoted</span>
        </div>
      </div>

      <div className="relative pl-8">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#137333] via-zinc-200 to-transparent" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* Dot */}
            <div
              className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full ${
                exp.isPromotion ? 'bg-[#137333]' : 'bg-zinc-300'
              } ring-4 ring-[#FAFAF9]`}
            />

            <div
              className={`bg-white border border-zinc-200/90 rounded-2xl p-6 md:p-8 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm ${
                exp.isPromotion ? 'border-l-4 border-l-[#137333]' : ''
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {exp.isPromotion ? (
                      <FaCrown className="text-[#137333] text-sm shrink-0" />
                    ) : (
                      <SiAndroid className="text-zinc-400 text-sm shrink-0" />
                    )}
                    <h3 className="font-bold text-xl text-zinc-900">
                      {exp.role}
                    </h3>
                    {exp.isPromotion && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 font-medium text-sm">{exp.org}</p>
                </div>
                <div className="shrink-0 flex flex-col items-start sm:items-end gap-1">
                  <span className={`chip ${exp.isPromotion ? 'chip-green' : 'bg-zinc-100 text-zinc-700 border-zinc-200'}`}>
                    {exp.period}
                  </span>
                  <span className="text-zinc-400 text-[11px] font-medium tracking-wide">{exp.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-zinc-700 text-sm leading-relaxed">
                    <span className={`mt-0.5 shrink-0 ${exp.isPromotion ? 'text-[#137333] font-bold' : 'text-zinc-400'}`}>
                      ▸
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="chip bg-zinc-100 text-zinc-700 border-zinc-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Seeking opportunities callout */}
        <div className="relative mt-8">
          <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-[#FAFAF9]" />
          <div className="bg-white border border-dashed border-zinc-300 rounded-2xl p-6 flex items-center gap-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] flex items-center justify-center shrink-0">
              <span className="text-[#137333] text-lg font-bold">?</span>
            </div>
            <div>
              <p className="text-zinc-900 font-semibold text-sm">Next opportunity</p>
              <p className="text-zinc-600 text-sm mt-0.5">
                Open to internships and junior Android developer roles.{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&to=pandeyvaibhavdev7505@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#137333] font-medium hover:underline"
                >
                  Let&apos;s connect →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
