import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socials = [
  {
    label: 'GitHub',
    handle: '@Vaibhav-P1',
    href: 'https://github.com/Vaibhav-P1',
    icon: <FaGithub size={20} className="text-zinc-800" />,
  },
  {
    label: 'LinkedIn',
    handle: 'Vaibhav Pandey',
    href: 'https://www.linkedin.com/in/vaibhav-pandey-351308329',
    icon: <FaLinkedin size={20} className="text-[#0077b5]" />,
  },
  {
    label: 'X (Twitter)',
    handle: '@VaibhavxDev',
    href: 'https://x.com/VaibhavxDev',
    icon: <FaXTwitter size={20} className="text-zinc-800" />,
  },
  {
    label: 'LeetCode',
    handle: '@Leet_Pandey',
    href: 'https://leetcode.com/u/Leet_Pandey',
    icon: <SiLeetcode size={20} className="text-[#FFA116]" />,
  },
  {
    label: 'Codeforces',
    handle: '@Vaibhav_P1',
    href: 'https://codeforces.com/profile/Vaibhav_P1',
    icon: <SiCodeforces size={20} className="text-[#137333]" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-28" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — headline + text */}
        <div>
          <p className="text-[#137333] text-xs font-semibold tracking-[0.25em] uppercase mb-4">/ Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-950 leading-tight tracking-tighter mb-6">
            Let&apos;s build <span className="text-[#137333]">together.</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 font-normal">
            I&apos;m actively looking for internship and junior Android developer opportunities. Whether you have a project, a role, or just want to talk tech — my inbox is always open.
          </p>

          {/* Email CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=pandeyvaibhavdev7505@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 w-full min-w-0 px-6 py-4 rounded-2xl bg-white border border-zinc-300 hover:border-[#137333] hover:shadow-xs transition-all duration-200 text-zinc-800 hover:text-[#137333] font-medium text-sm shadow-2xs"
          >
            <FaEnvelope className="text-[#137333] shrink-0" size={18} />
            <span className="truncate">pandeyvaibhavdev7505@gmail.com</span>
            <span className="ml-auto shrink-0 text-zinc-400 group-hover:text-[#137333] transition-colors">→</span>
          </a>

          {/* Resume download */}
          <div className="mt-6">
            <a
              href="/Resume_VaibhavPandeyAD.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#137333] text-white font-semibold rounded-xl text-sm hover:bg-[#0f5c29] transition-all duration-200 hover:scale-[1.01] active:scale-100 shadow-sm"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right — social links */}
        <div>
          <h3 className="text-zinc-500 text-xs uppercase tracking-[0.25em] font-semibold mb-6">/ Find me online</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-zinc-200/90 rounded-xl p-4 flex items-center gap-3 transition-all duration-200 text-zinc-700 shadow-2xs hover:border-zinc-300 hover:shadow-sm hover:-translate-y-0.5 group"
              >
                <div className="shrink-0 transition-transform group-hover:scale-110 duration-200">{s.icon}</div>
                <div>
                  <p className="text-zinc-900 font-semibold text-sm group-hover:text-[#137333] transition-colors">
                    {s.label}
                  </p>
                  <p className="text-zinc-500 text-xs">{s.handle}</p>
                </div>
                <span className="ml-auto text-zinc-400 group-hover:text-[#137333] text-sm transition-colors">↗</span>
              </a>
            ))}
          </div>

          {/* Location + availability */}
          <div className="mt-6 bg-white border border-zinc-200/90 rounded-2xl p-5 flex items-center gap-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#137333] animate-pulse" />
              <span className="text-zinc-800 text-sm font-medium">Available for work</span>
            </div>
            <div className="w-px h-4 bg-zinc-200" />
            <span className="text-zinc-500 text-sm">📍 India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
