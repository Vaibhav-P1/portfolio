import React from 'react';
import { FaGithub } from 'react-icons/fa';

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
  accentColor: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    index: '01',
    title: 'Zenith — Focus & Productivity App',
    subtitle: 'Focus Tracker & Analytics (2026)',
    description: 'A dark-themed focus tracker built with Clean Architecture, Jetpack Compose, and Hilt, featuring 3-tab productivity analytics and real-time leaderboards.',
    achievements: [
      'Built a dark-themed focus tracker using Clean Architecture (MVVM), Jetpack Compose, Hilt, and StateFlow.',
      'Implemented Room Database with schema migrations and DataStore to generate 3-tab productivity analytics (Daily/Weekly/Monthly) and GitHub-style activity heatmaps.',
      'Added Canvas animations, Focus Mode, Foreground Services, and real-time Firebase Firestore leaderboards.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Hilt', 'Firebase', 'DataStore'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'FOCUS_SESSION_ACTIVE',
    accentColor: '#137333',
    githubUrl: 'https://github.com/Vaibhav-P1/Zenith',
  },
  {
    index: '02',
    title: 'Shop – E-Com App',
    subtitle: 'Native Android E-Commerce (2026)',
    description: 'A complete native Android e-commerce application with seamless authentication, real-time Firestore synchronization, and Razorpay payment processing.',
    achievements: [
      'Developed a native Android e-commerce app with authentication, product catalog, cart, and wishlist.',
      'Implemented Firebase Firestore for real-time synchronization and SharedPreferences for offline persistence.',
      'Integrated Razorpay Payment Gateway using MVVM, Jetpack Compose, and Kotlin Coroutines.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Razorpay', 'Coroutines'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'PAYMENT_GATEWAY_READY',
    accentColor: '#1A73E8',
    githubUrl: 'https://github.com/Vaibhav-P1/Shopp---An-Ecom-App',
  },
  {
    index: '03',
    title: 'Rakshak — Women Safety App',
    subtitle: 'Offline-First Safety Platform (2026)',
    description: 'An offline-first women safety app with one-tap SOS, voice trigger activation, GPS tracking, and Android 14 foreground service compliance — built for real emergencies.',
    achievements: [
      'Built an offline-first safety app with one-tap SOS sending SMS + live location.',
      'Implemented voice trigger ("Help Rakshak") and volume key SOS using SpeechRecognizer & AccessibilityService.',
      'Designed home screen widget for instant emergency access without unlocking the phone.',
      'Integrated FusedLocationProviderClient for accurate GPS tracking with fallback handling and Android 14 foreground service compliance.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'SpeechRecognizer', 'FusedLocation', 'AccessibilityService'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'SOS_STANDBY_ACTIVE',
    accentColor: '#D93025',
    githubUrl: 'https://github.com/Vaibhav-P1/Rakshak-AI',
  },
  {
    index: '04',
    title: 'Weather App',
    subtitle: 'Live Meteorological Data (2025)',
    description: 'A dynamic weather application fetching live atmospheric data via OpenWeather API, featuring location-based queries, dynamic UI updates, and offline caching.',
    achievements: [
      'Integrated REST APIs (OpenWeather API) using Retrofit to fetch live weather data.',
      'Implemented location-based search and dynamic UI updates.',
      'Added error handling and offline caching for reliable user experience in poor connectivity.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'REST API', 'OpenWeather'],
    status: 'Completed',
    statusColor: 'chip-green',
    placeholderText: 'WEATHER_STREAM_ACTIVE',
    accentColor: '#0288D1',
    githubUrl: 'https://github.com/Vaibhav-P1/WeatherApp',
  },
  {
    index: '05',
    title: 'Whisp — Chatroom App',
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
    placeholderText: 'FIREBASE_CHAT_READY',
    accentColor: '#E65100',
    githubUrl: 'https://github.com/Vaibhav-P1/Whisp-Chatroom',
  },
];

function AndroidDeviceMockup({ placeholderText, accentColor }: { placeholderText: string; accentColor: string }) {
  return (
    <div className="relative max-w-[240px] mx-auto select-none">
      {/* Device Shell - Modern Pixel / Android style */}
      <div className="relative bg-zinc-950 rounded-[2.8rem] border-[4px] border-zinc-800/90 shadow-2xl overflow-hidden aspect-[9/19]">
        {/* Android Punch Hole Camera */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-20 ring-1 ring-zinc-800 flex items-center justify-center">
          <div className="w-1 h-1 bg-zinc-900 rounded-full" />
        </div>

        {/* Screen Content Area */}
        <div className="absolute inset-0 bg-[#0F1115] flex flex-col justify-between pt-2 pb-3 px-3">
          {/* Android Status Bar */}
          <div className="h-8 flex items-center justify-between px-3 text-[9px] font-mono text-zinc-400 z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Wi-Fi & 5G Indicators */}
              <span className="text-[8px] font-bold text-zinc-400">5G</span>
              <div className="w-2.5 h-2 border border-zinc-400 rounded-xs relative overflow-hidden">
                <div className="h-full bg-[#3DDC84] w-3/4" />
              </div>
            </div>
          </div>

          {/* App UI Wireframe / Preview */}
          <div className="flex-1 flex flex-col justify-between py-2 px-1">
            {/* Top App Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2.5 bg-zinc-700/60 rounded-full w-1/3" />
                <div className="w-4 h-4 rounded-full bg-zinc-800" />
              </div>

              {/* Compose Card 1 */}
              <div className="p-3 bg-zinc-900/90 border border-zinc-800/80 rounded-xl space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="h-2 bg-zinc-700 rounded-full w-1/2" />
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full w-4/5" />
                <div className="h-1.5 bg-zinc-800 rounded-full w-2/3" />
              </div>

              {/* Compose Card 2 */}
              <div className="p-3 bg-zinc-900/90 border border-zinc-800/80 rounded-xl space-y-2 shadow-xs">
                <div className="h-2 bg-zinc-700 rounded-full w-2/5" />
                <div className="h-7 rounded-lg bg-zinc-800/60 flex items-center justify-center">
                  <span className="text-[8px] font-mono text-zinc-500 tracking-wider">
                    {placeholderText}
                  </span>
                </div>
              </div>
            </div>

            {/* Jetpack Compose FAB or Action */}
            <div className="flex justify-end pr-2 pb-1">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>

          {/* Android Gesture Navigation Bar */}
          <div className="pt-1">
            <div className="w-20 h-1 bg-zinc-500/60 rounded-full mx-auto" />
          </div>
        </div>
      </div>

      {/* Subtle refined shadow */}
      <div className="absolute inset-x-4 -bottom-4 h-8 bg-zinc-900/10 blur-xl -z-10 rounded-full" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#137333] text-xs font-semibold tracking-[0.25em] uppercase mb-4">/ Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
          Things I&apos;ve <span className="text-[#137333]">shipped.</span>
        </h2>
        <p className="text-zinc-600 mt-4 max-w-xl text-base leading-relaxed font-normal">
          Production-ready Android applications showcasing clean architecture, modern Jetpack libraries, and real-world API integrations.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((p, i) => (
          <div key={p.index} className="relative group">
            {/* Large background number — sits behind as a subtle editorial watermark */}
            <div
              className={`hidden lg:block absolute -top-8 text-[9rem] font-black text-zinc-200/50 leading-none pointer-events-none select-none ${
                i % 2 !== 0 ? '-left-4' : 'right-0'
              }`}
            >
              {p.index}
            </div>

            <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text block */}
              <div className={`${i % 2 !== 0 ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'} flex flex-col justify-center`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`chip ${p.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                    {p.status}
                  </span>
                  <span className="text-zinc-500 text-xs font-mono font-medium">{p.subtitle}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3 tracking-tight">{p.title}</h3>
                <p className="text-zinc-600 text-base leading-relaxed mb-6 font-normal">{p.description}</p>

                {/* Achievements */}
                <ul className="space-y-2.5 mb-8">
                  {p.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3 text-zinc-700 text-sm leading-relaxed">
                      <span className="text-[#137333] font-bold shrink-0 mt-0.5">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((t) => (
                    <span key={t} className="chip bg-zinc-100 text-zinc-700 border-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-300 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200 shadow-2xs w-max"
                >
                  <FaGithub size={16} /> View on GitHub
                </a>
              </div>

              {/* Android Phone mockup */}
              <div className={`${i % 2 !== 0 ? 'lg:col-start-1 lg:col-span-5' : 'lg:col-start-8 lg:col-span-5'} flex items-center justify-center py-6`}>
                <div className="animate-float">
                  <AndroidDeviceMockup placeholderText={p.placeholderText} accentColor={p.accentColor} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
