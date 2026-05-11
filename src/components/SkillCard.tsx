import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="premium-card p-10 group bg-white relative overflow-hidden perspective-1000"
    >
      {/* Background glow on hover */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl inline-block text-gold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold/20">
          {icon}
        </div>
        <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-light text-justify">{description}</p>
        
        {/* Decorative accent */}
        <div className="mt-8 h-1 w-12 bg-gradient-to-r from-gold to-transparent rounded-full opacity-30 group-hover:w-full transition-all duration-700"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;