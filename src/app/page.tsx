import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import MusicSection from '@/components/MusicSection';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import AndroidBackdrop from '@/components/AndroidBackdrop';

export default function Home() {
  return (
    <main className="bg-[#FAFAF9] min-h-screen text-[#111827] antialiased overflow-x-hidden relative">
      {/* Decorative Android Backdrop Mascot behind all content */}
      <AndroidBackdrop />

      <Navbar />
      <Hero />

      <div className="relative z-10">
        <About />
        <div className="section-divider max-w-7xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-7xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-7xl mx-auto" />
        <MusicSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-7xl mx-auto" />
        <Education />
        <Contact />

        <footer className="py-12 text-center text-zinc-500 text-xs border-t border-zinc-200/80 tracking-wider uppercase font-medium">
          <p>
            Built with Next.js &amp; Tailwind CSS ·{' '}
            <span className="text-[#137333] font-semibold">©{new Date().getFullYear()}</span> Vaibhav Pandey
          </p>
        </footer>
      </div>
    </main>
  );
}
