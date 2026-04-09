import React from 'react';
import { SiKotlin, SiAndroid, SiJetpackcompose, SiFirebase, SiMysql, SiPython, SiGit, SiGithub, SiTensorflow, SiPandas, SiAndroidstudio } from 'react-icons/si';
import { FaJava, FaCode, FaServer, FaDatabase, FaBrain, FaTools } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';

type Skill = {
  name: string;
  icon?: React.ReactNode;
  level: 'expert' | 'advanced' | 'intermediate';
};

type Category = {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: 'Languages',
    icon: <FaCode />,
    color: 'text-[#3DDC84]',
    skills: [
      { name: 'Kotlin', icon: <SiKotlin />, level: 'expert' },
      { name: 'Java', icon: <FaJava />, level: 'expert' },
      { name: 'Python', icon: <SiPython />, level: 'advanced' },
      { name: 'C / C++', icon: <TbBrandCpp />, level: 'advanced' },
    ],
  },
  {
    title: 'Android Stack',
    icon: <SiAndroid />,
    color: 'text-[#3DDC84]',
    skills: [
      { name: 'Jetpack Compose', icon: <SiJetpackcompose />, level: 'expert' },
      { name: 'Android SDK', icon: <SiAndroid />, level: 'expert' },
      { name: 'Room Database', icon: <FaDatabase />, level: 'advanced' },
      { name: 'Retrofit', icon: <FaServer />, level: 'advanced' },
    ],
  },
  {
    title: 'Architecture',
    icon: <FaBrain />,
    color: 'text-[#9d95ff]',
    skills: [
      { name: 'MVVM', level: 'expert' },
      { name: 'Clean Architecture', level: 'advanced' },
      { name: 'Coroutines / Flow', level: 'advanced' },
      { name: 'REST APIs / JSON', level: 'expert' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <FaDatabase />,
    color: 'text-[#9d95ff]',
    skills: [
      { name: 'Firebase', icon: <SiFirebase />, level: 'advanced' },
      { name: 'Firestore', icon: <SiFirebase />, level: 'advanced' },
      { name: 'MySQL', icon: <SiMysql />, level: 'advanced' },
      { name: 'Firebase Realtime DB', level: 'advanced' },
    ],
  },
  {
    title: 'ML & Data',
    icon: <FaBrain />,
    color: 'text-[#6C63FF]',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 'intermediate' },
      { name: 'ML Kit', level: 'intermediate' },
      { name: 'Pandas', icon: <SiPandas />, level: 'intermediate' },
      { name: 'NumPy / Matplotlib', level: 'intermediate' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <FaTools />,
    color: 'text-[#3DDC84]',
    skills: [
      { name: 'Git / GitHub', icon: <SiGithub />, level: 'expert' },
      { name: 'Android Studio', icon: <SiAndroidstudio />, level: 'expert' },
      { name: 'VS Code', level: 'advanced' },
      { name: 'Agile / Scrum', level: 'advanced' },
    ],
  },
];

const levelDots = { expert: 4, advanced: 3, intermediate: 2 };
const levelColors = { expert: 'bg-[#3DDC84]', advanced: 'bg-[#9d95ff]', intermediate: 'bg-white/30' };

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#3DDC84] text-xs font-semibold tracking-[0.3em] uppercase mb-4">/ Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Technical{' '}
          <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-xl text-base leading-relaxed">
          Built through intensive project work, open-source contributions, and competitive programming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-green group">
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`text-xl ${cat.color}`}>{cat.icon}</div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{cat.title}</h3>
            </div>

            {/* Skills list */}
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {skill.icon && <span className="text-white/40 text-sm">{skill.icon}</span>}
                    <span className="text-white/75 text-sm font-medium">{skill.name}</span>
                  </div>
                  {/* Proficiency dots */}
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map((d) => (
                      <div
                        key={d}
                        className={`w-1.5 h-1.5 rounded-full ${
                          d < levelDots[skill.level] ? levelColors[skill.level] : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DSA note */}
      <div className="mt-10 glass-card rounded-2xl p-6 border-l-2 border-[#3DDC84]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="shrink-0">
            <p className="text-[#3DDC84] font-bold text-2xl">220+</p>
            <p className="text-white/50 text-xs uppercase tracking-wider mt-1">DSA Problems</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10 shrink-0" />
          <p className="text-white/60 text-sm leading-relaxed">
            Solved 220+ data structures &amp; algorithms problems across <span className="text-white font-medium">LeetCode</span>, <span className="text-white font-medium">Codeforces</span>, CodeChef &amp; GeeksforGeeks. Strong foundation in arrays, trees, graphs, DP &amp; sorting algorithms.
          </p>
          <div className="flex gap-2 sm:ml-auto shrink-0">
            <a href="https://leetcode.com/u/Leet_Pandey" target="_blank" rel="noreferrer" className="chip chip-green">LeetCode ↗</a>
            <a href="https://codeforces.com/profile/Vaibhav_P1" target="_blank" rel="noreferrer" className="chip chip-purple">Codeforces ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
