import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#f5f5f5] antialiased overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="relative z-10">
        <About />
        <div className="section-divider max-w-7xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-7xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-7xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-7xl mx-auto" />
        <Education />
        <Contact />

        <footer className="py-10 text-center text-white/20 text-xs border-t border-white/[0.06] tracking-widest uppercase font-medium">
          <p>
            Built with Next.js & Tailwind CSS ·{' '}
            <span className="text-[#3DDC84]">©{new Date().getFullYear()}</span> Vaibhav Pandey
          </p>
        </footer>
      </div>
    </main>
  );
}
