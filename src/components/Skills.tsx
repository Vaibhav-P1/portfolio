import React from 'react';
import { SiKotlin, SiAndroid, SiJetpackcompose, SiFirebase, SiMysql, SiPython, SiGithub, SiTensorflow, SiPandas, SiAndroidstudio } from 'react-icons/si';
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
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Kotlin', icon: <SiKotlin className="text-[#7F52FF]" />, level: 'expert' },
      { name: 'Java', icon: <FaJava className="text-[#E76F00]" />, level: 'expert' },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 'advanced' },
      { name: 'C / C++', icon: <TbBrandCpp className="text-[#00599C]" />, level: 'advanced' },
    ],
  },
  {
    title: 'Android Stack',
    icon: <SiAndroid />,
    skills: [
      { name: 'Jetpack Compose', icon: <SiJetpackcompose className="text-[#4285F4]" />, level: 'expert' },
      { name: 'Android SDK', icon: <SiAndroid className="text-[#137333]" />, level: 'expert' },
      { name: 'Room Database', icon: <FaDatabase className="text-[#137333]" />, level: 'advanced' },
      { name: 'Retrofit', icon: <FaServer className="text-zinc-600" />, level: 'advanced' },
    ],
  },
  {
    title: 'Architecture',
    icon: <FaBrain />,
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
    skills: [
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" />, level: 'advanced' },
      { name: 'Firestore', icon: <SiFirebase className="text-[#FFA000]" />, level: 'advanced' },
      { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" />, level: 'advanced' },
      { name: 'Firebase Realtime DB', level: 'advanced' },
    ],
  },
  {
    title: 'ML & Data',
    icon: <FaBrain />,
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" />, level: 'intermediate' },
      { name: 'ML Kit', level: 'intermediate' },
      { name: 'Pandas', icon: <SiPandas className="text-[#150458]" />, level: 'intermediate' },
      { name: 'NumPy / Matplotlib', level: 'intermediate' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <FaTools />,
    skills: [
      { name: 'Git / GitHub', icon: <SiGithub className="text-zinc-800" />, level: 'expert' },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-[#3DDC84]" />, level: 'expert' },
      { name: 'Google Play Console', level: 'advanced' },
      { name: 'VS Code', level: 'advanced' },
    ],
  },
];

const levelDots = { expert: 4, advanced: 3, intermediate: 2 };

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[#137333] text-xs font-semibold tracking-[0.25em] uppercase mb-4">/ Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
          Technical <span className="text-[#137333]">Expertise</span>
        </h2>
        <p className="text-zinc-600 mt-4 max-w-xl text-base leading-relaxed">
          Built through intensive project work, open-source contributions, and competitive programming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm group"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#E6F4EA] flex items-center justify-center text-[#137333] text-base shrink-0">
                {cat.icon}
              </div>
              <h3 className="text-zinc-900 font-bold text-sm uppercase tracking-wider">{cat.title}</h3>
            </div>

            {/* Skills list */}
            <div className="space-y-3.5">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {skill.icon && <span className="text-sm shrink-0">{skill.icon}</span>}
                    <span className="text-zinc-800 text-sm font-medium">{skill.name}</span>
                  </div>
                  {/* Proficiency dots */}
                  <div className="flex gap-1.5 items-center" aria-label={`Proficiency: ${skill.level}`}>
                    {[0, 1, 2, 3].map((d) => (
                      <div
                        key={d}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          d < levelDots[skill.level] ? 'bg-[#137333]' : 'bg-zinc-200'
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
      <div className="mt-10 bg-white border border-zinc-200/90 rounded-2xl p-6 md:p-8 border-l-4 border-l-[#137333] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="shrink-0">
            <p className="text-[#137333] font-black text-3xl">300+</p>
            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-0.5">DSA Problems</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-zinc-200 shrink-0" />
          <p className="text-zinc-600 text-sm leading-relaxed">
            Solved 300+ data structures &amp; algorithms problems across <span className="text-zinc-950 font-semibold">LeetCode</span>, <span className="text-zinc-950 font-semibold">Codeforces</span>, CodeChef &amp; GeeksforGeeks. Strong foundation in arrays, trees, graphs, DP &amp; sorting algorithms.
          </p>
          <div className="flex gap-2 sm:ml-auto shrink-0">
            <a
              href="https://leetcode.com/u/Leet_Pandey"
              target="_blank"
              rel="noreferrer"
              className="chip chip-green hover:bg-[#d4edda]"
            >
              LeetCode ↗
            </a>
            <a
              href="https://codeforces.com/profile/Vaibhav_P1"
              target="_blank"
              rel="noreferrer"
              className="chip bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200"
            >
              Codeforces ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
