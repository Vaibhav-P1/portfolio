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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAFAF9]/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-[#137333] flex items-center justify-center text-white font-black text-xs leading-none shadow-xs group-hover:scale-105 transition-transform duration-200">
              VP
            </div>
            <span className="text-sm font-semibold text-zinc-900 tracking-tight hidden sm:block">
              Vaibhav Pandey
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 hover:text-[#137333] transition-colors duration-200 font-medium tracking-wide"
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
              className="text-zinc-500 hover:text-zinc-900 transition-colors text-lg"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-pandey-351308329"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/VaibhavxDev"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors text-lg"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href="/Resume_VaibhavPandeyAD.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 text-xs font-semibold tracking-wide rounded-lg border border-zinc-300 text-zinc-800 hover:border-[#137333] hover:text-[#137333] hover:bg-[#E6F4EA] transition-all duration-200 shadow-2xs"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-700 hover:text-zinc-900 transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAFAF9]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-zinc-800 hover:text-[#137333] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center gap-6 mt-4">
          <a href="https://github.com/Vaibhav-P1" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 text-2xl" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vaibhav-pandey-351308329" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 text-2xl" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://x.com/VaibhavxDev" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 text-2xl" aria-label="X (Twitter)"><FaXTwitter /></a>
        </div>
        <a
          href="/Resume_VaibhavPandeyAD.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-2 px-6 py-3 text-sm font-semibold tracking-wide rounded-xl border border-[#137333] text-[#137333] bg-[#E6F4EA] hover:bg-[#137333] hover:text-white transition-all duration-200 shadow-xs"
        >
          Download Resume ↗
        </a>
      </div>
    </>
  );
}
