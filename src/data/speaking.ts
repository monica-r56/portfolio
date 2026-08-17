export interface SpeakingItem {
  id: string;
  title: string;
  type: "Workshop" | "Talk" | "Panel" | "Event" | "Conference" | "Workshop" ;
  organization: string;
  date: string;
  description: string;
  topics: string[];
  image?: string;
  imageAlt?: string;
  linkedinPostUrl?: string;
  eventUrl?: string;
  featured?: boolean;
  audience?: string;
  highlight?: string;
}

export const speakingEvents: SpeakingItem[] = [
  {
    id: "ai-agentic-workshop-2026",
    title: "AI & Agentic AI Workshop",
    type: "Workshop",
    organization: "Technical Workshop",
    date: "2026",
    description:
      "Delivered a practical session helping aspiring builders understand and apply Generative AI and Agentic AI concepts.",
    topics: [
      "Generative AI",
      "Agentic AI",
      "LLMs",
      "AI Agents",
      "n8n Automation",
    ],
    image: "public/workshop.jpeg",
    imageAlt: "Monica R. speaking at AI & Agentic AI Workshop",
    featured: true,
    audience: "Aspiring AI builders and developers",
    linkedinPostUrl:"https://lnkd.in/p/giKCxYNd",
    highlight:
      "Built the complete job-search automation live from scratch - connecting an LLM, Google Workspace and n8n into one working AI workflow.",
  },
];

export interface EventItem {
  id: string;
  title: string;
  type: "Conference" | "Hackathon" | "Community" | "Summit" | "Program" | "Workshop";
  organization: string;
  date: string;
  description?: string;
  whatILearned?: string;
  topics?: string[];
  image?: string;
  imageAlt?: string;
  linkedinPostUrl?: string;
  eventUrl?: string;
}

export const hackathons: EventItem[] = [
  {
    id: "hackblr-2026",
    title: "HackBLR 2026",
    type: "Hackathon",
    organization: "Geek Room",
    date: "2026",
    topics: [
      "AI Agents",
      "Voice AI",
      "Vapi",
      "Qdrant",
      "Gemini",
      "GitHub",
    ],
    whatILearned:
      "Built a voice-native AI pair programmer and presented an AI product under intense time constraints.",
  },

  {
    id: "blr-ai-hack-day",
    title: "Bengaluru AI Hack Day",
    type: "Hackathon",
    organization: "Polaris School of Technology",
    date: "2025",
    topics: [
      "Agentic AI",
      "Vibe Coding",
      "Automation",
      "Make",
      "Lovable",
    ],
    whatILearned:
      "Built Vibe Freelance, an agentic platform for freelancers and creators.",
  },

  {
    id: "sih-2024",
    title: "Smart India Hackathon 2024",
    type: "Hackathon",
    organization: "Government of India / ISRO",
    date: "2024",
    topics: [
      "GNSS",
      "AI",
      "Map Matching",
      "OpenStreetMap",
    ],
    whatILearned:
      "Led and built TollTag - a GNSS-based vehicular movement classification system using AI map matching. Translated a real-world government problem into a working AI prototype.",
  },

  {
    id: "techgium-2024",
    title: "TECHgium - 7th Edition",
    type: "Hackathon",
    organization: "L&T Technology Services",
    date: "2024",
    topics: [
      "AI",
      "Machine Learning",
      "Healthcare",
      "CT Imaging",
    ],
    whatILearned:
      "Explored AI-driven bronchoscopy navigation through CT scan integration. Applied AI concepts to a real-world medical imaging challenge.",
  },
];

export const communityEvents: EventItem[] = [
  {
    id: "google-builder-day",
    title: "Google Cloud Builder Day Bengaluru",
    type: "Summit",
    organization: "Google",
    date: "2026",
    description:
      "Built and deployed AI agents hands-on using ADK, MCP, Cloud SQL and Cloud Run.",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/monica-krishnan_builderday-ai-google-activity-7432050568719904768-VVFj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
  {
    id: "aws-summit",
    title: "AWS Summit Bengaluru",
    type: "Summit",
    organization: "Amazon Web Services",
    date: "2026",
    description:
      "Explored AI agents, robotics, multilingual models and MCP-powered intelligent systems.",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/monica-krishnan_awssummit-aws-ai-activity-7455232222598483968-ADQz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
  {
    id: "atlassian-unleash",
    title: "Atlassian Unleash",
    type: "Summit",
    organization: "Atlassian",
    date: "2026",
    description:
      "Explored how accountable, context-aware AI is being built for real-world organizations.",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/monica-krishnan_atlassian-atlassianunleash-ai-activity-7478456286863323137-H2Uk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
  {
    id: "open-source-india",
    title: "Open Source India",
    type: "Conference",
    organization: "Open Source India",
    date: "2025",
    description:
      "Explored observability, open AI governance and InnerSource practices at scale.",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/monica-krishnan_opensource-osi-foss-activity-7402332985586302976-WEG4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
  {
    id: "ibm-techxchange",
    title: "IBM TechXchange",
    type: "Workshop",
    organization: "IBM",
    date: "2025",
    description:
      "Explored enterprise AI, cloud technologies and emerging developer tools.",
    linkedinPostUrl: "https://www.linkedin.com/posts/monica-krishnan_agenticai-ibm-ibmtechxchange-activity-7351223920370356224-CBPy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
  {
    id: "techsync-github",
    title: "TechSync: OSCode × GitHub Education",
    type: "Community",
    organization: "OSCode × GitHub Education",
    date: "2026",
    description:
      "Explored open-source collaboration, developer workflows and building in public.",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/monica-krishnan_opensource-githubeducation-developercommunity-activity-7424106854911328256-CcNh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgwSkABUOkjWmaM5vUprwKFrFlr0DFFAFI",
  },
];
