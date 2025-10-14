import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
}

export const TypingText = ({ text }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text, index]);

  return (
    <p className="text-xl font-serif font-medium italic text-green-700 dark:text-green-300">
      {displayedText}
    </p>
  );
};
