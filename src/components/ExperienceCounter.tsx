import React from 'react';
import { calculateExperience } from '../utils/experienceCalculator';

interface ExperienceCounterProps {
  className?: string;
}

const ExperienceCounter: React.FC<ExperienceCounterProps> = ({ className = '' }) => (
  <div className={className}>
    <p className="text-gold font-bold text-4xl">{calculateExperience()}+</p>
  </div>
);

export default ExperienceCounter;
