
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, BookOpen, Code, Trophy, Users, FileText, Mail, Download, ExternalLink, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'experience', 'education', 'skills', 'projects', 'achievements', 'extracurriculars', 'publications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'intro', label: 'Intro', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurriculars', label: 'Activities', icon: Users },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12">
            <div className="flex space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-2 py-1.5 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-white/20 text-gray-800 font-medium'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={14} />
                    <span className="text-xs font-medium hidden sm:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section id="intro" className="section-padding pt-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md mx-auto mb-8 animate-float flex items-center justify-center border border-white/30">
            <img
  src="/1000030998.png"
  alt="Profile Photo"
  className="w-32 h-32 rounded-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
/>

            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-800 mb-6">
              <span className="gradient-text">Monica R</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about creating innovative digital solutions that make a difference. 
              I combine technical expertise with creative thinking to build exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Software Developer Intern",
                company: "Talview",
                period: "April '25 - Present",
                description: "Applied frontend and backend technologies using React, Tailwind, Redux, Node.js, Express, GraphQL, REST API, Hasura, PostgreSQL, Git, and Docker on software projects."
              },
              {
                title: "Intern",
                company: "National Institute of Technology, Tiruchirappalli (NIT-T)",
                period: "June '24 - Aug '24",
                description: "Conducted in-depth research & analysis on diverse business models to understand user needs and market gaps. Actively supported startup growth by identifying opportunities, evaluating product-market fit, interacting with customers how a product brings value to maximum users & aligning features with business goals."
              },
              {
                title:"AI Intern",
                company: "RBG.AI",
                period:"Dec '23 - Jan '24",
                description:" Implemented semantic segmentation of UAV and satellite datasets using ML models & analyzed dataset complexity, explored ML algorithms, determining segmentation."
              }
            ].map((job, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <Badge className="bg-gray-800 text-white mt-2 md:mt-0">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-gray-700">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {[
              {
                degree: "Bachelors of Engineering (Honors) in Computer Science and Engineering (Specialized in AI & ML)",
                school: "Sri Ramakrishna Engineering College - Anna University",
                year: "2021 - 2025",
                gpa: "8.4/10, Specialization: 9.1/10"
              }
    
            ].map((edu, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.school}</p>
                <div className="flex justify-between items-center">
                  <Badge className="bg-gray-800 text-white">
                    {edu.year}
                  </Badge>
                  <span className="text-gray-700">GPA: {edu.gpa}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category:"Programming Languages",
                skills:["C", "C++", "Java", "Python"]
              },
              {
                category: "Software Development",
                skills: ["HTML","CSS", "React","JavaScript", "TypeScript", "Tailwind CSS", "Storybook","Node.js","Express.js","GraphQL", "REST API","Hasura","Apollo Server"]
              },
              {
                category: "Database",
                skills: ["MySQL", "PostgreSQL","MongoDB"]
              },
              {
                category: "Artificial Intelligence & Machine Learning",
                skills: ["Supervised & Unsupervised Learning", "Neural Networks", "Deep Learning", "Natural Language Processing", "Retrieval-Augmented Generation (RAG)", "Generative AI", "Large Language Models (LLMs)", "Chatbot Development", "Computer Vision", "Image Processing"]
              },
              {
                category:"Libraries	&	Frameworks",
                skills:["Keras", "TensorFlow", "Gradio", "Scikit-learn", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Streamlit", "OpenCV", "Fast API"]
              },
              {
                category:"Tools & Platforms",
                skills:["Git", "GitHub", "Docker", "Kubernetes", "VS Code", "Kaggle", "Hugging Face"]
              }
            ].map((category, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: " AI-powered	Chatbot	for	Education	&	Opportunities	for	School	Dropouts	in	Indian	regional languages",
                description: "Developed an AI chatbot for Indian school dropouts with regional-language support, career guidance, and book-based Q&A using lightweight NLP, sentence transformers, and RAG for context-aware, multilingual interactions.",
                tech: ["Python", "RAG", "NLP","React","Node.js","Express","Gemini","Chatbot"]
              },
              {
                title:"Psychometric Test App with AI analysis",
                description:"Developed a full-stack app for Psychometric Test designed for corporate hiring of candidates, which gives quick analysis summary of the candidate's responses on the job fit",
                tech:["React","Tailwind","Vit","TypeScript","Node.js","Express","PostgreSQL","Hasura GraphQL","Python","Gemini"]
              },
              {
                title: " TollTag - AI based Map	Matching",
                description: "Developed an AI-ML model for ISRO's problem statement by the Government’s Smart India Hackathon-2024 to classify vehicular movement on highways and service roads using GNSS data, addressing biases and data gaps for GNSS-based tolling. Integrated",
                tech: ["Python", "OpenStreetMap", "GNSS"]
              },
              {
                title: " Detection	and	classification	of	brain	tumor",
                description: "Developed an ML model that predicts the type of brain tumor using the MRI datasets and analyzing Logistic Regression, CNN, and VGG architectures achieving the highest accuracy of 99.95%, enhancing the Medical field with advanced technology. Developed a web application using Streamlit to deploy and use efficiently.",
                tech: ["Python", "Medical Image Preprocessing", "Neural Networks","Streamlit"]
              },
              {
                title:" Classification	of	leaves	based	on	healthiness	&	nutrition	efficiency	using	Machine	Learning",
                description:"Developed CNN architecture for real-time leaf image classification, distinguishing freshness or dry & nutrition content level. Applied advanced image preprocessing and data augmentation techniques to improve model accuracy and robustness in dynamic conditions",
                tech:["Python","Image Processing","Neural Networks","Streamlit"]
              }
            ].map((project, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-gray-600 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Best	Outgoing	Student	of the Department (CSE)",
              "SIH 2024 Finalist for the project titled “TollTag - AI based	Map	Matching” proposed by Indian Space Research Organization(ISRO)",
              "Certificate of Recognition	for	the	Innovative	Concept on “Bronchoscopy-CT	Scan	Integration	for Precise	Navigation” presented at L&T Technology Services",
              "Secured runner-up for the Business Plan event, NICHE’22 by the Department of MBA, SREC",
              "Attended CATC	CUM	IGC	RDC	Launch	Camp by 4TamilNadu Battalion NCC",
              "Secured 3rd prize for the Mathematical Model event conducted at SREC",
              "Throwball team Winner & Best Dance Award by CATC Camp of NCC",
              "Table tennis winner in Covai ties and runner-up in district-level zonal match"
            ].map((achievement, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <Trophy className="text-yellow-600 mr-4" size={24} />
                  <p className="text-gray-800 font-medium">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            <span className="gradient-text">Extracurricular</span> Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Event Co-ordinator",
                description: "Best Manager event at Elements2k24, a national level technical symposium"
              },
              {
                title: "Jury	member	for	AI&ML",
                description: "Hackheist’24, a national level tech event conducted by Microsoft Learn Student Ambassadors(MLSA)"
              },
              {
                title:"Secretary",
                description:"Computer Society of India (2024 - 2025)"
              },
              {
                title:"AI Team Lead",
                description: "Microsoft Learn Student Ambassadors Club (2023 - 2024)"
              },
              {
                title: "Technical	Content	Writer	Executive	Member",
                description:"Microsoft Learn Student Ambassadors Club (2022 - 2023)"
              },
              {
                title:"Cadet",
                description:"National	Cadet	Corps	[NCC] (2021 - 2023)"
              },
              {
                title:"Public	Relations	Executive	Member",
                description:"Google Developers Student Club"
              },
              {
                title:"Sports player",
                description:"Table Tennis, Badminton, Roller Skating"
              }
            ].map((activity, index) => (
              <Card key={index} className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-700">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            <span className="gradient-text">Publications</span>
          </h2>
          <div className="space-y-6">
  {[
    {
      title: "Automated Detection and Prediction of Brain Tumor using ML",
      journal: "IEEE’s 5th International Conference on Image Processing and Capsule Networks (ICIPCN)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10660865"
    }
  ].map((publication, index) => (
    <Card
      key={index}
      className="card-gradient p-6 transform hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {publication.title}
          </h3>
          <p className="text-gray-600">{publication.journal}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2">
          <Badge className="bg-gray-800 text-white w-fit">{publication.year}</Badge>
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-900 transition"
          >
            View Paper
          </a>
        </div>
      </div>
    </Card>
  ))}
</div>

          
        
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Let's <span className="gradient-text">Connect</span>
          </h2>
    
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
              <Mail className="text-gray-700 mx-auto mb-4" size={32} />
              <p className="text-gray-800 font-medium">Email</p>
              <p className="text-gray-600">monicasrikrish@gmail.com</p>
            </Card>
            <Card className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
              <Linkedin className="text-gray-700 mx-auto mb-4" size={32} />
              <p className="text-gray-800 font-medium">Linkedin</p>
              <p className="text-gray-600">linkedin.com/in/monica-krishnan</p>
            </Card>
            <Card className="card-gradient p-6 transform hover:scale-105 transition-all duration-300">
              <MapPin className="text-gray-700 mx-auto mb-4" size={32} />
              <p className="text-gray-800 font-medium">Location</p>
              <p className="text-gray-600">Bangalore, India</p>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="http://www.linkedin.com/in/monica-krishnan"
            target="_blank"
             rel="noopener noreferrer">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Linkedin size={24} />
            </Button></a>
            <a href="https://github.com/monica-r56"
            target="_blank"
             rel="noopener noreferrer">       
            <Button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Github size={24} />
            </Button></a>
            <a href="mailto:monicasrikrish@gmail.com"
            target="_blank"
             rel="noopener noreferrer">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail size={24} />
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/10 border-t border-white/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 Monica R. Crafted with ❤️ and lots of ☕!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
