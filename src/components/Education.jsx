import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                i === 0 ? 'from-violet-500 to-cyan-500' :
                i === 1 ? 'from-cyan-500 to-violet-500' :
                'from-pink-500 to-violet-500'
              }`} />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base leading-tight">{edu.degree}</h3>
                  <p className="text-violet-400 text-sm mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{edu.location} · {edu.period}</p>
                  {edu.gpa && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                      <span className="text-xs text-gray-400">GPA</span>
                      <span className="text-xs font-semibold text-violet-300">{edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
