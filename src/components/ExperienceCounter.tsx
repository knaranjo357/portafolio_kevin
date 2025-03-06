import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { calculateExperience } from '../utils/experienceCalculator';

interface ExperienceCounterProps {
  className?: string;
}

const ExperienceCounter: React.FC<ExperienceCounterProps> = ({ className = '' }) => {
  const [experience, setExperience] = useState(calculateExperience());

  // Update experience every month
  useEffect(() => {
    const interval = setInterval(() => {
      setExperience(calculateExperience());
    }, 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <p className="text-blue-600 font-bold text-4xl">{experience}+</p>
    </motion.div>
  );
};

export default ExperienceCounter;