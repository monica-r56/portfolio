import { motion } from 'framer-motion';
import { ProjectItem } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface ProjectsSectionProps {
  data: ProjectItem[];
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
    {data.map((project, index) => (
      <motion.div
        key={index}
        {...staggerChildren(index, 0.1)}
        className="project-card group card-hover-effect card-default-border-light"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold gradient-text mb-3">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="inline-block bg-gray-600 text-white dark:bg-gray-500 dark:text-white px-3 py-1 text-xs rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
