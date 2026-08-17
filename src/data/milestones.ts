export interface Milestone {
  id: string;
  label: string;
  value: string;
  description: string;
  isProjected?: boolean;
}

export const impactMetrics: Milestone[] = [
  {
    id: "hours-saved",
    label: "Manual effort saved",
    value: "~80 hrs/month",
    description: "Manual operational effort saved through organization-level automation systems at Autodesk.",
  },
  {
    id: "uptime",
    label: "Production uptime",
    value: "99.9%",
    description: "Uptime maintained for production backend and API infrastructure at Talview.",
  },
  {
    id: "efficiency",
    label: "Efficiency improvement",
    value: "~24%",
    description: "Product and operational efficiency improvement through scalable workflow and data infrastructure.",
  },
  {
    id: "oversight-reduction",
    label: "Projected oversight reduction",
    value: "~60%",
    description: "Projected reduction in manual oversight and operational cost from the multi-agent proctoring solution.",
    isProjected: true,
  },
];

export interface CredibilityItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

// Derive hackathon count from actual hackathon data
export const hackathonCount = 5;

export const credibilityItems: CredibilityItem[] = [
  {
    id: "impact",
    value: "AI → Impact",
    label: "Turning AI Into Impact",
  },
  {
    id: "hackathons",
    value: `${hackathonCount}×`,
    label: "Hackathon Builder",
  },
  {
    id: "ieee",
    value: "IEEE",
    label: "Research Publications",
    sublabel: "2 Published",
  },
  {
    id: "gssoc",
    value: "GSSoC'26",
    label: "Open Source",
    sublabel: "Contributor & Ambassador",
  },
  {
    id: "speaker",
    value: "Speaker",
    label: "Workshop & Technical Talks",
  },
];

export const education = {
  degree: "B.E. (Hons.) Computer Science & Engineering (Specialized in AI & ML)",
  institution: "Sri Ramakrishna Engineering College - Anna University",
  cgpa: "8.4/10",
  specialization: "AI & ML Specialization",
  specializationScore: "9.05/10",
};
