import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300 hover:bg-white/[0.05] flex flex-col"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${
                index % 3 === 0 ? 'from-violet-500 to-transparent' :
                index % 3 === 1 ? 'from-cyan-500 to-transparent' :
                'from-pink-500 to-transparent'
              }`} />

              <div className="mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  {project.type}
                </span>
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
