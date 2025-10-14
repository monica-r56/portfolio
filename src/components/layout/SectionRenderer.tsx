import { PortfolioData } from '@/data/portfolioData';
import { ExperienceSection } from '@/components/sections/Experience/ExperienceSection';
import { EducationSection } from '@/components/sections/Education/EducationSection';
import { SkillsSection } from '@/components/sections/Skills/SkillsSection';
import { ProjectsSection } from '@/components/sections/Projects/ProjectsSection';
import { AchievementsSection } from '@/components/sections/Achievements/AchievementsSection';
import { ExtracurricularsSection } from '@/components/sections/Extracurriculars/ExtracurricularsSection';
import { EventsSection } from '@/components/sections/Events/EventsSection';
import { PublicationsSection } from '@/components/sections/Publications/PublicationsSection';
import { ContactSection } from '@/components/sections/Contact/ContactSection';

interface SectionRendererProps {
  sectionId: string;
  data: PortfolioData;
}

export const SectionRenderer = ({ sectionId, data }: SectionRendererProps) => {
  const sections: Record<string, JSX.Element> = {
    experience: <ExperienceSection data={data.experience} />,
    education: <EducationSection data={data.education} />,
    skills: <SkillsSection data={data.skills} />,
    projects: <ProjectsSection data={data.projects} />,
    achievements: <AchievementsSection data={data.achievements} />,
    extracurriculars: <ExtracurricularsSection data={data.extracurriculars} />,
    events: <EventsSection data={data.events} />,
    publications: <PublicationsSection data={data.publications} />,
    contact: <ContactSection />,
  };

  return sections[sectionId] || null;
};
