import { projects } from '../data/resume';

const typeColors = {
  'Company Project': 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  'Full Stack': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  'Frontend': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'Personal Project': 'bg-pink-500/10 border-pink-500/20 text-pink-400',
};

const accentGradients = [
  'from-violet-500 to-transparent',
  'from-cyan-500 to-transparent',
  'from-blue-500 to-transparent',
  'from-pink-500 to-transparent',
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300 hover:bg-white/[0.05] flex flex-col"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${accentGradients[index % accentGradients.length]}`} />

              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-full border ${typeColors[project.type] || 'bg-white/5 border-white/10 text-gray-400'}`}>
                  {project.type}
                </span>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                    <span className="text-violet-400 shrink-0 mt-0.5">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tag}
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
