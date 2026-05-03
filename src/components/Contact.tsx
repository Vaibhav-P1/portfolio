import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socials = [
  {
    label: 'GitHub',
    handle: '@Vaibhav-P1',
    href: 'https://github.com/Vaibhav-P1',
    icon: <FaGithub size={20} />,
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    label: 'LinkedIn',
    handle: 'Vaibhav Pandey',
    href: 'https://www.linkedin.com/in/vaibhav-pandey-351308329',
    icon: <FaLinkedin size={20} />,
    color: 'hover:border-[#0077b5]/50 hover:text-[#0077b5]',
  },
  {
    label: 'X (Twitter)',
    handle: '@VaibhavxDev',
    href: 'https://x.com/VaibhavxDev',
    icon: <FaXTwitter size={20} />,
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    label: 'LeetCode',
    handle: '@Leet_Pandey',
    href: 'https://leetcode.com/u/Leet_Pandey',
    icon: <SiLeetcode size={20} />,
    color: 'hover:border-[#FFA116]/50 hover:text-[#FFA116]',
  },
  {
    label: 'Codeforces',
    handle: '@Vaibhav_P1',
    href: 'https://codeforces.com/profile/Vaibhav_P1',
    icon: <FaCode size={20} />,
    color: 'hover:border-[#3DDC84]/50 hover:text-[#3DDC84]',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Divider */}
      <div className="section-divider mb-28" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — headline + text */}
        <div>
          <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
            Let's build{' '}
            <span className="gradient-text">together.</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
            I'm actively looking for internship and junior Android developer opportunities. Whether you have a project, a role, or just want to talk tech — my inbox is always open.
          </p>

          {/* Email CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=pandeyvaibhavdev7505@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 w-full min-w-0 px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-[#3DDC84]/40 hover:glow-green transition-all duration-300 text-white/80 hover:text-white font-medium text-sm"
          >
            <FaEnvelope className="text-[#3DDC84] shrink-0" size={18} />
            <span className="truncate">pandeyvaibhavdev7505@gmail.com</span>
            <span className="ml-auto shrink-0 text-white/30 group-hover:text-[#3DDC84] transition-colors">→</span>
          </a>

          {/* Resume download */}
          <div className="mt-6">
            <a
              href="/ResumeVaibhavPandeyMay.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3DDC84] text-[#0a0a0a] font-semibold rounded-xl text-sm hover:bg-[#2fc974] transition-all duration-200 hover:scale-[1.02] active:scale-100"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right — social links */}
        <div>
          <h3 className="text-white/40 text-xs uppercase tracking-[0.3em] font-semibold mb-6">/ Find me online</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`glass-card rounded-xl p-4 flex items-center gap-3 transition-all duration-200 text-white/50 border border-transparent ${s.color} group hover:-translate-y-0.5`}
              >
                <div className="shrink-0 transition-colors">{s.icon}</div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-inherit transition-colors">{s.label}</p>
                  <p className="text-white/30 text-xs">{s.handle}</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-inherit text-sm transition-colors">↗</span>
              </a>
            ))}
          </div>

          {/* Location + availability */}
          <div className="mt-6 glass-card rounded-2xl p-5 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
              <span className="text-white/70 text-sm">Available for work</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-white/40 text-sm">📍 India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
