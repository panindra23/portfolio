import { useEffect, useRef } from 'react';
import { Award, Target, TrendingUp } from 'lucide-react';

interface Cert {
  provider: string;
  title: string;
  icon: string;
  color: string;
}

const certifications: Cert[] = [
  {
    provider: 'Google Cloud',
    title: 'Digital Transformation with Google Cloud',
    icon: 'G',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    provider: 'IBM',
    title: 'Developing AI Applications with Python',
    icon: 'I',
    color: 'from-blue-700 to-blue-500',
  },
  {
    provider: 'University of Michigan',
    title: 'Exploring C Programming',
    icon: 'M',
    color: 'from-amber-600 to-amber-400',
  },
  {
    provider: 'Power BI',
    title: 'Power BI for Data Analytics',
    icon: 'P',
    color: 'from-yellow-500 to-orange-400',
  },
];

const shortTermGoals = [
  'Become a Production Data Scientist',
  'Master ML Engineering & MLOps',
  'Build and Deploy Production-Level AI Systems',
  'Deepen Cloud ML expertise (GCP/AWS)',
];

const longTermGoals = [
  'Lead AI-driven innovation projects',
  'Contribute to healthcare technology solutions',
  'Develop scalable intelligent systems at scale',
  'Publish research in AI/ML conferences',
];

const whyHirePoints = [
  'Strong Data Science Foundation',
  'Practical AI Project Experience',
  'Deep Learning & ML Knowledge',
  'Advanced Problem Solving Skills',
  'Fast & Continuous Learner',
  'Team-Oriented Professional',
  'Passion for Innovation',
  'Healthcare AI Exposure',
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Certifications & <span className="text-gradient">Goals</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Certifications grid */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award size={22} className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="card-glass rounded-2xl p-6 gradient-border card-hover group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">{cert.provider}</p>
                <h4 className="text-white font-semibold text-sm leading-snug">{cert.title}</h4>
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-teal-400 text-xs font-medium">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="reveal card-glass rounded-2xl p-8 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Target size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Short-Term Goals</h3>
            </div>
            <div className="space-y-3">
              {shortTermGoals.map((goal, i) => (
                <div key={goal} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-xs font-bold text-cyan-400">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal card-glass rounded-2xl p-8 gradient-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <TrendingUp size={20} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Long-Term Vision</h3>
            </div>
            <div className="space-y-3">
              {longTermGoals.map((goal, i) => (
                <div key={goal} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 text-xs font-bold text-blue-400">
                    {i + 1}
                  </div>
                  <span className="text-slate-300 text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why hire me */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why <span className="text-gradient">Hire Me?</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {whyHirePoints.map((point, i) => (
              <div
                key={point}
                className="card-glass rounded-xl p-4 gradient-border card-hover text-center group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold mx-auto mb-3 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <p className="text-slate-300 text-xs font-medium leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
