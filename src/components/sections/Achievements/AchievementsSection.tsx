import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { staggerChildren } from '@/utils/animations';

interface AchievementItemData {
  text: string;
  image: string;
}

interface AchievementsSectionProps {
  data: AchievementItemData[];
}

interface AchievementItemProps {
  achievement: AchievementItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AchievementItem = ({ achievement, index, isOpen, onToggle }: AchievementItemProps) => {
  const StarIcon = Star;
  
  const imagePath = achievement.image.replace('public/', '/');

  return (
    <motion.div
      {...staggerChildren(index, 0.1)}
      className="w-full"
    >
      <button
        onClick={onToggle}
        className="section-card-alt p-6 w-full text-left transition-all duration-300 card-hover-effect card-default-border-light"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            {isOpen ? (
              <StarIcon className="text-yellow-500 mr-4 mt-1 flex-shrink-0 fill-yellow-500" size={24} />
            ) : (
              <StarIcon className="text-yellow-600 mr-4 mt-1 flex-shrink-0" size={24} />
            )}
            <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{achievement.text}</p>
          </div>
          <ChevronDown
            size={20}
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full pt-4 border-t border-gray-200 dark:border-gray-700 mt-4"
            >
              <img
                src={imagePath}
                alt={`Evidence for ${achievement.text}`}
                className="w-full max-w-md rounded-lg shadow-md mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

export const AchievementsSection = ({ data }: AchievementsSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 mt-0">
      {data.map((achievement, index) => (
        <AchievementItem
          key={index}
          achievement={achievement}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};