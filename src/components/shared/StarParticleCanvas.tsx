import { useState, useEffect, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface StarParticleCanvasProps {
  theme: 'light' | 'dark';
}

const MAX_STARS = 120;
const MIN_STARS = 50;
const MOBILE_BREAKPOINT = 768;

export const StarParticleCanvas = ({ theme }: StarParticleCanvasProps) => {
  const [stars, setStars] = useState<Star[]>([]);

  const createStar = useCallback((): Star => {
    return {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.5,
    };
  }, []);

  useEffect(() => {
    const updateStarDensity = () => {
      const count = window.innerWidth < MOBILE_BREAKPOINT ? MIN_STARS : MAX_STARS;

      if (stars.length !== count) {
        const newStars = Array.from({ length: count }).map(createStar);
        setStars(newStars);
      }
    };

    updateStarDensity(); 

    window.addEventListener('resize', updateStarDensity);

    return () => window.removeEventListener('resize', updateStarDensity);
  }, [createStar, stars.length]); 

  const starColor = theme === 'dark' ? 'var(--gold)' : 'rgba(236, 72, 153, 0.9)';

  return (
    <div className="star-canvas-full">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-particle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            backgroundColor: starColor,
          }}
        ></div>
      ))}
    </div>
  );
};