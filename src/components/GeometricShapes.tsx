import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface GeometricShapesProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const GeometricShapes: React.FC<GeometricShapesProps> = ({ 
  variant = 'light',
  className = ''
}) => {
  const { scrollYProgress } = useScroll();
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const baseColorClass = variant === 'light' 
    ? 'from-blue-500/10 to-violet-500/10'
    : 'from-slate-800/10 to-slate-900/10';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large circle */}
      <motion.div
        style={{ rotate: rotate1, scale }}
        className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-r ${baseColorClass} rounded-full blur-3xl`}
      />

      {/* Small circle */}
      <motion.div
        style={{ rotate: rotate2, y: translateY }}
        className={`absolute -left-10 top-1/4 w-40 h-40 bg-gradient-to-r ${baseColorClass} rounded-full blur-2xl`}
      />

      {/* Rectangle */}
      <motion.div
        style={{ rotate: rotate1, scale }}
        className={`absolute right-1/4 bottom-0 w-60 h-60 bg-gradient-to-r ${baseColorClass} rounded-3xl blur-3xl`}
      />

      {/* Small shapes for mobile */}
      <motion.div
        style={{ rotate: rotate2 }}
        className={`absolute left-5 bottom-10 w-20 h-20 bg-gradient-to-r ${baseColorClass} rounded-lg blur-xl`}
      />
    </div>
  );
};

export default GeometricShapes;