import { motion } from 'framer-motion';
import { SkillCategory } from '@/data/portfolioData';
import { fadeInUp } from '@/utils/animations';

interface SkillsSectionProps {
  data: SkillCategory[];
}

export const SkillsSection = ({ data }: SkillsSectionProps) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
    {data.map((category, index) => (
      <motion.div
        key={index}
        {...fadeInUp}
        transition={{ duration: 0.3 }}
        className="skills-card-new p-4 text-center card-hover-effect card-default-border-light relative"
      >
        <div className="mt-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.category}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="inline-block bg-gray-200/50 text-gray-700 dark:bg-gray-700/50 dark:text-gray-300 px-3 py-1 text-base font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
