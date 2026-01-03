export type NoteKey = keyof typeof notes;

export const notes = {
  "About Me": {
    title: "About Me",
    content: `
Hi, I’m Sweedal 👋

I’m a Software Engineer with 4+ years of experience building clean, scalable, and user-focused web applications. I enjoy working at the intersection of engineering and product — where small details, performance, and usability really matter.

I primarily work with React, TypeScript, and modern frontend tooling, and I care a lot about writing code that’s readable, maintainable, and easy to reason about. I’m especially interested in building interfaces that *feel* good to use — fast, intuitive, and thoughtful.

Outside of work, I enjoy refining my skills, exploring product design patterns, and constantly improving how I approach problem-solving as an engineer.
`,
  },
  Experience: {
    title: "Experience",
    content: `
Software Engineer — Frontend  
4+ years of professional experience

I’ve worked as a frontend engineer at product-based companies, contributing to real-world applications used by customers at scale.

My work involved:
• Building and scaling React-based interfaces for customer-facing products
• Translating Figma designs into accessible, high-quality UI with strong attention to detail
• Taking ownership of features from concept to production-ready implementation
• Working with REST APIs and managing complex client-side state
• Continuously improving performance, UX consistency, and code quality
• Collaborating closely with designers, backend engineers, and product managers in Agile teams


I enjoy owning features end-to-end — from understanding requirements to implementation, refinement, and polish.

More detailed role and company information is available in my resume.
`,
  },
  Projects: {
    title: "Projects",
    content: "", // using data from src/data/projects.ts
  },

  Skills: {
    title: "Skills",
    content: `
Frontend Engineering:
• React.js, Next.js, JavaScript (ES6+), TypeScript
• HTML5, CSS3, Tailwind CSS
• Component-driven architecture and reusable UI systems
• Client-side and server-side rendering (SSR), hydration handling

Performance & Reliability:
• Performance optimization (render optimization, memoization, code-splitting)
• Debugging complex UI issues (async flows, race conditions, state inconsistencies)
• Production issue handling and root cause analysis

APIs & Integrations:
• REST API integration and API-driven UI development
• Third-party integrations (analytics, payments, SDKs)
• Error handling, loading states, and edge cases

Analytics & Observability:
• Mixpanel, Google Analytics, Google Tag Manager
• Microsoft Clarity, Percept
• Event tracking and user behaviour analysis

Testing & Quality:
• Automation testing for critical user flows
• Regression prevention and release confidence
• Clean, maintainable, and readable code practices

Tools & Workflow:
• Git, GitHub
• Build tools: Vite, Webpack
• Agile development and cross-functional collaboration

Core Concepts:
• Responsive and mobile-first design
• Accessibility fundamentals (semantic HTML, keyboard navigation)
• Scalable frontend architecture
• Code reusability and long-term maintainability

I focus on fundamentals — frameworks change, principles don’t.
`,
  },
  Resume: {
    title: "Resume",
    content: `
You can view or download my resume below.

It includes detailed information about my work experience, projects, and technical background.
`,
  },
  Contact: {
    title: "Contact",
    content: `
I’m open to frontend and product-focused engineering roles, and I enjoy conversations around building thoughtful, user-centric products.

You can reach me here:
• Email: sweedal.v.masih@gmail.com
• LinkedIn: https://linkedin.com/in/sweedalmasih
• GitHub: https://github.com/SweedalMasih

If you’re working on something interesting — or just want to talk frontend, UX, or product engineering — I’d love to connect.
`,
  },
};
