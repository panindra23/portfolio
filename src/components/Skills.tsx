import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'C Programming', level: 75 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: '📊',
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'Exploratory Data Analysis', level: 88 },
      { name: 'Statistical Analysis', level: 82 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Business Analytics', level: 78 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Supervised Learning', level: 85 },
      { name: 'Unsupervised Learning', level: 78 },
      { name: 'Feature Engineering', level: 80 },
      { name: 'Model Evaluation', level: 83 },
    ],
  },
  {
    title: 'Deep Learning',
    icon: '🧠',
    color: 'from-violet-500 to-blue-500',
    skills: [
      { name: 'Neural Networks', level: 82 },
      { name: 'CNN Architectures', level: 80 },
      { name: 'TensorFlow / Keras', level: 83 },
      { name: 'Medical Image Processing', level: 78 },
    ],
  },
];

const tools = [
  { name: 'Pandas', category: 'Data Science' },
  { name: 'NumPy', category: 'Data Science' },
  { name: 'Matplotlib', category: 'Visualization' },
  { name: 'Seaborn', category: 'Visualization' },
  { name: 'Power BI', category: 'BI' },
  { name: 'Excel', category: 'BI' },
  { name: 'GitHub', category: 'DevTools' },
  { name: 'Jupyter Notebook', category: 'DevTools' },
  { name: 'Ubuntu Linux', category: 'DevTools' },
  { name: 'MySQL', category: 'Database' },
  { name: 'OpenCV', category: 'Computer Vision' },
  { name: 'Scikit-learn', category: 'ML' },
];

function SkillBar({ name, level, color, visible }: Skill & { color: string; visible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm text-cyan-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal card-glass rounded-2xl p-6 card-hover gradient-border"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map(skill => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  visible={visible}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Tools & <span className="text-gradient-alt">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="group card-glass rounded-xl px-4 py-3 gradient-border card-hover cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-slate-300 font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </span>
                <span className="ml-2 text-xs text-slate-600 group-hover:text-slate-500 transition-colors">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
