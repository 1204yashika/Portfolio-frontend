import { personal } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-violet-900/30 to-cyan-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          </div>

          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Great</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a role in mind, want to collaborate on a project, or just want to say hello — I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`mailto:${personal.email}`}
              className="px-8 py-3 rounded-xl font-medium bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 inline-flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personal.email}
            </a>
            <a
              href="/resume.pdf"
              download="Yashika_Agrawal_Resume.pdf"
              className="px-8 py-3 rounded-xl font-medium border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 transition-all duration-200 inline-flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center text-sm text-gray-500">
            <span>{personal.phone}</span>
            <span>·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
