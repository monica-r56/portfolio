import { motion } from 'framer-motion';
import { ExperienceItem } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => (
  <div className="timeline-container-left">
    <div className="timeline-line-left"></div>
    {data.map((job, index) => (
      <motion.div
        key={index}
        {...staggerChildren(index, 0.2)}
        className="timeline-item-left"
      >
        {/* Logo space - to be filled with company logos */}
        <div className="timeline-logo-space">
          {/* Company logo will go here */}
        </div>
        
        {/* Dot or Chevrons based on promotion */}
        {job.title === "Software Developer Intern" ? (
          <div className="timeline-chevrons">
            <div className="chevron-up"></div>
            <div className="chevron-up"></div>
            <div className="chevron-up"></div>
          </div>
        ) : (
          <div className="timeline-dot experience-dot-glow"></div>
        )}
        
        <div className="experience-card timeline-card card-hover-effect card-default-border-light">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company}</p>
            </div>
            <span className="inline-block bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200 mt-2 md:mt-0 text-sm py-1.5 px-4 rounded-full flex-shrink-0">
              {job.period}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);
