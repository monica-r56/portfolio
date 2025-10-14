import { User, Briefcase, BookOpen, Code, Trophy, Users, FileText, Mail, Calendar } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
}

export const navigationItems: NavigationItem[] = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FileText },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'extracurriculars', label: 'Activities', icon: Users },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface MainNavigationProps {
  onSectionClick: (sectionId: string) => void;
}

export const MainNavigation = ({ onSectionClick }: MainNavigationProps) => {
  return (
    // FIX: Changed max-w-6xl to max-w-4xl and added mx-auto to align with IntroSection
    <div className="w-full max-w-4xl mx-auto px-4 mt-8">
      {/* Removed redundant mx-auto from here since the parent div is now centered and constrained */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {navigationItems.slice(0, 8).map(item => (
          <button
            key={item.id}
            onClick={() => onSectionClick(item.id)}
            className="main-nav-button group nav-button-glow bg-white/70"
          >
            <item.icon size={28} className="text-purple-500 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-cyan-400">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => onSectionClick('contact')}
          className="w-64 h-12 flex items-center justify-center text-lg font-bold 
                     dm-button-main bg-white/50 dark:bg-gray-700/50 rounded-lg shadow-xl 
                     text-gray-800 dark:text-white"
        >
          <Mail size={20} className="mr-3" />
          Get In Touch
        </button>
      </div>
    </div>
  );
};
