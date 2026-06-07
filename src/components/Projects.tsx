import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Activity, Brain, Eye } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
  gradient: string;
  image: string;
  impact: string;
}

const projects: Project[] = [
  {
    title: 'Polyp Segmentation',
    subtitle: 'Deep Learning Healthcare AI',
    description: 'AI-powered solution for detecting and segmenting intestinal polyps from colonoscopy images to support early disease diagnosis.',
    longDesc: 'Developed a deep learning pipeline for precise medical image segmentation, helping healthcare professionals identify intestinal abnormalities quickly and accurately.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'U-Net', 'Deep Learning', 'NumPy'],
    stats: [
      { label: 'Images Processed', value: '1000+' },
      { label: 'Architecture', value: 'U-Net' },
      { label: 'Domain', value: 'Healthcare' },
    ],
    icon: <Activity size={28} className="text-cyan-400" />,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800',
    impact: 'Supports healthcare professionals in identifying colorectal abnormalities, potentially enabling earlier and more accurate diagnoses.',
  },
  {
    title: 'Brain Tumor Detection',
    subtitle: 'MRI Classification System',
    description: 'Deep learning-based MRI image classification system that automatically identifies and classifies brain tumor types with high accuracy.',
    longDesc: 'Built a comprehensive CNN-based classification pipeline trained on thousands of MRI scans, with detailed accuracy metrics and visualization for clinical use.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'CNN', 'Matplotlib'],
    stats: [
      { label: 'MRI Images', value: '3000+' },
      { label: 'Model Type', value: 'CNN' },
      { label: 'Domain', value: 'Neurology' },
    ],
    icon: <Brain size={28} className="text-blue-400" />,
    gradient: 'from-blue-500/20 to-violet-500/20',
    image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=800',
    impact: 'Improved automated brain tumor classification efficiency, assisting radiologists with faster and more consistent MRI analysis.',
  },
  {
    title: 'Business Analytics Dashboard',
    subtitle: 'Power BI Intelligence Platform',
    description: 'Interactive Power BI dashboards delivering real-time business intelligence and actionable insights from complex structured datasets.',
    longDesc: 'Designed and built end-to-end analytics workflows during internship, combining data preprocessing with visual reporting to drive informed decision-making.',
    tech: ['Power BI', 'Python', 'Pandas', 'SQL', 'Excel', 'Data Wrangling'],
    stats: [
      { label: 'Dashboards', value: '5+' },
      { label: 'Data Quality', value: 'Improved' },
      { label: 'Domain', value: 'Business' },
    ],
    icon: <Eye size={28} className="text-teal-400" />,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    impact: 'Delivered actionable insights that supported executive decision-making processes across multiple business units.',
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal card-glass rounded-3xl overflow-hidden gradient-border card-hover ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className={`md:col-span-2 relative overflow-hidden ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 1 ? 'from-transparent to-slate-900/80' : 'from-slate-900/80 to-transparent'} md:block hidden`} />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 md:hidden`} />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-slate-700/50 backdrop-blur-sm flex items-center justify-center`}>
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{project.subtitle}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all">
                        <Github size={16} />
                      </button>
                      <button className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.longDesc}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.stats.map(stat => (
                      <div key={stat.label} className="bg-slate-800/60 rounded-xl p-3 text-center">
                        <div className="text-white font-bold text-sm">{stat.value}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 mb-5">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Impact</span>
                    <p className="text-slate-400 text-sm mt-1">{project.impact}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
