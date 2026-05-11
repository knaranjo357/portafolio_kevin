import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface GeometricShapesProps {
  className?: string;
}

const GeometricShapes: React.FC<GeometricShapesProps> = ({ 
  className = ''
}) => {
  const { scrollYProgress } = useScroll();
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large cinematic glow - Top Right */}
      <motion.div
        style={{ rotate: rotate1, scale }}
        className="absolute -right-[10%] -top-[10%] w-[1000px] h-[1000px] bg-gradient-to-br from-gold/10 via-slate-100/20 to-transparent rounded-full blur-[150px]"
      />

      {/* Floating accent shape - Mid Left */}
      <motion.div
        style={{ rotate: rotate2, y: translateY }}
        className="absolute -left-40 top-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-[120px]"
      />

      {/* Deep accent shape - Bottom Right */}
      <motion.div
        style={{ rotate: rotate1, scale }}
        className="absolute right-[5%] -bottom-40 w-[700px] h-[700px] bg-slate-50 rounded-full blur-[180px]"
      />

      {/* Animated small particles for a "living" UI */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-[15%] top-1/3 w-3 h-3 bg-gold/40 rounded-full blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute right-[20%] top-2/3 w-5 h-5 bg-slate-200/50 rounded-full blur-md"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        className="absolute left-1/2 top-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default GeometricShapes;