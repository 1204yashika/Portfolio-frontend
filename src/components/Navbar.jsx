import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a14]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          YA
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download="Yashika_Agrawal_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d1f]/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Yashika_Agrawal_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white w-fit transition-colors"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
