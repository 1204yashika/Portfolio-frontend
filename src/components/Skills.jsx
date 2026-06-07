import { skills } from '../data/resume';

const categoryColors = {
  'Frontend': 'from-violet-500 to-purple-600',
  'Backend': 'from-blue-500 to-cyan-600',
  'Database & Caching': 'from-emerald-500 to-teal-600',
  'Architecture': 'from-amber-500 to-orange-600',
  'Testing': 'from-pink-500 to-rose-600',
  'AI & Tools': 'from-indigo-400 to-violet-600',
  'Build & DevOps': 'from-slate-400 to-gray-600',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Technical Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${categoryColors[group.category] || 'from-violet-500 to-cyan-500'}`} />
                <h3 className="font-semibold text-white text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-violet-400/40 hover:text-violet-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
