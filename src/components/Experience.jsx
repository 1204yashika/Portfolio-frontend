import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-12 pl-8 md:pl-20">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                {/* Dot */}
                <div className="absolute -left-[38px] md:-left-[58px] top-1.5 w-4 h-4 rounded-full bg-violet-500 border-2 border-[#0a0a14] ring-2 ring-violet-500/30" />

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-violet-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="text-violet-400 font-medium mt-0.5">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{job.period}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-violet-400 mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
