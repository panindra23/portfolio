import { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Globe, Heart } from 'lucide-react';

const strengths = [
  {
    title: 'Analytical Thinking',
    desc: 'Ability to analyze large datasets and identify meaningful patterns and actionable insights.',
    icon: '🧠',
  },
  {
    title: 'Problem Solving',
    desc: 'Strong capability to break down complex problems into manageable, scalable solutions.',
    icon: '🔍',
  },
  {
    title: 'Continuous Learning',
    desc: 'Actively learning emerging technologies in AI, Data Science, and Cloud Computing.',
    icon: '📚',
  },
  {
    title: 'Team Collaboration',
    desc: 'Experience working with mentors and project teams to deliver successful outcomes.',
    icon: '🤝',
  },
];

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Analytics',
  'Healthcare Technology',
  'Cloud Computing',
  'Research & Innovation',
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Get to Know Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">About <span className="text-gradient">Me</span></h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – bio */}
          <div className="space-y-6 reveal">
            <div className="card-glass rounded-2xl p-8 gradient-border">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Profile</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I am a Computer Science Engineering student with a strong passion for Data Science,
                Artificial Intelligence, and Machine Learning. Throughout my academic journey, I have
                focused on developing practical solutions using modern technologies and data-driven
                approaches.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My experience spans data preprocessing, exploratory data analysis, ML model development,
                deep learning applications, and BI reporting. I enjoy transforming complex datasets into
                meaningful insights that support decision-making and business growth.
              </p>
            </div>

            {/* Personal info */}
            <div className="card-glass rounded-2xl p-6 gradient-border">
              <h4 className="text-lg font-semibold text-white mb-4">Personal Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <GraduationCap size={16} className="text-cyan-400 flex-shrink-0" />
                  <span>B.Tech Computer Science Engineering</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Globe size={16} className="text-cyan-400 flex-shrink-0" />
                  <span>English, Hindi, Telugu</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card-glass rounded-2xl p-6 gradient-border">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={18} className="text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right – strengths */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
            <div className="space-y-4">
              {strengths.map((s, i) => (
                <div
                  key={s.title}
                  className="card-glass rounded-2xl p-6 card-hover gradient-border group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1.5">{s.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Career objective */}
            <div className="mt-6 card-glass rounded-2xl p-6 border-l-4 border-cyan-400 gradient-border">
              <h4 className="text-white font-semibold mb-2">Career Objective</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                To secure a challenging position in Data Science, Machine Learning, or AI Engineering
                where I can apply analytical thinking, technical expertise, and innovative problem-solving
                to create impactful business solutions while continuously enhancing my professional skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
