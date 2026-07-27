import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => (
  <span className={className}>{text}</span>
);

export default AnimatedText;
