export interface CommunityItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  year?: string;
  description: string;
  contribution?: string;
  image?: string;
  link?: string;
  featured?: boolean;
  tags: string[];
}

export const communityItems: CommunityItem[] = [
  {
    id: "gssoc-ambassador",
    title: "GirlScript Summer of Code '26",
    role: "Open Source Contributor & Ambassador",
    organization: "GirlScript Foundation",
    description:
      "Contributing to open source while representing GSSoC'26 within the developer community.",
    featured: true,
    tags: ["Open Source", "Community", "Ambassador", "Mentoring"],
  },

  {
    id: "csi-member",
    title: "Computer Society of India",
    role: "Secretary",
    organization: "CSI",
    description:
      "Led student technical initiatives as Secretary of the Computer Society of India.",
    tags: ["Leadership", "Technical Community", "Engineering"],
  },

  {
    id: "microsoft-learn-student-ambassadors",
    title: "Microsoft Learn Student Ambassadors",
    role: "AI Team Lead · Technical Content Writer",
    organization: "Microsoft",
    description:
      "Led the AI team and created technical content around emerging AI and developer technologies.",
    featured: true,
    tags: ["AI", "Leadership", "Technical Content"],
  },

  {
    id: "google-devs",
    title: "Google Developer Ecosystem",
    role: "Community Member",
    organization: "Google",
    description:
      "Engaged with Google AI, Cloud and developer-focused communities and events.",
    tags: ["Google AI", "Developer Community", "Cloud"],
  },
];