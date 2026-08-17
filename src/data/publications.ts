export interface PublicationItem {
  id: string;
  title: string;
  conference: string;
  year?: string;
  description: string;
  publicationUrl?: string;
  paperUrl?: string;
  tags: string[];
}

export const publications: PublicationItem[] = [
  {
    id: "pub-icosec-2025",
    title: "AI-based Chatbot for Students using RAG in Large Language Models",
    conference: "IEEE ICOSEC 2025",
    description:
      "Built a multilingual RAG-based educational chatbot delivering context-grounded answers from students' own course materials.",
    tags: ["RAG", "LLMs", "NLP", "Educational AI", "Multilingual"],
    publicationUrl: "https://ieeexplore.ieee.org/document/11459535",
  },
  {
    id: "pub-icipcn-2024",
    title: "Automated Detection and Prediction of Brain Tumor using Machine Learning",
    conference: "IEEE ICIPCN 2024",
    description:
      "Applied machine learning and computer vision to automate brain tumor detection from medical imaging data.",
    tags: ["Machine Learning", "Computer Vision", "Medical Imaging", "Healthcare AI"],
    publicationUrl: "https://ieeexplore.ieee.org/document/10660865",
  },
];