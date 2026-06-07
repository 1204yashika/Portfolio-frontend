export const personal = {
  name: 'Yashika Agrawal',
  title: 'Full Stack Developer',
  email: 'yashikaagr12@gmail.com',
  phone: '+91-8938932161',
  linkedin: 'https://linkedin.com/in/yashika-agrawal',
  github: 'https://github.com/1204yashika',
  summary:
    'Full Stack Developer (MERN) with 2+ years of experience designing and shipping end-to-end web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Equally strong across frontend and backend — building responsive React/Next.js UIs and design systems alongside REST APIs, JWT authentication, RBAC, WebSocket real-time features, and event-driven background workers serving 200+ users across 5 hospitals. Reduced page load time by 40% and cut delivery time by 30% using AI-assisted development (Claude Code, GitHub Copilot). Experienced in Agile/Scrum with CI/CD delivery practices.',
};

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js (App Router, SSR/SSG/ISR)', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit + RTK Query', 'Zustand', 'Chakra UI', 'Tailwind CSS', 'Storybook', 'Responsive UI', 'UI Design Systems'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT Auth & Refresh Tokens', 'Role-Based Access Control (RBAC)', 'WebSockets (Socket.io)', 'BullMQ Queues', 'Cron Jobs', 'Background Workers', 'Rate Limiting'],
  },
  {
    category: 'Database & Caching',
    items: ['MongoDB (Schema Design, Aggregation Pipelines)', 'Redis (Upstash)', 'Data Modeling', 'Caching & Invalidation'],
  },
  {
    category: 'Architecture',
    items: ['Layered Architecture (Route → Controller → Service → Repository)', 'Event-Driven Design', 'BFF Pattern', 'Cursor-Based Pagination', 'AWS S3 (Presigned URLs)'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library (RTL)', 'Vitest', 'Playwright (E2E)', 'MSW', 'Unit & Integration Testing'],
  },
  {
    category: 'AI & Tools',
    items: ['Claude Code (Anthropic)', 'GitHub Copilot', 'Prompt Engineering', 'Postman', 'Swagger / OpenAPI', 'Pino Logging'],
  },
  {
    category: 'Build & DevOps',
    items: ['Vite', 'Webpack', 'Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Vercel', 'Railway', 'Agile/Scrum', 'Code Reviews'],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Unthinkable Solutions',
    location: 'India',
    period: 'Jan 2024 – Present',
    bullets: [
      'Designed and built end-to-end features across a React.js frontend and Node.js / Express.js backend; delivered a platform now serving 200+ users across 5 hospitals in Agile/Scrum sprints.',
      'Engineered JWT-based authentication and Role-Based Access Control (RBAC) for multi-role access (admins, doctors, staff) with secure session and permission management.',
      'Built RESTful APIs from design to deployment covering CRUD, business logic, and data validation; integrated WebSockets for real-time status updates across the platform.',
      'Wrote MongoDB aggregation pipelines and scripts to auto-generate Excel reports; contributed to data modeling and schema design across key collections.',
      'Optimized React.js frontend performance by 40% using useMemo, useCallback, React.memo, lazy loading, and code-splitting; built and maintained a UI Design System with Chakra UI and Storybook, with Jest/RTL test coverage.',
      'Used Claude Code and GitHub Copilot for AI-assisted development, reducing delivery time by 30% through faster scaffolding, debugging, and code review; contributed to CI/CD pipelines with GitHub Actions.',
    ],
  },
];

export const projects = [
  {
    title: 'Healthcare Management System',
    type: 'Company Project',
    description: 'MERN Full Stack Platform',
    liveUrl: null,
    bullets: [
      'Built a MERN stack healthcare platform for 200+ users across 5 hospitals with patient dashboards, appointment scheduling, and JWT + RBAC for admins, doctors, and staff.',
      'Architected backend APIs and MongoDB schemas end-to-end; achieved 40% faster page loads via React optimizations and real-time updates via WebSockets and cron-based automation.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT', 'RBAC'],
  },
  {
    title: 'NotifyFlow',
    type: 'Full Stack',
    description: 'Task Management & Notification Platform',
    liveUrl: 'https://notify-flow-pi.vercel.app',
    githubUrl: 'https://github.com/1204yashika/NotifyFlow',
    bullets: [
      'Architected a production-grade backend with Node.js, TypeScript, Express, MongoDB, Redis (Upstash), Socket.io, and BullMQ in a layered Route → Controller → Service → Repository pattern.',
      'Implemented JWT auth with refresh tokens, RBAC, cursor-based pagination, Redis caching, rate limiting, BullMQ email queues, and S3 presigned uploads. Deployed backend on Railway and React + RTK Query frontend on Vercel via CI/CD.',
    ],
    tags: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Socket.io', 'BullMQ', 'Playwright'],
  },
  {
    title: 'NextCart',
    type: 'Frontend',
    description: 'Next.js E-Commerce Storefront',
    liveUrl: 'https://next-cart-delta.vercel.app/',
    githubUrl: 'https://github.com/1204yashika/nextCart',
    bullets: [
      'Built a production-grade storefront with Next.js 16 App Router using deliberate per-route rendering — ISR (homepage, product details), SSR (search), and CSR (cart) — with typed Route Handlers (BFF).',
      'Implemented all four Next.js caching layers, tag-based revalidation, and Zustand cart state with hydration-safe persistence.',
    ],
    tags: ['Next.js 16', 'TypeScript', 'App Router', 'ISR/SSR/CSR', 'Zustand', 'Tailwind CSS'],
  },
  {
    title: 'Netflix-GPT',
    type: 'Personal Project',
    description: 'AI-Powered Movie Search Application',
    liveUrl: null,
    githubUrl: 'https://github.com/1204yashika/netflix-gpt',
    bullets: [
      'Built a full-stack app with GPT-powered movie search, user authentication, and personalized recommendations; integrated the OpenAI API on the backend with rate limiting and error handling.',
      'Used Redux Toolkit for global state and prompt engineering with structured feedback loops to improve output relevance.',
    ],
    tags: ['React.js', 'Redux Toolkit', 'OpenAI API', 'Prompt Engineering', 'Firebase'],
  },
  {
    title: 'Social Media Learning App',
    type: 'Personal Project',
    description: 'React Component Library & REST APIs',
    liveUrl: null,
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
