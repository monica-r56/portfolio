import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import { EventItem } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface EventsSectionProps {
  data: EventItem[];
}

export const EventsSection = ({ data }: EventsSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 mt-0">
      {data.map((event, index) => {
        const isOpen = openIndex === index;

        // FIX 1: Clean the image path by removing the redundant 'public/' prefix
        // This ensures the image loads correctly from the public directory.
        const imagePath = event.image.replace('public/', '/');

        return (
          <motion.div
            key={index}
            {...staggerChildren(index, 0.1)}
            className="w-full"
          >
            <button
              onClick={() => handleToggle(index)}
              className="section-card-alt p-6 w-full text-left transition-all duration-300 card-hover-effect card-default-border-light"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Calendar size={28} className="text-purple-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
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
                      // FIX 2: Use the dynamic imagePath from the data
                      src={imagePath}
                      alt={`Certificate for ${event.title}`}
                      className="w-full max-w-md rounded-lg shadow-md mx-auto"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};