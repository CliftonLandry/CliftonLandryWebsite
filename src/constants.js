export const profile = {
  name: "Clifton Landry",
  title: "Full Stack Engineer",
  tagline:
    "2.5 years building multi-tenant enterprise SaaS, from accessible Angular and React front ends to C#/.NET REST APIs, SQL Server and PostgreSQL databases, AWS services, and CI/CD pipelines.",
  location: "Boston, MA",
  email: "cliftonlandryp@gmail.com",
  resume: `${process.env.PUBLIC_URL}/Clifton_Landry_Resume.pdf`,
};

export const about = [
  "I'm a full stack engineer with 2.5 years of experience at Momentus, an event and venue management SaaS platform.",
  "I joined Momentus in the middle of a UI modernization, rebuilding features from our Aurelia front end as Angular components that meet WCAG 2.1 AA accessibility standards.",
  "From there I grew across the stack: building C#/.NET REST APIs, designing tenant isolation rules, managing data in SQL Server and Snowflake, and working with AWS services like Lambda and Bedrock.",
];

export const highlights = [
  { value: "5×", label: "faster pull request checks" },
  { value: "80%", label: "test coverage standard" },
  { value: "8", label: "CI/CD pipelines built" },
  { value: "4", label: "regions onboarded" },
];

export const experience = [
  {
    company: "Momentus",
    note: "Event and venue management SaaS",
    location: "Remote",
    roles: [
      {
        title: "Software Engineer",
        dates: "Apr 2026 – Oct 2026",
        bullets: [
          "Rebuilt the pull request check and Docker image pipelines in Azure DevOps (images published to AWS ECR), cutting backend checks from ~50 to ~10 minutes and front-end checks from ~30 to ~5 minutes.",
          "Established an 80% line coverage standard with xUnit from the first commit of a new repository, enforced automatically through pull request checks.",
          "Built C#/.NET REST APIs for tenant onboarding and offboarding, plus an AWS Lambda integration layer connecting three products (Standalone, Enterprise, and Elite) for customers across the US, Canada, EMEA, and APAC.",
          "Designed tenant isolation rules covering tenant ID rulesets, database server and name allocation, and unique inbound email addresses per tenant.",
          "Migrated email routing from SendGrid to Postmark for richer features and detailed logging, streaming email logs into Datadog for monitoring.",
          "Designed the initial Snowflake data lake and mart layer, reducing backend calls and giving AI agents a single source of truth for account and contact history across the Enterprise and Elite apps.",
        ],
        stack: ["C#", ".NET", "SQL Server", "PostgreSQL", "AWS Lambda", "AWS ECR", "Docker", "Snowflake", "Azure DevOps", "xUnit", "Datadog"],
      },
      {
        title: "Associate Software Engineer",
        dates: "Apr 2024 – Apr 2026",
        bullets: [
          "Created and shipped a customer-facing AI agent on AWS Bedrock that turns manual entries into new events, writing its prompts and the C#/.NET REST endpoint that feeds it data.",
          "Designed the agent to map ~20 event fields, prioritizing structured inputs before parsing open-ended notes for missing details and validating results.",
          "Migrated core front-end features of a large-scale enterprise event platform from Aurelia to Angular as part of a full UI modernization, built to WCAG 2.1 AA.",
          "Designed an accessible split-screen workspace in Angular that keeps the main content on the left and stacked modals on the right, managed through tabs.",
          "Fixed keyboard accessibility in existing datagrid, dropdown, and modal components.",
          "Built 8 SonarQube CI/CD pipelines from scratch for code quality and security scanning across repositories.",
          "Led a technical spike for the Quick Quotes overhaul, breaking the work into scoped, estimated tickets.",
        ],
        stack: ["TypeScript", "Angular", "C#", ".NET", "SQL Server", "AWS Bedrock", "SonarQube", "Azure DevOps"],
      },
    ],
  },
  {
    company: "Tallan",
    note: "Acquired by EY, 2023",
    location: "Boston, MA",
    roles: [
      {
        title: "Software Development Intern",
        dates: "May 2022 – Aug 2022",
        bullets: [
          "Built features for the Massachusetts Legislative CRM, a web app for communicating with constituents.",
          "Designed and implemented the saved, subjects, and archive email tabs, and owned meeting invite functionality and the meeting service.",
          "Translated user stories into UI improvements across several screens.",
        ],
        stack: ["Angular", "TypeScript", "C#", "SQL", "HTML"],
      },
    ],
  },
];

export const education = {
  school: "University of Massachusetts Lowell",
  degree: "B.S. Computer Science, minor in Mathematics",
  dates: "2019 – 2023",
};

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "C#", "SQL", "HTML", "CSS", "C++", "C"] },
  { group: "Frameworks and data", items: ["Angular", "React", ".NET", "REST APIs", "SQL Server", "PostgreSQL", "Snowflake", "Aurelia"] },
  { group: "Cloud and DevOps", items: ["AWS Lambda", "AWS ECR", "AWS Bedrock", "Docker", "Azure DevOps", "CI/CD", "xUnit", "SonarQube", "Datadog", "Postmark", "Git", "Figma"] },
];

export const projects = [
  {
    name: "Schedgy",
    desc: "A web app paired with a Discord bot that helps users schedule events.",
    link: "https://github.com/GarbageCan622/Schedgy",
  },
  {
    name: "Daily Dining Hall Rater",
    desc: "A social media app for rating UMass Lowell's dining halls and interacting with other students.",
    link: "https://github.com/TheoOP/RateMyDiningHallApp",
  },
  {
    name: "Gradebook Skeleton",
    desc: "A gradebook prototype with GPA calculation, grade prediction, and per-assignment curving.",
    link: "https://github.com/CliftonLandry/Software-Engineer-F22",
  },
];

export const contactLinks = [
  { name: "GitHub", link: "https://github.com/CliftonLandry" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/clifton-landry-b14253173/" },
  { name: "Email", link: "mailto:cliftonlandryp@gmail.com" },
];
