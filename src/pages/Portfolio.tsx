import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { StarParticleCanvas } from '@/components/shared/StarParticleCanvas';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { IntroSection } from '@/components/layout/IntroSection';
import { MainNavigation, navigationItems } from '@/components/layout/MainNavigation';
import { SectionRenderer } from '@/components/layout/SectionRenderer';
import '@/styles/portfolio.css';
import { useLocation, useNavigate } from 'react-router-dom'; 

const Portfolio = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('portfolioTheme');
            return savedTheme === 'dark' ? 'dark' : 'light';
        }
        return 'light';
    });
    
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const activeSection = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : null; 
    const showProfile = !activeSection || activeSection === 'portfolio'; 

    useEffect(() => {
        document.documentElement.className = theme;
        if (typeof window !== 'undefined') {
            localStorage.setItem('portfolioTheme', theme);
        }
    }, [theme]);

    const handleScroll = useCallback(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress > 100 ? 100 : progress);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleSectionClick = (sectionId: string) => {
        navigate(sectionId); 
        window.scrollTo(0, 0);
    };

    const handleGoBack = () => {
        navigate(-1); 
        window.scrollTo(0, 0);
    };

    return (
        <div className={`min-h-screen relative overflow-hidden ${theme}`}>
            {showProfile && <StarParticleCanvas theme={theme} />}
            <ScrollProgress scrollProgress={scrollProgress} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="min-h-screen pb-6 flex flex-col items-center justify-start relative z-10 pt-4 main-content-overlay">
                <AnimatePresence mode="wait">
                    {showProfile && (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.5 }}
                            className="w-full relative z-20"
                        >
                            <IntroSection
                                name={portfolioData.intro.name}
                                title={portfolioData.intro.title}
                                bio={portfolioData.intro.bio}
                                profilePic={portfolioData.intro.profilePic}
                                theme={theme}
                            />
                            <MainNavigation onSectionClick={handleSectionClick} />
                        </motion.div>
                    )}
                    {activeSection && activeSection !== 'portfolio' && ( 
                        <motion.div
                            key="section"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-6xl px-4 mt-12 sm:mt-16 relative z-10"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-4xl font-bold gradient-text">
                                    {navigationItems.find(item => item.id === activeSection)?.label}
                                </h2>
                                <button onClick={handleGoBack} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium">
                                    <ArrowRight size={20} className="mr-2 rotate-180" />
                                </button>
                            </div>
                            <SectionRenderer sectionId={activeSection} data={portfolioData} />
                        </motion.div>
                    )}
                    {activeSection === 'portfolio' && showProfile && (
                        <motion.div
                            key="profile-fallback"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full relative z-20"
                        >
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <footer className="w-full py-8 border-t border-gray-200 dark:border-gray-800 mt-6 relative z-10 bg-pink-200/80 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-4xl font-stylish-new mb-4 select-none text-gray-800 dark:text-gray-200">Connect With Me</h3>
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://github.com/monica-r56" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <Github size={24} className="text-gray-800 dark:text-white" />
                        </a>
                        <a href="http://www.linkedin.com/in/monica-krishnan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <Linkedin size={24} className="text-gray-800 dark:text-white" />
                        </a>
                        <a href="mailto:monicasrikrish@gmail.com" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <Mail size={24} className="text-gray-800 dark:text-white" />
                        </a>
                    </div>
                    <p className="text-gray-500 select-none dark:text-gray-500 text-sm">
                        © 2025 Monica R. Crafted with ☕ and lots of ❤️!
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
