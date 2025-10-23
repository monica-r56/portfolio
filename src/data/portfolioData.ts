import { Code, Layers, Database, Cpu, Settings, Zap, CpuIcon, Dumbbell } from 'lucide-react';

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: any;
  accent: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
}

export interface ExtracurricularItem {
  title: string;
  description: string;
  icon?: any;
}

export interface EventItem {
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  year: string;
  link: string;
}

export interface AchievementItemData {
  text: string;
  image: string; 
}

export interface PortfolioData {
  intro: {
    name: string;
    title: string;
    bio: string;
    profilePic: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItemData[]; 
  extracurriculars: ExtracurricularItem[];
  events: EventItem[];
  publications: PublicationItem[];
}

export const portfolioData: PortfolioData = {
  intro: {
    name: "Monica R",
    title: "Software Engineer & AI Enthusiast",
    bio: `I’m a Software Engineer who builds powerful, reliable software designed to scale. The work involves taking full-stack tech and database solutions to deliver high-availability platforms that are consistently resilient and performant.   
    My core specialization is Applied AI where I develop Generative AI and Agentic Architectures leveraging modern AI tools, to transform complex enterprise challenges into autonomous systems—intelligent software that learns and optimizes itself.
    Explore below to dive into my full technical journey and project deep dives.`,    
    profilePic: "assets/monica.png"
      },
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Talview",
      period: "October '25 - Present",
      description: "Working in the backend team, I focus on building and optimizing robust services for Talview's Workflow Automation Tools. This includes designing scalable APIs and ensuring seamless data flow for enterprise solutions."
    },
    {
      title: "Software Developer Intern",
      company: "Talview",
      period: "April '25 - October '25",
      description: "Applied frontend and backend technologies using React, Tailwind, Redux, Node.js, Express, GraphQL, REST API, Hasura, PostgreSQL, Git, and Docker on software projects. Worked with Data Science team to build native data science tools to be used by product teams to improve the productivity, analyzed on developing agentic workflow using Langgraph for proctoring to reduce the need manual proctring and updates."
    },
    {
      title: "Intern",
      company: "National Institute of Technology, Tiruchirappalli (NIT-T)",
      period: "June '24 - Aug '24",
      description: "Conducted in-depth research & analysis on diverse business models to understand user needs and market gaps. Actively supported startup growth by identifying opportunities, evaluating product-market fit, and aligning features with business goals."
    },
    {
      title: "AI Intern",
      company: "RBG.AI",
      period: "Dec '23 - Jan '24",
      description: "Implemented semantic segmentation of UAV and satellite datasets using ML models & analyzed dataset complexity, explored ML algorithms, determining segmentation."
    }
  ],
  education: [
    {
      degree: "Bachelors of Engineering (Honors) in Computer Science and Engineering (Specialized in AI & ML)",
      school: "Sri Ramakrishna Engineering College - Anna University",
      year: "2021 - 2025",
      gpa: "8.4/10, Specialization: 9.1/10"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "Python"],
      icon: Code,
      accent: 'bg-red-200/50 text-red-700 dark:bg-red-800/30 dark:text-red-300'
    },
    {
      category: "Software Development",
      skills: ["HTML", "CSS", "React", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "Storybook", "Node.js", "Express.js", "GraphQL", "REST API", "Hasura", "Apollo Server"],
      icon: Layers,
      accent: 'bg-blue-200/50 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300'
    },
    {
      category: "Database & Data Engineering",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "ETL Pipeline", "Data cleaning"],
      icon: Database,
      accent: 'bg-yellow-200/50 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300'
    },
    {
      category: "AI & ML",
      skills: ["Supervised & Unsupervised Learning", "Neural Networks", "Deep Learning", "Natural Language Processing", "RAG", "Generative AI", "LLMs", "Agentic AI", "Ollama", "Chatbot Development", "Computer Vision", "Image Processing"],
      icon: Cpu,
      accent: 'bg-purple-200/50 text-purple-700 dark:bg-purple-800/30 dark:text-purple-300'
    },
    {
      category: "Libraries & Frameworks",
      skills: ["Keras", "TensorFlow", "Gradio", "Scikit-learn", "Langchain", "Langgraph", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Streamlit", "OpenCV", "Fast API"],
      icon: Settings,
      accent: 'bg-green-200/50 text-green-700 dark:bg-green-800/30 dark:text-green-300'
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Kubernetes", "Kaggle", "Hugging Face", "Metabase", "Airflow", "Meltano", "VS Code", "Webstorm"],
      icon: Zap,
      accent: 'bg-pink-200/50 text-pink-700 dark:bg-pink-800/30 dark:text-pink-300'
    }
  ],
  projects: [
    {
      title: "AI-powered Chatbot for Education & Opportunities for School Dropouts in Indian regional languages",
      description: "Developed an AI chatbot for Indian school dropouts with regional-language support, career guidance, and book-based Q&A using lightweight NLP, sentence transformers, and RAG for context-aware, multilingual interactions.",
      tech: ["Python", "RAG", "NLP", "React", "Node.js", "Express", "Gemini", "Chatbot"]
    },
    {
      title: "Psychometric Test App with AI analysis",
      description: "Developed a full-stack app for Psychometric Test designed for corporate hiring of candidates, which gives quick analysis summary of the candidate's responses on the job fit",
      tech: ["React", "Tailwind", "TypeScript", "Node.js", "Express", "PostgreSQL", "Hasura GraphQL", "Python", "Gemini"]
    },
    {
      title: "TollTag - AI based Map Matching",
      description: "Developed an AI-ML model for ISRO's problem statement by the Government's Smart India Hackathon-2024 to classify vehicular movement on highways and service roads using GNSS data, addressing biases and data gaps for GNSS-based tolling.",
      tech: ["Python", "OpenStreetMap", "GNSS"]
    },
    {
      title: "Detection and classification of brain tumor",
      description: "Developed an ML model that predicts the type of brain tumor using the MRI datasets and analyzing Logistic Regression, CNN, and VGG architectures achieving the highest accuracy of 99.95%, enhancing the Medical field with advanced technology. Developed a web application using Streamlit to deploy and use efficiently.",
      tech: ["Python", "Medical Image Preprocessing", "Neural Networks", "Streamlit"]
    },
    {
      title: "Classification of leaves based on healthiness & nutrition efficiency using Machine Learning",
      description: "Developed CNN architecture for real-time leaf image classification, distinguishing freshness or dry & nutrition content level. Applied advanced image preprocessing and data augmentation techniques to improve model accuracy and robustness in dynamic conditions",
      tech: ["Python", "Image Processing", "Neural Networks", "Streamlit"]
    }
  ],

  achievements: [
    {
      text: "Best Outgoing Student of the Department (CSE)",
      image: "assets/Shield.jpg", 
    },
    {
      text: "SIH 2024 Finalist for the project titled 'TollTag - AI based Map Matching' proposed by Indian Space Research Organization(ISRO)",
      image: "assets/SIH.jpg",
    },
    {
      text: "Certificate of Recognition for the Innovative Concept on 'Bronchoscopy-CT Scan Integration for Precise Navigation' presented at L&T Technology Services",
      image: "assets/techgium.jpg",
    },
   {
      text: "Attended CATC CUM IGC RDC Launch Camp by 4TamilNadu Battalion NCC",
      image: "assets/NCC.jpg",
    },
    {
      text: "Throwball team Winner & Best Dance Award by CATC Camp of NCC",
      image: "assets/NCC_Medal.jpg",
    },
    {
      text: "Secured runner-up for the Business Plan event, NICHE'22 by the Department of MBA, SREC",
      image: "assets/Business.jpg",
    },
    {
      text: "Secured 3rd prize for the Mathematical Model event conducted at SREC",
      image: "assets/Math.jpg",
    },
    {
      text: "Table tennis winner in Covai ties and runner-up in district-level zonal match",
      image: "assets/TT.jpg",
    }
  ],
  extracurriculars: [
    {
      title: "Lead Event Co-ordinator",
      description: "Best Manager event at Elements2k24, a national level technical symposium"
    },
    {
      title: "Jury member for AI&ML",
      description: "Hackheist'24, a national level tech event conducted by Microsoft Learn Student Ambassadors(MLSA)"
    },
    {
      title: "Secretary",
      description: "Computer Society of India (2024 - 2025)"
    },
    {
      title: "AI Team Lead",
      description: "Microsoft Learn Student Ambassadors Club (2023 - 2024)",
      icon: CpuIcon
    },
    {
      title: "Technical Content Writer Executive Member",
      description: "Microsoft Learn Student Ambassadors Club (2022 - 2023)"
    },
    {
      title: "Cadet",
      description: "National Cadet Corps [NCC] (2021 - 2023)"
    },
    {
      title: "Public Relations Executive Member",
      description: "Google Developers Student Club"
    },
    {
      title: "Sports player",
      description: "Table Tennis, Badminton, Roller Skating",
      icon: Dumbbell
    }
  ],
  events: [
    {
      title: "IBM TechXcange Program 2025 Level 2",
      description: "Advanced training on Agentic AI capabilities using IBM watsonx Orchestrate. Focused on building and deploying autonomous AI agents.",
      date: "Spring 2025",
      image: "assets/ai-workshop-level-2.png"
    }
  ],
  publications: [
    {
      title: "AI based Chatbot for Students using RAG in Large Language Models",
      journal: "IEEE's 6th International Conference on Smart Electronics and Communication (ICOSEC)",
      year: "2025",
      link: "#"
    },
    {
      title: "Automated Detection and Prediction of Brain Tumor using ML",
      journal: "IEEE's 5th International Conference on Image Processing and Capsule Networks (ICIPCN)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10660865"
    }
  ]
};
