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
                <div className="flex items-center gap-2">
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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors border border-white/10 bg-white/5 px-2.5 py-1 rounded-full"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
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
