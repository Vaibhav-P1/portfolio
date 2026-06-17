'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaArrowDown } from 'react-icons/fa';
import { SiKotlin, SiAndroid, SiJetpackcompose } from 'react-icons/si';

const roles = [
  'Android Developer',
  'Kotlin Enthusiast',
  'Jetpack Compose Builder',
  'Mobile Experience Crafter',
];

const techBadges = [
  { icon: <SiKotlin size={14} />, label: 'Kotlin' },
  { icon: <SiAndroid size={14} />, label: 'Android' },
  { icon: <SiJetpackcompose size={14} />, label: 'Jetpack Compose' },
];

const photos = [
  { src: '/photo.jpeg', label: 'Vaibhav Pandey' },
  { src: '/avatar.jpeg', label: 'Avatar' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoVisible, setPhotoVisible] = useState(true);

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
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // Photo carousel auto-switch every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoVisible(false);
      setTimeout(() => {
        setPhotoIndex((prev) => (prev + 1) % photos.length);
        setPhotoVisible(true);
      }, 500); // wait for fade-out before switching
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-24 pb-16 w-full">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,220,132,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,220,132,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3DDC84] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#6C63FF] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0">
            {/* Top label */}
            <div className="flex items-center gap-3 mb-8 overflow-x-auto scrollbar-hide pb-1">
              <div className="flex items-center gap-2 chip chip-green shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-pulse" />
                Available for Opportunities
              </div>
              {techBadges.map((b) => (
                <div key={b.label} className="chip shrink-0 flex">
                  {b.icon} {b.label}
                </div>
              ))}
            </div>

            {/* Main headline */}
            <div className="mb-4">
              <h1 className="text-[clamp(3rem,10vw,8rem)] font-black text-white leading-[0.9] tracking-tighter">
                Vaibhav
              </h1>
              <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter gradient-text">
                Pandey
              </h1>
            </div>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-10 h-10">
              <span className="text-xl md:text-2xl font-light text-white/50">I am</span>
              <span className="text-xl md:text-2xl font-semibold text-white/90">
                {displayed}
                <span className="animate-blink text-[#3DDC84]">|</span>
              </span>
            </div>

            {/* Brief tagline */}
            <p className="text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed mb-12">
              B.Tech CSE @ VIT Bhopal (CGPA 9.29). Specializing in Kotlin, Jetpack Compose, and clean architecture to craft performant Android experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-20">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3DDC84] text-[#0a0a0a] font-semibold rounded-xl text-sm hover:bg-[#2fc974] transition-all duration-200 hover:scale-[1.02] active:scale-100"
              >
                View my projects
                <FaArrowDown className="rotate-[-45deg]" size={12} />
              </a>
              <a
                href="https://github.com/Vaibhav-P1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 glass-card rounded-xl text-sm font-semibold text-white/80 hover:text-white transition-all duration-200 hover:scale-[1.02]"
              >
                <FaGithub size={16} /> GitHub Profile
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {[
                { value: '5', label: 'Android Projects', sub: 'shipped' },
                { value: '220+', label: 'DSA Problems', sub: 'LeetCode & CF' },
                { value: '9.29', label: 'CGPA', sub: 'VIT Bhopal' },
                { value: 'Top 20', label: 'Hackathon Rank', sub: 'Dawn of Code' },
              ].map((s, i) => (
                <div key={i} className="bg-[#0a0a0a] px-5 py-5 flex flex-col gap-1">
                  <span className="text-2xl MD:text-3xl font-black text-white tracking-tight">{s.value}</span>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wide">{s.label}</span>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Photo Carousel ── */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 mt-0">
            {/* Outer decorative ring */}
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">

              {/* Spinning dashed border ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#3DDC84]/30 animate-spin"
                style={{ animationDuration: '12s' }}
              />

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3DDC84]/10 via-transparent to-[#6C63FF]/10 blur-sm" />

              {/* Static solid ring */}
              <div className="absolute inset-[6px] rounded-full border border-[#3DDC84]/20" />

              {/* Photo container */}
              <div className="absolute inset-[12px] rounded-full overflow-hidden bg-[#111]">
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/20 to-[#6C63FF]/10 z-0" />

                {/* Photos — fade transition */}
                {photos.map((photo, idx) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.label}
                    fill
                    className="object-cover rounded-full z-10 transition-opacity duration-500"
                    style={{
                      opacity: idx === photoIndex ? (photoVisible ? 1 : 0) : 0,
                    }}
                    priority={idx === 0}
                  />
                ))}
              </div>

              {/* Small dot indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPhotoVisible(false);
                      setTimeout(() => {
                        setPhotoIndex(idx);
                        setPhotoVisible(true);
                      }, 300);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === photoIndex
                        ? 'bg-[#3DDC84] w-4'
                        : 'bg-white/20'
                    }`}
                    aria-label={`Show photo ${idx + 1}`}
                  />
                ))}
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce">
        <FaArrowDown size={12} />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
