import { personal } from '../data/resume';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '200+', label: 'Users Served' },
  { value: '40%', label: 'Faster Page Loads' },
  { value: '30%', label: 'Delivery Time Cut' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left */}
          <div className="flex-1">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Crafting high-performance<br />user experiences
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personal.summary}
            </p>
            <div className="flex gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4 md:w-80 shrink-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500/40 transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
