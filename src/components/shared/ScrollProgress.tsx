interface ScrollProgressProps {
  scrollProgress: number;
}

export const ScrollProgress = ({ scrollProgress }: ScrollProgressProps) => {
  return (
    <div
      className="fixed top-0 left-0 h-1 z-[60]"
      style={{
        width: `${scrollProgress}%`,
        background: `linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))`,
        transition: 'width 0.1s linear'
      }}
    ></div>
  );
};
