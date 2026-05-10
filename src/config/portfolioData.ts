import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://satya00089.github.io/portfolio", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Bharath B",
    title: "Software Engineer — Front End (React)",
    headline: "React .JavaScript .HTML .CSS .TypeScript .AWS",
    // avatar can be a string, an object with { url, label }, or an array of those.
    avatar: [
      // use public root path so Vite serves the static asset from /public/profile.jpg
      // { url: "./profile.jpg", label: "" },
      // { url: "./profile1.jpg", label: "" },
    ],
    summary:
      "Senior Engineer with 7+ years of experience delivering enterprise-grade applications. Over the last 3 years I have focused on building production systems using Python (FastAPI) and React — designing APIs, building responsive frontends, and automating deployments with IaC. Experienced across AWS & Azure and comfortable owning full delivery from design to production.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "React.js developer & frontend-focused engineer specializing in building scalable, high-performance web applications with React, TypeScript, and modern UI ecosystems. I craft reusable component architectures, deliver responsive and accessible user experiences, and collaborate across design and backend teams to ship production-ready features with speed and reliability.",
    },
    contact: {
      email: "bharathbmichael@gmail.com",
      phone: "+91 8088314404",
      location: "Bangalore, India",
      website: "https://satya00089.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/satya-subudhi/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089",
          icon: "SiGithub",
        },
        {
          label: "Hugging Face",
          url: "https://huggingface.co/spaces/satya00089/",
          icon: "SiHuggingface",
        },
        {
          label: "Kaggle",
          url: "https://www.kaggle.com/satya00089",
          icon: "SiKaggle",
          size: 32,
        },
      ],
    },
  },
  highlights: [
    // "Software Engineer at Unisys (Jun 2025 – Present)",
    "6+ years focused on Front end development with React, TypeScript, and modern UI ecosystems",
    "Experienced with responsive design, accessibility, and building reusable component libraries",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 90,
          icon: "SiReact",
          category: "frontend",
          years: 5,
          note: "using React since 2019",
        },
        {
          name: "TypeScript",
          level: 85,
          icon: "SiTypescript",
          category: "frontend",
          years: 2,
          note: "",
        },
        {
          name: "JavaScript",
          level: 90,
          icon: "SiJavascript",
          category: "frontend",
          years: 5,
          note: "Using since 2019",
        },
        {
          name: "HTML5",
          level: 90,
          icon: "SiHtml5",
          category: "frontend",
          years: 6,
        },
        {
          name: "CSS3",
          level: 88,
          icon: "SiCss3",
          category: "frontend",
          years: 6,
        },
        {
          name: "Git",
          level: 80,
          // icon: "SiTailwindcss",
          category: "frontend",
          years: 6,
          note: "Using since 2019",
        },
        {
          name: "AWS",
          level: 80,
          icon: "SiAws",
          category: "frontend",
          years: 1,
          note: "Using since 2025",
        },
        {
          name: "VS Code",
          level: 80,
          icon: "SiVisualstudiocode",
          category: "frontend",
          years: 6,
          note: "Using since 2019",
        },
        {
          name: "NPM",
          level: 80,
          icon: "SiNpm",
          category: "frontend",
          years: 5,
          note: "Using since 2019",
        },
        {
          name: "Cyber Duck",
          level: 80,
          icon: "SiCyberduck",
          category: "frontend",
          years: 1,
          note: "Using since 2026",
        },
        {
          name: "WIN SCP",
          level: 80,
          icon: "SiWinscp",
          category: "frontend",
          years: 1,
          note: "Using since 2026",
        },
        {
          name: "Beyond Compare",
          level: 80,
          icon: "SiBeyondcompare",
          category: "frontend",
          years: 2,
          note: "Using since 2025",
        },
      ],
    },
  ],
  experience: [
    {
      id: "unisys-senior-2025",
      title: "Senior Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2025-06", present: true },
      summary:
        "Leading full-stack efforts around Python-based backends and React frontends for enterprise customers. Driving architecture, mentoring teammates and implementing IaC and cloud deployment practices.",
      bullets: [
        "Lead development of microservices using FastAPI and Python for enterprise-scale workloads.",
        "Design and implement responsive React frontends and component libraries with TypeScript and Tailwind.",
        "Drive IaC adoption using Terraform and Bicep; implement CI/CD pipelines and deployment automation.",
        "Mentor engineers, conduct design reviews, and improve code quality and observability.",
      ],
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Terraform",
        "AWS",
        "Azure",
      ],
    },
    {
      id: "unisys-se-2022",
      title: "Software Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2022-01", end: "2025-05" },
      summary:
        "Worked on web and desktop applications, cloud deployment tooling, and multi-cloud automation for Unisys products.",
      bullets: [
        "Built desktop and web UI features using React, Electron.js, TypeScript and Node.js.",
        "Implemented cloud deployment workflows for Azure (ARM) and AWS (CloudFormation).",
        "Improved code quality and CI pipelines, addressing SonarQube findings and standardizing testing.",
        "Delivered features around redeployment, resource deletions and automation across cloud providers.",
      ],
      tech: ["React", "Electron", "TypeScript", "Node.js", "Azure", "AWS"],
    },
    {
      id: "unisys-rae-aircore",
      title: "Software Engineer (RAE, AirCore projects)",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2018-03", end: "2021-12" },
      summary:
        "Worked on UI and backend components for airline/travel solutions and internal tooling.",
      bullets: [
        "Developed front-end UIs using Angular and React and integrated with Unisys Design System.",
        "Built REST APIs using Java (Vert.x) and integrated with NoSQL stores (MongoDB, Couchbase).",
        "Implemented role-based access with Keycloak and developed data visualization tools.",
        "Contributed to NDC stabilization, import/export features and product maintenance.",
      ],
      tech: [
        "Angular",
        "React",
        "Java (Vert.x)",
        "MongoDB",
        "Couchbase",
        "Keycloak",
      ],
    },
  ],
  projects: [
    {
      id: "learn-algo",
      title: "Learn Algo",
      description:
        "Interactive visualizations that transform abstract concepts into intuitive understanding. Watch sorting, searching, and ML algorithms execute step-by-step.",
      tags: ["Algorithms", "DSA", "ML", "AI", "Visualization", "Next.js"],
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqYWFhbnBraWt3ZXhvajZsdjg5andyMGZzY2VibGg3bXE0MWxwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2PuPWxuLV1FGyh03Ja/giphy.gif",
      href: "https://www.learn-algo.com",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/learn-algo",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "landing-zone-orchestrator",
      title: "Landing Zone Orchestrator",
      description:
        "A production-ready platform that transforms cloud infrastructure provisioning from manual IaC coding to an intuitive, form-driven workflow. Built with React, FastAPI, and MongoDB to generate validated Terraform templates for AWS, Azure, and GCP. Features include schema-driven form builder for VPC, Subnets, IAM, and networking resources, real-time Terraform code generation and validation, JWT-based authentication, MongoDB storage for projects and templates, and multi-cloud support.",
      tags: [
        "Terraform",
        "IaC",
        "React",
        "FastAPI",
        "MongoDB",
        "AWS",
        "Azure",
        "Full Stack",
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtuYjY1emtsZmNjMXp1czdrdXR5bXE5ZDJheHVvZjY1azZxYnJieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzImRjQVb2OUI84mTt/giphy.gif",
      href: "https://orchestrator.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/landing-zone-orchestrator-ui",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "diagrammatic",
      title: "Diagrammatic",
      description:
        "Diagrammatic (System Design Playground): A component library and living documentation for a design system.",
      tags: ["System Design", "AI & ML", "React"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://diagrammatic.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/diagrammatic",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "tic-tac-toe-ai",
      title: "Tic Tac Toe AI",
      description:
        "A minimal Tic-Tac-Toe AI game built with Next.js to understand the Minimax algorithm.",
      tags: ["Next.js", "AI", "Game", "Minimax"],
      image:
        "https://raw.githubusercontent.com/satya00089/tic-tac-toe/main/public/tic-tac-toe.png",
      href: "https://satya00089.github.io/tic-tac-toe/",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/tic-tac-toe",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "mui-color-wheel",
      title: "MUI Color Wheel",
      description:
        "A Material-UI based color wheel component with real-time color picking.",
      tags: ["React", "Material-UI", "NPM Package", "Storybook"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJxYjhmdTVjam41aWlzczZreGZ2eXc5eThjdDRpMXgxYzVuYTAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWnCyw4rmoFY8CmhLV/giphy.gif",
      href: "https://mui-color-wheel.vercel.app/",
      links: [
        {
          label: "Storybook",
          url: "https://mui-color-wheel.vercel.app/",
          icon: "SiStorybook",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/mui-color-wheel",
          icon: "SiNpm",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/mui-color-wheel",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "alochona",
      title: "Alochona",
      description:
        "Alochona is an experimental chatbot hosted on Hugging Face Spaces. It uses OpenAI under the hood for responses. This project was built as a way to explore chatbot UIs, Hugging Face deployment, and integrating OpenAI APIs.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      href: "https://huggingface.co/spaces/satya00089/alochona",
      links: [
        {
          label: "Huggingface",
          url: "https://huggingface.co/spaces/satya00089/alochona/tree/main",
          icon: "SiHuggingface",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/alochona",
          icon: "SiGithub",
        },
      ],
      tags: ["Chatbot", "OpenAI", "Hugging Face", "Beginner Project"],
    },
    {
      id: "night-sky",
      title: "Night Skyline",
      description:
        "A breathtaking recreation of the city skyline under a starlit night sky, capturing the serene beauty and glowing atmosphere of the evening.",
      tags: ["React", "CSS"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RjaHAxY3N3enY0d3RldWVpczg2ZTNzMHhsY2dpam0yYnp6bWh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2jddT5c9g9OeHI17p/giphy.gif",
      href: "https://satya00089.github.io/night-sky",
      links: [
        {
          label: "Watch",
          url: "https://www.loom.com/share/1516014366e34135a67f5dd4e551fec5",
          icon: "FaPlay",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/night-sky",
          icon: "SiGithub",
        },
      ],
      isUnderDevelopment: true,
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Biju Patnaik University of Technology",
      date: "2013-2017",
    },
    {
      degree: "Higher Secondary",
      school: "Bellaguntha Science College",
      date: "2011-2013",
    },
    {
      degree: "High School",
      school: "G.T High School Bellaguntha",
      date: "2011",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
