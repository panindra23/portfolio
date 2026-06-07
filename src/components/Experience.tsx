import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const responsibilities = [
  'Performed Exploratory Data Analysis on structured business datasets',
  'Developed end-to-end data preprocessing pipelines',
  'Built and evaluated supervised machine learning models',
  'Created interactive visual analytics dashboards in Power BI',
  'Generated actionable business insights from complex data',
  'Collaborated on real-world data-driven business solutions',
];

const achievements = [
  'Improved data quality through advanced preprocessing techniques',
  'Built reusable analytical workflows reducing processing time',
  'Delivered insights that supported informed business decisions',
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Work History</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="reveal">
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
              {/* Date badge (left on desktop) */}
              <div className="hidden md:flex md:w-1/2 justify-end pr-12 pt-6">
                <div className="card-glass rounded-xl px-4 py-2 gradient-border text-right">
                  <div className="flex items-center gap-2 text-cyan-400 justify-end">
                    <Calendar size={14} />
                    <span className="text-sm font-medium">2024</span>
                  </div>
                  <span className="text-xs text-slate-500">Internship</span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 timeline-dot border-2 border-slate-950" />

              {/* Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                <div className="card-glass rounded-2xl p-8 gradient-border card-hover">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                      <p className="text-cyan-400 font-medium">Dyashin Technosoft Pvt Ltd</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <MapPin size={12} />
                        <span>Bengaluru, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Responsibilities</h4>
                    <div className="space-y-2">
                      {responsibilities.map(r => (
                        <div key={r} className="flex items-start gap-3 text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Achievements</h4>
                    <div className="space-y-2">
                      {achievements.map(a => (
                        <div key={a} className="flex items-start gap-3 text-sm">
                          <CheckCircle size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {['Python', 'EDA', 'Power BI', 'Machine Learning', 'Data Preprocessing', 'Analytics'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education timeline entry */}
          <div className="reveal mt-12">
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
              <div className="hidden md:flex md:w-1/2 justify-end pr-12 pt-6">
                <div className="card-glass rounded-xl px-4 py-2 gradient-border text-right">
                  <div className="flex items-center gap-2 text-cyan-400 justify-end">
                    <Calendar size={14} />
                    <span className="text-sm font-medium">2021 – 2025</span>
                  </div>
                  <span className="text-xs text-slate-500">Education</span>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 timeline-dot border-2 border-slate-950" />

              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                <div className="card-glass rounded-2xl p-8 gradient-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0 text-2xl">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">B.Tech Computer Science Engineering</h3>
                      <p className="text-teal-400 font-medium">Computer Science & Engineering</p>
                      <p className="text-slate-400 text-sm mt-2">
                        Specialization in Data Science, Artificial Intelligence, and Machine Learning.
                        Built a strong foundation in algorithms, data structures, and software engineering principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
