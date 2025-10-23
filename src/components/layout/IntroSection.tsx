import { motion } from 'framer-motion';

interface IntroSectionProps {
  name: string;
  title: string;
  bio: string;
  profilePic: string;
  theme: 'light' | 'dark';
}

const shimmerVariants = {
  initial: {
    backgroundPosition: '200% 0', 
  },
  animate: {
    backgroundPosition: '-200% 0', 
  },
};

export const IntroSection = ({ name, title, bio, profilePic, theme }: IntroSectionProps) => {
  
  const liveGradient = theme === 'dark'
    ? 'linear-gradient(90deg, #4F46E5, #22D3EE, #8B5CF6, #22D3EE, #4F46E5)' 
    : 'linear-gradient(90deg, #A855F7, #06B6D4, #7C3AED, #22D3EE, #A855F7)'; 

  const nameShimmerGradient = theme === 'dark' 
    ? 'linear-gradient(90deg, #35537dff 0%, #5fa0e9ff 35%, #22D3EE 65%, #1f2937 100%)' 
    : 'linear-gradient(90deg, #9caeecff 0%, #A855F7 30%, #06B6D4 70%, #E0E7FF 100%)'; 

  return (
    <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
      
      <style>{`
        /* Custom keyframe for continuous slow rotation */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Custom keyframe for reverse rotation to stabilize image */
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 8s linear infinite;
        }
      `}</style>

      <div 
        className="
          w-36 h-36 p-[0.85px] rounded-full 
          mx-auto mt-4 mb-4 shadow-xl 
          transition-all duration-300 ease-in-out
          hover:scale-[1.03] hover:shadow-2xl
          animate-spin-slow 
        "
        style={{
          background: liveGradient,
          backgroundSize: '300% 300%', 
        }}
      >
        <div 
          className={`w-full h-full rounded-full overflow-hidden p-0 
            ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} 
            relative transition-colors duration-500 animate-spin-slow-reverse`}
        >
            <img
              src={profilePic}
              alt="Profile Photo"
              className="w-full h-full rounded-full object-cover"
            />
        </div>
      </div>
      
      <motion.h1
        className="
          text-5xl sm:text-6xl font-extrabold mb-2 
          bg-clip-text text-transparent
        "
        style={{
          backgroundImage: nameShimmerGradient,
          backgroundSize: '400% 100%', 
        }}
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5, 
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {name}
      </motion.h1>

      <p className={`text-xl sm:text-2xl mb-4 font-medium ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
        {title}
      </p>

      <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-white/90' : 'text-gray-600'}`}
        style={{ whiteSpace: 'pre-wrap' }}>
        {bio}
      </p>
    </div>
  );
};
