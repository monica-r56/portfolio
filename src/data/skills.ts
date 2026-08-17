export interface Technology {
  name: string;
  icon?: string;
  url?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  accent: string;
  technologies: Technology[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    category: "AI / Machine Learning",
    description: "Models, agents and intelligent system design.",
    accent: "blue",
    technologies: [
      { name: "Python" },
      { name: "Large Language Models (LLMs)" },
      { name: "Agentic AI" },
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "Computer Vision" },
      { name: "OpenCV" },
      { name: "Ollama" },
      { name: "Fast API" },
    ],
  },
  {
    id: "ai-automation",
    category: "AI Automation",
    description: "Workflow orchestration and intelligent automation at scale.",
    accent: "violet",
    technologies: [
      { name: "n8n Enterprise" },
      { name: "Workflow Automation" },
      { name: "AI Agents" },
      { name: "API Integrations" },
      { name: "Temporal" },
    ],
  },
  {
    id: "backend",
    category: "Backend / Applications",
    description: "APIs, data layers and full-stack product engineering.",
    accent: "cyan",
    technologies: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "GraphQL" },
      { name: "Hasura" },
      { name: "REST APIs" },
      { name: "React.js" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "cloud-devops",
    category: "Cloud / Data / DevOps",
    description: "Infrastructure, data pipelines and production systems.",
    accent: "warm",
    technologies: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Airflow" },
      { name: "Sentry" },
      { name: "Grafana" },
      { name: "Git" },
    ],
  },
  {
    id: "languages",
    category: "Languages",
    description: "The languages I write in.",
    accent: "magenta",
    technologies: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
];
