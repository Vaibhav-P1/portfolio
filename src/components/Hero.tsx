'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaArrowDown } from 'react-icons/fa';
import { SiKotlin, SiAndroid, SiJetpackcompose } from 'react-icons/si';

const roles = [
  'Android Developer',
  'Kotlin Enthusiast',
  'Jetpack Compose Builder',
  'Mobile Experience Crafter',
];

const techBadges = [
  { icon: <SiKotlin size={14} className="text-[#7F52FF]" />, label: 'Kotlin' },
  { icon: <SiAndroid size={14} className="text-[#137333]" />, label: 'Android' },
  { icon: <SiJetpackcompose size={14} className="text-[#4285F4]" />, label: 'Jetpack Compose' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-24 pb-16 w-full">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Top label / status badges */}
          <div className="flex items-center gap-3 mb-8 overflow-x-auto scrollbar-hide pb-1">
            <div className="flex items-center gap-2 chip chip-green shrink-0 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#137333] animate-pulse" />
              Available for Opportunities
            </div>
            {techBadges.map((b) => (
              <div key={b.label} className="chip shrink-0 flex bg-white border border-zinc-200/90 text-zinc-700 shadow-2xs">
                {b.icon} {b.label}
              </div>
            ))}
          </div>

          {/* Main headline */}
          <div className="mb-4">
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black text-zinc-950 leading-[0.9] tracking-tighter">
              Vaibhav
            </h1>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.9] tracking-tighter text-[#137333]">
              Pandey
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-8 h-10">
            <span className="text-xl md:text-2xl font-light text-zinc-500">I am</span>
            <span className="text-xl md:text-2xl font-semibold text-zinc-900">
              {displayed}
              <span className="animate-blink text-[#137333]">|</span>
            </span>
          </div>

          {/* Brief tagline */}
          <p className="text-base md:text-lg text-zinc-600 font-normal max-w-2xl leading-relaxed mb-10">
            B.Tech CSE @ VIT Bhopal (CGPA 9.32). Specializing in Kotlin, Jetpack Compose, and clean architecture to craft performant Android experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#137333] text-white font-semibold rounded-xl text-sm hover:bg-[#0f5c29] transition-all duration-200 hover:scale-[1.01] active:scale-100 shadow-sm"
            >
              View my projects
              <FaArrowDown className="rotate-[-45deg]" size={12} />
            </a>
            <a
              href="https://github.com/Vaibhav-P1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-zinc-300 rounded-xl text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200 shadow-2xs"
            >
              <FaGithub size={16} /> GitHub Profile
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-white border border-zinc-200/90 rounded-2xl shadow-xs divide-y sm:divide-y-0 sm:divide-x divide-zinc-100 overflow-hidden max-w-3xl">
            {[
              { value: '5', label: 'Android Projects', sub: 'shipped' },
              { value: '300+', label: 'DSA Problems', sub: 'LeetCode & CF' },
              { value: '9.32', label: 'CGPA', sub: 'VIT Bhopal' },
              { value: 'Top 20', label: 'Hackathon Rank', sub: 'Dawn of Code' },
            ].map((s, i) => (
              <div key={i} className="bg-white px-5 py-5 flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight">{s.value}</span>
                <span className="text-zinc-700 text-xs font-semibold uppercase tracking-wide">{s.label}</span>
                <span className="text-zinc-400 text-[10px] uppercase tracking-widest font-medium">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 animate-bounce">
        <FaArrowDown size={12} />
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
      </div>
    </section>
  );
}
