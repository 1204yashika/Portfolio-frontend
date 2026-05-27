import { personal } from '../data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <span>© 2025 {personal.name}. All rights reserved.</span>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="hover:text-violet-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
