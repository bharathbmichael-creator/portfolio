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
    headline: "React .JavaScript .HTML .CSS .TypeScript .AWS .Tizen Studio .Beyond Compare .Cyber Duck .WinSCP .VS Code .NPM .Sublime",
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
    "6+ years focused on Front end development with React, JavaScript, and modern UI ecosystems",
    "Experienced with responsive design, accessibility, and building reusable component libraries",
  ],
  skills: [
    {
      // title: "Frontend",
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
        {
          name: "Sublime",
          level: 80,
          icon: "SiSublime",
          category: "frontend",
          years: 1,
          note: "Used in 2023-2024",
        },
        {
          name: "Node JS",
          level: 80,
          icon: "SiNodejs",
          category: "frontend",
          years: 1,
          note: "Used in 2023-2024",
        },
        {
          name: "Tizen Studio",
          level: 80,
          icon: "SiTizen",
          category: "frontend",
          years: 1,
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
      id: "STV",
      title: "STV",
      description:
        "Developed and optimized Smart TV OTT applications, delivering seamless streaming experiences across platforms like Samsung Tizen, LG webOS, and Android TV. Built scalable React-based UI components, integrated media playback and OTT workflows, and enhanced performance, accessibility, and cross-device compatibility for production-ready television applications",
      tags: ["ReactJS", "JavaScript", "HTML", "SCSS"],
      image:
        "https://ik.imagekit.io/tp/20241112-tv-streaming-svod.png?tr=w-800,h-456",
      href: "https://ik.imagekit.io/tp/20241112-tv-streaming-svod.png?tr=w-800,h-456",
      links: [
        // {
        //   label: "GitHub",
        //   url: "https://github.com/satya00089/learn-algo",
        //   icon: "SiGithub",
        // },
      ],
      isUnderDevelopment: true,
    },
    {
      id: "BBMP",
      title: "BBMP",
      description:
        "Built and maintained citizen-facing web applications for Bruhat Bengaluru Mahanagara Palike, focusing on responsive UI development, workflow optimization, and seamless integration with backend services. Developed scalable React.js interfaces, improved accessibility and performance, and contributed to digital governance solutions used across municipal operations and public services.",
      tags: [
        // "Terraform",
        // "IaC",
        // "React",
        // "FastAPI",
        // "MongoDB",
        // "AWS",
        // "Azure",
        // "Full Stack",
      ],
      image:
        "https://images-citizenmatters.sgp1.digitaloceanspaces.com/wp-content/uploads-new/2024/02/bbmp_new_website.jpg",
      href: "https://images-citizenmatters.sgp1.digitaloceanspaces.com/wp-content/uploads-new/2024/02/bbmp_new_website.jpg",
      links: [
        // {
        //   label: "GitHub",
        //   url: "https://github.com/satya00089/landing-zone-orchestrator-ui",
        //   icon: "SiGithub",
        // },
      ],
      // isUnderDevelopment: true,
    },
    {
      id: "Interopx",
      title: "Interopx",
      description:
        "Interopx is a health care enterprise platform that seamlessly integrates with EHRs & other Health IT Systems to provide access to available healthcare data , such as patient, disease, treatment, billing, etc. In a harmonized and aggregated format. Access to the health care data you are authorized to must not be more complicated than accessing any other data from external system. The EHR revolution, incentivised through Meaningful Use, has significantly improved the quality of care and at the same time reduced the cost of operating a healthcare business. The next revolutionary transformation of our healthcare system must address the ever increasing cost of providing healthcare to our citizens. We believe that a significant portion of the cost can be attributed to data sharing and interoperability challenges. Our vision is to eliminate these challenges by using an EHR agnostic data access platform that allows secure, scalable, and efficient access to that you are authorized to access.",
      tags: [
        // "Terraform",
        // "IaC",
        // "React",
        // "FastAPI",
        // "MongoDB",
        // "AWS",
        // "Azure",
        // "Full Stack",
      ],
      image:
        "https://interopx.com/wp-content/uploads/2024/03/interopx-booth-scaled-e1710643154201.jpeg",
      href: "https://interopx.com/wp-content/uploads/2024/03/interopx-booth-scaled-e1710643154201.jpeg",
      links: [
        // {
        //   label: "GitHub",
        //   url: "https://github.com/satya00089/landing-zone-orchestrator-ui",
        //   icon: "SiGithub",
        // },
      ],
      // isUnderDevelopment: true,
    },
    {
      id: "SMART Markers",
      title: "SMART Markers",
      description:
        "SmartMarkers is an app that is related to the health care domain, the main moto of this application is to provide the end to end communication between patient and practitioner, here it can include three modules smartmarkers-mainlibrary, patient and practitioner apps, Practitioner can raise a questionnaire to the patient, based on that questionnaire patient has the access to submit the questionnaire responses, here patient can submit multiple responses for a single questionnaire for that we also generated a heatmap for it, for accessing the patient records",
      tags: ["ReactJs", "HTML", "CSS"],
      image:
        "https://avatars.githubusercontent.com/u/55999665?s=280&v=4",
      href: "https://avatars.githubusercontent.com/u/55999665?s=280&v=4",
      links: [
        // {
        //   label: "GitHub",
        //   url: "https://github.com/satya00089/diagrammatic",
        //   icon: "SiGithub",
        // },
      ],
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
