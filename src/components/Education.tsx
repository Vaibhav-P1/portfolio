import React from 'react';
import { FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ Education</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Academic{' '}
          <span className="gradient-text">Foundation</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* VIT Bhopal — primary card */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 border-l-2 border-[#3DDC84] transition-all duration-300 hover:-translate-y-1 hover:glow-green">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#3DDC84]/10 flex items-center justify-center shrink-0">
              <FaGraduationCap className="text-[#3DDC84] text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                <div>
                  <h3 className="text-white font-bold text-xl">VIT Bhopal University</h3>
                  <p className="text-white/50 text-sm mt-0.5">Bhopal, Madhya Pradesh, India</p>
                </div>
                <span className="chip chip-green shrink-0">2024 – Present</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="sm:col-span-2">
              <p className="text-white font-semibold">B.Tech in Computer Science and Engineering</p>
              <p className="text-white/50 text-sm mt-1">November 2024 – Present</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-[#3DDC84]">9.18</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">CGPA / 10.0</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOPs'].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>

        {/* Schooling */}
        <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center shrink-0">
              <FaGraduationCap className="text-[#9d95ff] text-lg" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base">School Education</h3>
              <p className="text-white/50 text-xs mt-0.5">Prayagraj, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b border-white/5 pb-4">
              <p className="text-white/80 font-semibold text-sm">CBSE Class 12th</p>
              <p className="text-white/50 text-xs mt-1">SARJ School, Prayagraj — 2022</p>
              <p className="text-[#9d95ff] font-bold mt-2">First Division with Distinction</p>
            </div>
            <div>
              <p className="text-white/80 font-semibold text-sm">ICSE Class 10th</p>
              <p className="text-white/50 text-xs mt-1">St. John&apos;s Co-Ed School, Prayagraj — 2020</p>
              <p className="text-[#9d95ff] font-bold mt-2">92%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements row */}
      <div className="mt-6">
        <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">/ Achievements & Extracurriculars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <FaTrophy className="text-yellow-400" />,
              title: 'Dawn of Code Hackathon',
              desc: "Ranked among the Top 20 teams at VIT Bhopal's prestigious hackathon.",
              color: 'border-yellow-500/20',
            },
            {
              icon: <FaTrophy className="text-[#3DDC84]" />,
              title: 'Smart India Hackathon',
              desc: 'Shortlisted with team after qualifying internal hackathon — among 45 out of 950 teams.',
              color: 'border-[#3DDC84]/20',
            },
            {
              icon: <FaCode className="text-[#9d95ff]" />,
              title: '220+ DSA Problems',
              desc: 'Solved on LeetCode, Codeforces, CodeChef, and GeeksforGeeks combined.',
              color: 'border-[#9d95ff]/20',
            },
          ].map((a, i) => (
            <div key={i} className={`glass-card rounded-2xl p-5 border ${a.color} transition-all duration-300 hover:-translate-y-1`}>
              <div className="text-2xl mb-3">{a.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-2">{a.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
