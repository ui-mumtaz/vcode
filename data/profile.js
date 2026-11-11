/*
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Edit this file, refresh the page.
 *  Leave a field as "" (or an empty array) to hide it on the site.
 * ─────────────────────────────────────────────────────────────
 */
window.PROFILE = {
  name: "Mumtaz Ahmad",
  title: "Principal / Senior Angular Software Engineer",
  specialization: "Angular Architecture & Front-End Modernization",
  pitch:
    "I've spent 12+ years building and modernizing large web applications, 10+ of them in Angular and TypeScript. I take established codebases and move them to modern Angular (Standalone Components, Signals, OnPush) without breaking what already works.",
  location: "New Delhi, India",
  workPreference: "", // e.g. "Open to remote / relocation". Not on the résumé, so it is hidden for now.

  links: {
    email: "mumtazahmad2004@gmail.com",
    phone: "+91-9958339204",
    linkedin: "", // add your LinkedIn URL to show the LinkedIn buttons
    github: "https://github.com/ui-mumtaz",
    portfolio: "https://ui-mumtaz.github.io/portfolio/",
    resume: "resume.pdf",
  },

  headshot: "headshot.jpg", // drop a square photo with this name into the site folder

  stats: [
    { value: "12+", label: "Years building web applications" },
    { value: "10+", label: "Years specializing in Angular" },
    { value: "142", label: "Components modernized on one platform" },
    { value: "80%+", label: "Code coverage on critical modules" },
  ],

  summary: [
    "I'm an Angular engineer and front-end architect. Most recently I led Angular 21 development on a large Click & Collect and warehouse management platform. My core work is Angular architecture: component-driven UI, state management with RxJS and NgRx, performance tuning, accessibility, and modernizing applications that are already in production.",
    "My specialty is improving codebases that already work. I migrate them to Standalone Components, Signals, OnPush change detection, and shared design systems without breaking existing features. I also review code, mentor engineers, and help make architecture decisions with product, UX, backend, and QA teams. I use AI tools like Claude Code, ChatGPT, and GitHub Copilot to move faster, and I review and verify every line they produce myself.",
  ],

  experience: [
    {
      role: "Senior Angular Developer",
      company: "Cognizant (via Pacific)",
      dates: "May 2025 – Oct 2026",
      description:
        "Led Angular 21 development for a large-scale Click & Collect and warehouse management platform.",
      bullets: [
        "Modernized an established application by migrating 80+ legacy templates and 140+ components to modern Angular patterns, preserving all existing business functionality.",
        "Architected Standalone Components and a Signals-based state layer, moving the application toward zoneless change detection.",
        "Improved front-end performance with OnPush change detection, @defer views, custom route preloading, modern control flow, and modular SCSS.",
        "Built reusable WCAG 2.1-accessible interfaces with a focus on keyboard navigation and responsive UX.",
        "Sped up template migration, refactoring, and test generation with Claude Code and GitHub Copilot, reviewing and verifying all AI-generated code before merge.",
      ],
    },
    {
      role: "Senior Angular Developer",
      company: "CBRE (via Savitr)",
      dates: "Dec 2023 – Apr 2025",
      description:
        "Developed and modernized scalable enterprise applications on Angular 17/18.",
      bullets: [
        "Migrated legacy NgModule-based applications to Standalone Components and modern build tooling, improving bundle efficiency and maintainability.",
        "Managed complex client-side state with NgRx Store, Effects, and Selectors over reactive RxJS data flows.",
        "Raised front-end quality through TDD/BDD with Jest and Jasmine/Karma, reaching 80%+ code coverage across critical modules.",
        "Delivered WCAG 2.1 improvements, including focus management, keyboard navigation, and ARIA fixes.",
      ],
    },
    {
      role: "Associate Consultant",
      company: "Tata Consultancy Services",
      dates: "Sep 2021 – Nov 2023",
      description:
        "Built enterprise Angular applications with reusable component libraries and data-driven dashboards.",
      bullets: [
        "Designed reusable chart, filtering, table, and drill-down components adopted across multiple business modules.",
        "Led Jest unit-testing initiatives and worked with QA to improve testability and delivery quality.",
        "Reviewed pull requests and mentored developers on Angular, NgRx, component architecture, and engineering standards.",
      ],
    },
    {
      role: "Senior Technical Lead – Angular",
      company: "E2E Networks Limited",
      dates: "Apr 2019 – Aug 2021",
      description:
        "Led front-end architecture and Angular upgrade initiatives for scalable web applications.",
      bullets: [
        "Built modular single-page applications using lazy loading, route guards, HTTP interceptors, and reusable components.",
        "Established architecture conventions for module boundaries and lazy loading to improve maintainability and control initial bundle size.",
        "Mentored developers and ran technical workshops on Angular architecture, component design, and RxJS.",
      ],
    },
  ],

  earlierExperience:
    "Before that, I was a Senior Software Engineer at Algoworks (May 2018 – Apr 2019), building responsive Angular applications, integrating REST APIs, and introducing reusable component patterns. I was also a Senior Software Engineer at Pitney Bowes (Apr 2013 – Mar 2018), developing web applications from internal tools to large enterprise solutions in JavaScript, TypeScript, HTML5, and CSS3.",

  projects: [
    {
      name: "Retail Click & Collect Platform",
      tagline: "Large-scale Angular 21 modernization for a retail client (Liverpool).",
      bullets: [
        "Modernized 142 components and 82 templates with Standalone Components, Signals, and OnPush change detection.",
        "Built accessible, data-driven interfaces for order management, returns, inventory, reporting, and appointments.",
        "Implemented route preloading, real-time updates, barcode/QR functionality, and reusable UI patterns.",
      ],
      tech: ["Angular 21", "TypeScript", "RxJS", "Angular Material", "AG Grid", "Firebase", "Docker", "GitLab CI/CD"],
      live: "",
      repo: "",
    },
    {
      name: "Signal Forms Form Builder",
      tagline: "A hands-on form builder built on modern Angular.",
      bullets: [
        "Demonstrates modern Angular architecture with reusable, component-driven UI development.",
      ],
      tech: ["Angular", "Signals", "TypeScript"],
      live: "https://ui-mumtaz.github.io/signal-forms/",
      repo: "",
    },
    {
      name: "Buyside / Sellside Trading Portal",
      tagline: "Two independently deployable Angular apps in one Nx monorepo.",
      bullets: [
        "Built both applications on shared UI and workflow libraries within an Nx monorepo.",
        "Managed complex multi-step state with NgRx Store, Effects, Router Store, and RxJS.",
        "Built reusable dashboards and scalable shared component libraries.",
      ],
      tech: ["Angular", "Nx", "NgRx", "RxJS"],
      live: "",
      repo: "",
    },
  ],

  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS"] },
    { group: "Frontend", items: ["Angular (v2–v21)", "Standalone Components", "Angular Signals", "OnPush Change Detection", "Reactive Forms", "Angular Router", "Angular Material", "AG Grid", "Bootstrap"] },
    { group: "State Management", items: ["RxJS", "NgRx Store", "Effects", "Selectors", "Router Store"] },
    { group: "Backend / APIs", items: ["RESTful APIs", "OpenAPI", "GraphQL", "WebSockets", "SockJS", "STOMP", "Firebase"] },
    { group: "Performance & Accessibility", items: ["Code Splitting", "Tree Shaking", "Route Preloading", "Virtual Scrolling", "esbuild", "WCAG 2.1", "ARIA", "Keyboard Navigation"] },
    { group: "Testing & Quality", items: ["Jest", "Jasmine", "Karma", "Cypress", "TDD/BDD", "SonarQube", "ESLint", "Stylelint"] },
    { group: "Cloud / DevOps", items: ["Docker", "GitLab CI/CD", "GitHub Actions", "Git", "Webpack", "Nx", "JFrog Artifactory"] },
    { group: "AI Dev Tools", items: ["Claude Code", "ChatGPT", "GitHub Copilot", "Prompt Engineering", "AI-Assisted Refactoring", "Test Generation"] },
    { group: "Leadership", items: ["Technical Leadership", "Developer Mentoring", "Code Reviews", "Architecture Decisions", "Agile/Scrum"] },
  ],

  credentials: [
    { kind: "Degree", title: "Master of Computer Applications", org: "Magadh University, India", year: "2011" },
    { kind: "Degree", title: "Bachelor of Commerce", org: "Board of Technical Education, India", year: "2008" },
    { kind: "Languages", title: "English (Fluent) · Hindi (Native)", org: "", year: "" },
  ],

  // Optional section: Teaching / Community / Open Source / Volunteering.
  // Nothing on the résumé, so it stays hidden. Example: { title: "Open Source", text: "..." }
  extra: [],
};
