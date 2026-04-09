import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiAndroid } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  tags: string[];
  status: 'Live' | 'Beta' | 'Completed' | 'Archived';
  statusColor: string;
  placeholderText: string;
  placeholderGlow: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    index: '01',
    title: 'Chatroom App',
    subtitle: 'Real-Time Messaging',
    description: 'A production-grade real-time messaging application with secure email/password authentication, synchronous chat, and a clean Compose-first UI.',
    achievements: [
      'Firebase Authentication — secure login & signup flow.',
      'Real-time messaging via Firebase Realtime Database with sub-100ms latency.',
      'Responsive Jetpack Compose UI with smooth Navigation transitions.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Realtime DB'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'FIREBASE_CONNECTED',
    placeholderGlow: 'from-orange-900/25',
    githubUrl: 'https://github.com/Vaibhav-P1/Whisp-Chatroom',
  },
  {
    index: '02',
    title: 'Weather App',
    subtitle: 'Live Meteorological Data',
    description: 'A dynamic weather application fetching live atmospheric data via OpenWeather API, featuring location-based queries, dynamic UI updates, and offline caching.',
    achievements: [
      'Integrated REST APIs using Retrofit with clean network layer abstraction.',
      'Location-based weather search with dynamic background UI updates.',
      'Offline caching & error handling for reliable UX in poor connectivity.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'REST API', 'OpenWeather'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'WEATHER_STREAM_ACTIVE',
    placeholderGlow: 'from-blue-900/25',
    githubUrl: 'https://github.com/Vaibhav-P1/WeatherApp',
  },
  {
    index: '03',
    title: 'Task Reminder App',
    subtitle: 'Offline-First Task Manager',
    description: 'A sophisticated MVVM-architected task management platform with full add/edit/delete lifecycles, local Room DB persistence, and async Coroutine operations.',
    achievements: [
      'Full MVVM architecture with ViewModel & LiveData separation.',
      'Room Database with offline-first local persistence.',
      'Kotlin Coroutines for smooth, non-blocking async operations.',
    ],
    tags: ['Kotlin', 'MVVM', 'Room DB', 'Coroutines', 'Jetpack Compose'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'LOCAL_PERSISTENCE',
    placeholderGlow: 'from-amber-900/25',
    githubUrl: 'https://github.com/Vaibhav-P1/TaskReminder',
  },
  {
    index: '04',
    title: 'Rakshak — Women Safety App',
    subtitle: 'AI-Powered Safety Platform',
    description: 'An offline-first women safety app with one-tap SOS, voice trigger activation, GPS tracking, and Android 14 foreground service compliance — built for real emergencies.',
    achievements: [
      'One-tap SOS sending SMS + live location to emergency contacts instantly.',
      'Voice trigger ("Help Rakshak") & volume key SOS via SpeechRecognizer & AccessibilityService.',
      'Home screen widget for instant emergency access without unlocking the phone.',
      'FusedLocationProviderClient for accurate GPS tracking with fallback handling.',
      'Android 14 foreground service compliance for reliable background execution.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'SpeechRecognizer', 'FusedLocation', 'AccessibilityService'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'SOS_ACTIVE',
    placeholderGlow: 'from-red-900/25',
    githubUrl: 'https://github.com/Vaibhav-P1/Rakshak-AI',
  },
  {
    index: '05',
    title: 'Campus Course Record Manager',
    subtitle: 'CLI Academic System',
    description: 'A high-throughput CLI academic management system handling student records, course catalog, enrollment, grading and GPA computation using Java and MySQL.',
    achievements: [
      'CRUD operations for student, course, and enrollment management.',
      'GPA calculation engine with relational database queries.',
      'Enrollment tracking and grade management via normalized MySQL schema.',
    ],
    tags: ['Java', 'MySQL', 'CLI', 'JDBC', 'DBMS'],
    status: 'Archived',
    statusColor: 'chip',
    placeholderText: 'CLI_MANAGER_ONLINE',
    placeholderGlow: 'from-cyan-900/25',
    githubUrl: 'https://github.com/Vaibhav-P1/CCRM-Vb',
  },
];

function PhoneMockup({ placeholderText, glow }: { placeholderText: string; glow: string }) {
  return (
    <div className="relative max-w-[240px] mx-auto">
      {/* Phone shell */}
      <div className="relative bg-[#111] rounded-[2.5rem] border-2 border-white/10 overflow-hidden shadow-2xl aspect-[9/19]">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-10" />
        {/* Screen content */}
        <div className={`absolute inset-0 bg-gradient-to-b ${glow} via-[#0d0d0d] to-[#0d0d0d]`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/20 font-mono text-[9px] tracking-widest text-center px-4">
              {placeholderText}
            </p>
          </div>
          {/* Fake status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-5 pb-1">
            <span className="text-white/20 text-[8px] font-mono">9:41</span>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-white/20 rounded-sm" />
              <div className="w-1 h-1 bg-white/20 rounded-sm" />
              <div className="w-1.5 h-1 bg-[#3DDC84]/40 rounded-sm" />
            </div>
          </div>
          {/* Fake app UI skeleton */}
          <div className="absolute top-16 left-4 right-4 space-y-2">
            <div className="h-2 bg-white/5 rounded-full w-1/2" />
            <div className="h-16 bg-white/[0.03] rounded-xl border border-white/5" />
            <div className="h-16 bg-white/[0.03] rounded-xl border border-white/5" />
            <div className="h-2 bg-white/5 rounded-full w-3/4 mt-3" />
            <div className="h-8 bg-[#3DDC84]/10 rounded-xl border border-[#3DDC84]/10" />
          </div>
          {/* Nav bar */}
          <div className="absolute bottom-4 left-4 right-4 h-10 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center justify-around px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-[#3DDC84]/40' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
      {/* Phone glow */}
      <div className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-20 bg-[#3DDC84] -z-10" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Things I've{' '}
          <span className="gradient-text">shipped.</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-xl text-base leading-relaxed">
          Production-ready Android applications showcasing clean architecture, modern Jetpack libraries, and real-world API integrations.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((p, i) => (
          <div key={p.index} className="relative group">
            {/* Large background number — sits behind the phone mockup, opposite to text */}
            <div className={`hidden lg:block absolute -top-10 text-[10rem] font-black text-white/[0.025] leading-none pointer-events-none select-none group-hover:text-white/[0.04] transition-all duration-700 ${
              i % 2 !== 0 ? '-left-4' : 'right-0'
            }`}>
              {p.index}
            </div>

            <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text block */}
              <div className={`${i % 2 !== 0 ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'} flex flex-col justify-center`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`chip ${p.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'Completed' ? 'bg-[#3DDC84]' : p.status === 'Archived' ? 'bg-white/30' : 'bg-blue-400'}`} />
                    {p.status}
                  </span>
                  <span className="text-white/30 text-xs font-mono">{p.subtitle}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
                <p className="text-white/55 text-base leading-relaxed mb-6">{p.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-8">
                  {p.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                      <span className="text-[#3DDC84] shrink-0 mt-0.5">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>

                {/* GitHub link */}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-sm font-semibold text-white/70 hover:text-white hover:glow-green transition-all duration-200 w-max"
                >
                  <FaGithub size={16} /> View on GitHub
                </a>
              </div>

              {/* Phone mockup */}
              <div className={`${i % 2 !== 0 ? 'lg:col-start-1 lg:col-span-5' : 'lg:col-start-8 lg:col-span-5'} flex items-center justify-center py-8`}>
                <div className="animate-float">
                  <PhoneMockup placeholderText={p.placeholderText} glow={p.placeholderGlow} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

