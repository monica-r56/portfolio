export interface ExperienceItem {
  id: string;
  organization: string;
  logo?: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  shortDescription: string;
  story: string;
  impactMetric?: string;
  impactLabel?: string;
  impactNote?: string;
  technologies?: string[];
  responsibilities: string[];
  links?: { label: string; url: string }[];
  image?: string;
  featured?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "autodesk-sde",
    organization: "Autodesk",
    role: "Software Development Engineer – AI, Data & Automation",
    startDate: "Apr 2025",
    endDate: "Present",
    location: "Bangalore, India",
    shortDescription:
      "Building enterprise-grade AI automation infrastructure and Agentic AI workflows that save meaningful hours every week across the organization.",
    story:
      "At Autodesk, I work at the intersection of AI and enterprise engineering - building automation systems that scale across the organization. My work involves designing reusable automation templates using n8n Enterprise, orchestrating Agentic AI workflows with Python and AWS, and building the AI services and APIs that power production automation.",
    responsibilities: [
      "Designing and building enterprise AI-powered automation systems using n8n Enterprise",
      "Developing reusable automation templates and Agentic AI workflows with Python and AWS",
      "Building AI services, APIs and cloud infrastructure for production automation",
      "Driving organization-level automation initiatives resulting in ~80 hrs/month saved",
    ],
    featured: true,
  },
  {
    id: "talview-ase",
    organization: "Talview",
    logo: "/images/logos/talview.svg",
    role: "Associate Software Engineer (AI)",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    location: "Bangalore, India",
    shortDescription:
      "Took ownership of a production Agentic AI Workflow Automation platform, maintaining 99.9% uptime while delivering meaningful efficiency improvements.",
    story:
      "As an Associate Software Engineer at Talview, I worked on a production Agentic AI Workflow Automation platform built on Node.js, PostgreSQL and Hasura GraphQL. I built and maintained scalable APIs designed to handle high-volume traffic reliably, contributing to a ~24% improvement in product and operational efficiency.",
    responsibilities: [
      "Owned production Agentic AI Workflow Automation platform from development through maintenance",
      "Built scalable APIs with Node.js and Hasura GraphQL for high-volume production traffic",
      "Maintained 99.9% uptime across production backend and API infrastructure",
      "Drove ~24% improvement in product and operational efficiency through scalable workflow infrastructure",
    ],
  },
  {
    id: "talview-intern",
    organization: "Talview",
    logo: "/images/logos/talview.svg",
    role: "Software Development Intern",
    startDate: "Apr 2024",
    endDate: "Sep 2024",
    location: "Bangalore, India",
    shortDescription:
      "Built production-grade multi-agent proctoring systems using LangGraph, LLMs and Vision-Language Models - with projected major reductions in manual oversight.",
    story:
      "My internship at Talview was where I first built production multi-agent AI systems. Working across the full stack - React, Redux, Node.js, GraphQL, PostgreSQL - I designed and implemented a multi-agent proctoring solution using LangGraph, LLMs and Vision-Language Models with Docker orchestration.",
    responsibilities: [
      "Built and maintained full-stack features across React, Redux, Node.js and GraphQL/Hasura",
      "Designed and implemented a multi-agent proctoring solution using LangGraph and LLMs",
      "Integrated Vision-Language Models for intelligent monitoring capabilities",
      "Containerized multi-agent workflows using Docker for reproducible deployment",
    ],
  },
];
