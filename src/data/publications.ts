export interface PublicationItem {
  id: string;
  title: string;
  conference: string;
  year?: string;
  description?: string;
  publicationUrl?: string;
  paperUrl?: string;
  tags?: string[];
}

export const publications: PublicationItem[] = [
  {
    id: "pub-icosec-2025",
    title: "AI-based Chatbot for Students using RAG in Large Language Models",
    conference: "IEEE ICOSEC 2025",
    publicationUrl: "https://ieeexplore.ieee.org/document/11459535",
  },
  {
    id: "pub-icipcn-2024",
    title: "Automated Detection and Prediction of Brain Tumor using Machine Learning",
    conference: "IEEE ICIPCN 2024",
    publicationUrl: "https://ieeexplore.ieee.org/document/10660865",
  },
];