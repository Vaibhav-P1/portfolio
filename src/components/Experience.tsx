import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiAndroid } from 'react-icons/si';

const experiences = [
  {
    role: 'Android Club Member',
    org: 'VIT Bhopal University',
    period: '2025 – Present',
    type: 'Club',
    color: 'border-[#3DDC84]',
    dotColor: 'bg-[#3DDC84]',
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
          Where I've{' '}
          <span className="gradient-text">contributed.</span>
        </h2>
      </div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#3DDC84] via-[#3DDC84]/30 to-transparent" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            {/* Dot */}
            <div className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full ${exp.dotColor} ring-4 ring-[#0a0a0a] animate-pulse-glow`} />

            <div className={`glass-card rounded-2xl p-6 md:p-8 border-l-2 ${exp.color} transition-all duration-300 hover:-translate-y-1 hover:glow-green`}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiAndroid className="text-[#3DDC84] text-sm" />
                    <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                  </div>
                  <p className="text-white/60 font-medium">{exp.org}</p>
                </div>
                <div className="shrink-0">
                  <span className="chip chip-green">{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                    <span className="text-[#3DDC84] mt-1 shrink-0">▸</span>
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
                <a href="https://mail.google.com/mail/?view=cm&to=pandeyvaibhavdev7505@gmail.com" target="_blank" rel="noreferrer" className="text-[#3DDC84] hover:underline">Let's connect →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
