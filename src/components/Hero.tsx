import myphoto from "../../photo.jpeg"
import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Database,
  Brain,
  BarChart3,
} from 'lucide-react';

const roles = [
  'Data Scientist',
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Analyst',
];

const stats = [
  { label: 'Projects Completed', value: '10+', icon: Terminal },
  { label: 'Medical Images Processed', value: '4K+', icon: Database },
  { label: 'ML Models Built', value: '8+', icon: Brain },
  { label: 'Certifications Earned', value: '4', icon: BarChart3 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center hero-grid overflow-hidden">
      {/* Orbs */}
      <div className="orb w-96 h-96 bg-cyan-500 top-10 -left-32" />
      <div className="orb orb-delayed w-80 h-80 bg-blue-600 bottom-20 -right-20" />
      <div className="orb w-64 h-64 bg-teal-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium"
              style={{ animation: 'fadeInUp 0.6s ease forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </div>

            <div style={{ animation: 'fadeInUp 0.6s 0.1s ease both' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Panindra</span>
                <br />
                <span className="text-white">Reddy</span>
              </h1>
            </div>

            <div
              className="text-2xl sm:text-3xl font-semibold h-10 flex items-center gap-1"
              style={{ animation: 'fadeInUp 0.6s 0.2s ease both' }}
            >
              <span className="text-gradient">{displayed}</span>
              <span className="cursor-blink text-cyan-400 text-3xl">|</span>
            </div>

            <p
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
              style={{ animation: 'fadeInUp 0.6s 0.3s ease both' }}
            >
              Motivated CS undergraduate specializing in Data Analytics, Machine Learning, and AI.
              Passionate about building intelligent systems that create measurable real-world impact.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 0.6s 0.4s ease both' }}
            >
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105 glow-cyan"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-cyan-500/50 hover:text-white transition-all hover:bg-slate-800/50"
              >
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 pt-2"
              style={{ animation: 'fadeInUp 0.6s 0.5s ease both' }}
            >
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="h-px flex-1 max-w-12 bg-slate-800" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:panindrareddy267@gmail.com"
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right – stats + avatar card */}
          <div className="flex flex-col items-center gap-8" style={{ animation: 'fadeInRight 0.8s 0.3s ease both' }}>
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl gradient-border overflow-hidden card-glass flex items-center justify-center">
                <img
                  src={myphoto}
                  alt="Panindra Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl px-3 py-2 text-xs font-bold text-white shadow-lg">
                Open to Work
              </div>
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-slate-800 border border-cyan-500/30 flex items-center justify-center">
                <span className="text-lg">AI</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="card-glass rounded-2xl p-4 card-hover gradient-border"
                  style={{ animation: `scaleIn 0.5s ${0.4 + i * 0.1}s ease both` }}
                >
                  <stat.icon size={20} className="text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white font-['Space_Grotesk']">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} className="scroll-bounce" />
      </button>
    </section>
  );
}
