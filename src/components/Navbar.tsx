'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#3DDC84] flex items-center justify-center text-[#0a0a0a] font-black text-xs leading-none group-hover:scale-110 transition-transform duration-200">
              VP
            </div>
            <span className="text-sm font-semibold text-white/90 tracking-wide hidden sm:block">
              Vaibhav Pandey
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-[#3DDC84] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Vaibhav-P1"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors text-lg"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-pandey-351308329"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/VaibhavxDev"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors text-lg"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="/ResumeVaibhavPandeyMay.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 text-xs font-semibold tracking-wide rounded-lg border border-[#3DDC84]/50 text-[#3DDC84] hover:bg-[#3DDC84] hover:text-[#0a0a0a] transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-medium text-white/70 hover:text-[#3DDC84] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center gap-6 mt-4">
          <a href="https://github.com/Vaibhav-P1" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vaibhav-pandey-351308329" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-2xl"><FaLinkedin /></a>
          <a href="https://x.com/VaibhavxDev" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white text-2xl" aria-label="X (Twitter)"><FaXTwitter /></a>
        </div>
        <a
          href="/ResumeVaibhavPandeyMay.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-2 px-6 py-3 text-sm font-semibold tracking-wide rounded-xl border border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84] hover:text-[#0a0a0a] transition-all duration-200"
        >
          Download Resume ↗
        </a>
      </div>
    </>
  );
}

