import { motion } from 'framer-motion';
import { Compass, Handshake, Briefcase, Users, PenTool, GitBranch, Heart, MessageSquare } from 'lucide-react';
import { ExtracurricularItem } from '@/data/portfolioData';
import { staggerChildren } from '@/utils/animations';

interface ExtracurricularsSectionProps {
  data: ExtracurricularItem[];
}

interface ActivityItemProps {
  activity: ExtracurricularItem;
  index: number;
}

const ActivityItem = ({ activity, index }: ActivityItemProps) => {
  let Icon;
  if (activity.icon) {
    Icon = activity.icon;
  } else {
    const defaultIcons = [Compass, Handshake, Briefcase, Users, PenTool, GitBranch, Heart, MessageSquare];
    Icon = defaultIcons[index % defaultIcons.length];
  }

  return (
    <motion.div
      {...staggerChildren(index, 0.1)}
      className="section-card-alt p-6 card-hover-effect card-default-border-light"
    >
      <div className="flex items-start">
        <Icon className="text-cyan-500 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{activity.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{activity.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ExtracurricularsSection = ({ data }: ExtracurricularsSectionProps) => (
  <div className="grid md:grid-cols-2 gap-6 mt-0">
    {data.map((activity, index) => <ActivityItem key={index} activity={activity} index={index} />)}
  </div>
);
