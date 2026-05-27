export const personal = {
  name: 'Yashika Agrawal',
  title: 'Frontend Engineer',
  email: 'yashikaagr12@gmail.com',
  phone: '+91-8938932161',
  linkedin: 'https://linkedin.com/in/yashika-agrawal',
  github: 'https://github.com/1204yashika',
  summary:
    'Frontend Engineer with 2+ years of experience building scalable, world-class web applications using React.js, TypeScript, Redux Toolkit, Tailwind CSS, and JavaScript (ES6+). Strong foundation in object-oriented programming, component-based architecture, design systems, and accessibility (a11y / WCAG). Improved Core Web Vitals and reduced page load time by 40% via memoization and code-splitting; cut delivery time by 30% using AI-assisted development workflows (Claude Code, GitHub Copilot) and prompt engineering. Experienced in Agile/Scrum environments with strong cross-functional collaboration and CI/CD delivery practices.',
};

export const skills = [
  {
    category: 'Frontend (Primary)',
    items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Hooks', 'Micro-Frontend Architecture', 'Responsive UI', 'Dynamic Forms', 'API Integration', 'Accessibility (a11y, ARIA, WCAG)'],
  },
  {
    category: 'State Management',
    items: ['Redux', 'Redux Toolkit (RTK)', 'React Query / TanStack Query', 'Zustand', 'Context API'],
  },
  {
    category: 'UI & Design Systems',
    items: ['Chakra UI', 'Tailwind CSS', 'Storybook', 'Design Tokens', 'Reusable Component Libraries'],
  },
  {
    category: 'Performance',
    items: ['Core Web Vitals (LCP, FID, CLS)', 'Lighthouse Audits', 'Memoization', 'Code-Splitting', 'Lazy Loading', 'Bundle Optimization'],
  },
  {
    category: 'AI & Prompt Engineering',
    items: ['Prompt Engineering', 'GPT-based Search', 'AI Output Evaluation', 'Claude Code (Anthropic)', 'GitHub Copilot', 'AI-Assisted Development Workflows'],
  },
  {
    category: 'Backend (Supporting)',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets', 'RBAC', 'Cron Jobs', 'MongoDB'],
  },
  {
    category: 'Testing, Build & DevOps',
    items: ['Jest', 'React Testing Library', 'Vite', 'Webpack', 'Git', 'GitHub Actions (CI/CD)', 'Vercel', 'Agile/Scrum', 'Postman'],
  },
];

export const experience = [
  {
    role: 'Frontend Engineer (Full Stack)',
    company: 'Unthinkable Solutions',
    location: 'India',
    period: 'Jan 2024 – Present',
    bullets: [
      'Developed and shipped React.js + TypeScript web components with dynamic forms, full-screen UI workflows, and complex AND/OR/NOT filtering; improved Core Web Vitals (LCP, FID, CLS) and reduced page load time by 40% using useMemo, useCallback, React.memo, code-splitting, and lazy loading.',
      'Delivered customer-facing features for a platform serving 200+ users across 5 organizations; partnered with Product, Design, and Backend teams in Agile/Scrum sprints with bi-weekly deliverables.',
      'Built and maintained a UI Design System using Chakra UI, Tailwind CSS, and Storybook with reusable components, design tokens, and accessibility (a11y / WCAG) guidelines; adopted Redux Toolkit (RTK) and React Query / TanStack Query for predictable state and efficient server-state caching.',
      'Wrote clean, maintainable TypeScript across critical modules, reducing runtime errors; authored unit and component tests with Jest and React Testing Library (RTL); participated in code reviews and mentored junior developers.',
      'Leveraged prompt engineering with Claude Code and GitHub Copilot for AI-assisted development workflows (reduced delivery time by 30%); contributed to CI/CD pipelines using GitHub Actions and Vercel for automated builds, previews, and deployments.',
      'Developed supporting RESTful APIs (Node.js, Express.js), WebSocket-based real-time features, and MongoDB aggregation pipelines that auto-generated document-based (Excel) reports for business analytics.',
    ],
  },
];

export const projects = [
  {
    title: 'Healthcare Management Platform',
    type: 'Company Project',
    description: 'Full Stack Web Application',
    bullets: [
      'Delivered a full-stack web platform for 200+ users across 5 hospitals with dynamic dashboards, appointment scheduling, and role-based access control (RBAC) for admins, doctors, and staff.',
      'Achieved 40% faster page loads and improved Core Web Vitals via React memoization, code-splitting, and lazy loading; implemented WebSocket-based real-time updates and cron-driven automated document (Excel) report generation.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSockets', 'RBAC'],
  },
  {
    title: 'Netflix-GPT',
    type: 'Personal Project',
    description: 'AI-Powered Movie Search Application',
    bullets: [
      'Built a Netflix-style React app with GPT-powered semantic search that returns AI-curated movie recommendations from natural language queries; applied prompt engineering techniques to improve relevance and consistency of AI outputs.',
      'Implemented Redux Toolkit for global auth and browse state; optimized re-renders using React.memo and selector patterns. Iterated on prompts and evaluated outputs using structured feedback loops to refine accuracy.',
    ],
    tags: ['React.js', 'Redux Toolkit', 'GPT API', 'Prompt Engineering', 'Firebase'],
  },
  {
    title: 'Social Media Learning App',
    type: 'Personal Project',
    description: 'React Component Library & REST APIs',
    bullets: [
      'Built a full-stack social platform with JWT-based authentication, post creation, likes, follows, and a dynamic news feed powered by REST APIs.',
      'Designed a fully reusable React component library (cards, modals, forms) using Chakra UI and Tailwind CSS with design tokens and theming for a consistent, accessible (a11y / WCAG) UI.',
    ],
    tags: ['React.js', 'Chakra UI', 'Tailwind CSS', 'JWT', 'REST APIs', 'Node.js'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'GLA University',
    location: 'Mathura',
    period: '2022 – 2024',
    gpa: '8.2 / 10',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Rajiv Academy',
    location: 'Mathura',
    period: '2019 – 2022',
    gpa: '7.5 / 10',
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'Kanha Makhan Public School',
    location: 'Mathura',
    period: '2019',
    gpa: null,
  },
];
