export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  positioning: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
  websiteUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  year?: string;
  category: string;
  tags: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "codemate",
    number: "01",
    title: "CodeMate",
    subtitle: "Voice-Native Pair Programmer",
    positioning: "A hands-free, conversational coding agent that integrates directly into your IDE.",
    description:
      "CodeMate is a voice-first coding agent designed to make development more natural - letting developers think out loud, get intelligent responses and take action without leaving their flow state.",
    problem:
      "Developers constantly context-switch between their IDE and AI chat interfaces. Text-based AI tools interrupt the coding flow rather than augmenting it.",
    approach:
      "Built a multi-agent architecture using MCP tools that connects voice input to real IDE actions - reading files, writing code, querying GitHub and Notion for semantic knowledge, all through real-time speech interaction.",
    result:
      "A fully functional voice-first coding agent with IDE integration, multi-agent coordination, and hands-free conversational development that eliminates the need to leave the editor.",
    technologies: ["AI Agents", "MCP", "LLMs", "STT/TTS", "GitHub API", "Notion API"],
    image: "public/codemate.png",
    imageAlt: "CodeMate voice-native AI pair programmer interface",
    githubUrl: "https://github.com/monica-r56/CodeMate",
    featured: true,
    category: "AI Agents",
    tags: ["AI Agents", "MCP", "LLMs", "STT/TTS"],
  },
  {
    id: "travel-concierge",
    number: "02",
    title: "AutoNomad",
    subtitle: "Agentic AI Travel Planner",
    positioning: "A multi-agent system that builds personalized travel itineraries from natural conversation.",
    description:
      "Travel Concierge orchestrates specialized AI agents to generate complete, budget-aware travel itineraries - handling weather, transportation, accommodation, activities and routing in one coherent plan.",
    problem:
      "Travel planning requires synthesizing dozens of data sources - weather, transport, costs, logistics - that no single tool handles well together.",
    approach:
      "Designed a LangGraph-powered multi-agent system where specialized agents handle weather, transportation, accommodation, activity costs and map routing APIs. A FastAPI backend coordinates orchestration and a React frontend delivers the interactive experience.",
    result:
      "A production-quality travel planner that generates personalized, budget-aware itineraries with real data from multiple APIs, rendered with interactive maps.",
    technologies: ["Python", "LangGraph", "FastAPI", "React", "Map APIs", "Weather APIs"],
    image: "public/autonomad.png",
    imageAlt: "Travel Concierge AI travel planning interface with map",
    featured: true,
    category: "AI Agents",
    tags: ["Python", "LangGraph", "FastAPI", "React"],
  },
    {
    id: "ai-job-search-agent",
    number: "03",
    title: "AI Job Search Agent",
    subtitle: "Resume-Driven Job Search Automation",
    positioning:
      "An AI-powered n8n automation that turns a resume into personalized job-search filters and automatically discovers matching opportunities.",
    description:
      "An intelligent job-search automation that analyzes a resume using Google Gemini, generates personalized LinkedIn job-search filters, searches for matching roles, extracts relevant job details, and stores opportunities in Google Sheets for tracking.",
    problem:
      "Job discovery often requires repeatedly translating a candidate's skills and experience into search queries, scanning job listings, extracting relevant information, and maintaining a separate tracker. This creates repetitive work and makes the search process difficult to scale.",
    approach:
      "Built two connected n8n workflows: one analyzes a resume PDF with Google Gemini and generates personalized LinkedIn search filters, while the second uses those filters to search LinkedIn jobs, extract role details, and automatically store the results in Google Sheets.",
    result:
      "Created an end-to-end automated job-discovery pipeline that transforms a resume into personalized search criteria and continuously organizes matching opportunities with role, company, location, description, application link, and status information.",
    technologies: [
      "n8n",
      "Google Gemini",
      "Google Drive API",
      "Google Docs API",
      "Google Sheets API",
      "LinkedIn Job Search",
      "JavaScript",
    ],
    image: "public/n8n-ai-job.png",
    imageAlt:
      "AI-powered resume-driven job search automation workflow built with n8n",
    githubUrl:
      "https://github.com/monica-r56/ai-job-search-agent-n8n",
    featured: false,
    category: "AI Automation",
    tags: [
      "n8n",
      "AI Automation",
      "Gemini",
    ],
  },
  {
    id: "tolltag",
    number: "04",
    title: "TollTag",
    subtitle: "AI-based Map Matching",
    positioning: "GNSS-based vehicular movement classification model for ISRO's problem statement at Smart India Hackathon 2024.",
    description:
      "TollTag solves the problem of classifying vehicular movement across highways and service roads using GNSS data and sequential learning - an ISRO problem statement tackled at the Smart India Hackathon 2024 Grand Finale.",
    problem:
      "Accurately distinguishing whether a vehicle is on a highway versus a service road from GPS coordinates alone requires context-aware AI that understands road geometry and movement patterns.",
    approach:
      "Led a team to build a GNSS map matching system using OpenStreetMap data with sequential learning for road-segment classification. Added geospatial visualization to validate and interpret results.",
    result:
      "Built a working system that classifies vehicular movement with high accuracy across highway and service road segments using GNSS and ML.",
    technologies: ["GNSS", "OpenStreetMap", "Sequential Learning", "Python", "Geospatial Viz", "ML"],
    image: "public/TollTag.png",
    imageAlt: "TollTag geospatial map matching visualization",
    featured: true,
    category: "AI / ML",
    tags: ["GNSS", "Map Matching", "Team Lead", "Hackathon"],
  },
  {
    id: "edu-chatbot",
    number: "05",
    title: "AI-Powered Educational Chatbot",
    subtitle: "RAG + Multilingual AI for Students",
    positioning: "Context-grounded answers from user-uploaded books, with regional language support for inclusive education.",
    description:
      "An AI chatbot designed for students that lets them upload their own course books and ask questions - receiving context-grounded answers powered by RAG and Gemini, with support for regional languages.",
    problem:
      "Students often struggle to find specific answers in dense textbooks, and generic AI models hallucinate answers that lack grounding in the actual course material.",
    approach:
      "Built a RAG pipeline using Gemini and NLP that indexes user-uploaded books and generates answers grounded exclusively in those documents. Added multilingual support for regional languages to broaden accessibility.",
    result:
      "A published IEEE research contribution (ICOSEC 2025) and a functional educational tool that gives students reliable, source-grounded answers in their preferred language.",
    technologies: ["RAG", "Gemini", "NLP", "Python", "Multilingual NLP", "Vector DB"],
    image: "public/chatbot.png",
    imageAlt: "AI Educational Chatbot interface with multilingual support",
    featured: false,
    category: "AI / NLP",
    tags: ["RAG", "Gemini", "NLP", "IEEE Published"],
  },
];
