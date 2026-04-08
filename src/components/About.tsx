import React from 'react';
import { FaCode, FaMobile, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiKotlin, SiAndroid } from 'react-icons/si';

const stats = [
  { value: '9.18', label: 'CGPA at VIT Bhopal', color: 'text-[#3DDC84]' },
  { value: '220+', label: 'DSA Problems Solved', color: 'text-[#9d95ff]' },
  { value: 'Top 20', label: 'Dawn of Code Hackathon', color: 'text-[#3DDC84]' },
  { value: 'SIH', label: 'Smart India Hackathon', color: 'text-[#9d95ff]' },
];

const highlights = [
  { icon: <SiKotlin className="text-[#3DDC84]" />, text: 'Kotlin & Java expert' },
  { icon: <SiAndroid className="text-[#3DDC84]" />, text: 'Android-first mindset' },
  { icon: <FaBrain className="text-[#9d95ff]" />, text: 'Clean Architecture & MVVM' },
  { icon: <FaDatabase className="text-[#9d95ff]" />, text: 'Firebase & Room DB' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left — Text */}
        <div>
          <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Building apps that{' '}
            <span className="gradient-text">actually matter.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
            I'm <span className="text-white font-medium">Vaibhav Pandey</span>, an Android Developer studying B.Tech in CSE at <span className="text-white font-medium">VIT Bhopal University</span> (CGPA: 9.18/10).
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            I specialize in building high-quality Android applications with Kotlin and Jetpack Compose, focusing on clean architecture, real-time data, and offline-first performance. I'm driven by the challenge of turning complex problems into seamless mobile experiences that users love.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-white/70 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                i % 2 === 0 ? 'hover:glow-green' : 'hover:glow-purple'
              }`}
            >
              <span className={`text-4xl md:text-5xl font-black tracking-tight ${stat.color}`}>
                {stat.value}
              </span>
              <span className="text-white/50 text-xs font-medium uppercase tracking-wider mt-3 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}

          {/* Bio card spans full width */}
          <div className="col-span-2 glass-card rounded-2xl p-6 border-l-2 border-[#3DDC84]">
            <p className="text-white/60 text-sm leading-relaxed">
              <span className="text-[#3DDC84] font-semibold">Currently:</span> VIT Bhopal University — B.Tech CSE, Nov 2024–Present.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              <span className="text-white/80 font-semibold">Contact:</span>{' '}
              <a href="mailto:pandeyvaibhavdev7505@gmail.com" className="text-[#9d95ff] hover:underline">
                pandeyvaibhavdev7505@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
