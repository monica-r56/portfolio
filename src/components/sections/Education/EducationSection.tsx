import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EducationItem } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface EducationSectionProps {
  data: EducationItem[];
}

export const EducationSection = ({ data }: EducationSectionProps) => (
  <div className="space-y-6 mt-0">
    {data.map((edu, index) => (
      <motion.div
        key={index}
        {...staggerChildren(index, 0.2)}
        className="section-card p-6 relative flex items-start space-x-4 card-hover-effect card-default-border-light"
      >
        <GraduationCap size={32} className="text-emerald-500 dark:text-emerald-300 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">{edu.school}</p>
          <div className="flex flex-wrap gap-4 items-center mt-3">
            <span className="inline-block bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200 text-sm py-1.5 px-4 rounded-full w-fit">
              {edu.year}
            </span>
            <span className="text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
