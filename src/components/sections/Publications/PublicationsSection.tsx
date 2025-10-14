import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PublicationItem as PublicationItemType } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface PublicationsSectionProps {
  data: PublicationItemType[];
}

const PublicationItem = ({ publication, index }: { publication: PublicationItemType; index: number }) => (
  <motion.div
    key={index}
    {...staggerChildren(index, 0.1)}
    className="section-card-alt p-6 card-hover-effect card-default-border-light"
  >
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{publication.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{publication.journal}</p>
      </div>
      <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
        <span className="inline-block bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200 w-fit text-sm py-1.5 px-4 rounded-full">{publication.year}</span>
        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-900 text-sm px-4 py-1.5 rounded-full hover:bg-gray-900 transition-colors duration-300"
        >
          View Paper
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  </motion.div>
);

export const PublicationsSection = ({ data }: PublicationsSectionProps) => (
  <div className="space-y-6 mt-0">
    {data.map((publication, index) => <PublicationItem key={index} publication={publication} index={index} />)}
  </div>
);
